// Hexagram
// Copyright (C) 2021  Oleg Petrenko
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as published by
// the Free Software Foundation, version 3 of the License.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Lesser General Public License for more details.
//
// You should have received a copy of the GNU Lesser General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.

import * as TL from '../tdlib/tdapi'
import { Chat, User, Message, Supergroup, File } from './types'
import { StoreEvent, listeners, Store } from './wrap'
import { action, computed, keys, observable } from "mobx"
import { tg, dispatchTelegramEventHandler } from '../tdlib/tdlib'

export enum LoginState {
	WaitTDLib,
	WaitPhoneNumber,
	WaitCode,
	WaitRegistration,
	WaitPassword,
	Ready
}

const createIfNone = <T>(map: { [id: number]: T }, id: number, Type: { new(id: number): T }): T => {
	const value = map[id]

	if (value) {
		return value
	}

	const stub = new Type(id)
	map[id] = stub
	return stub
}

export class State {
	// GUI
	@observable loaded: boolean
	@observable showSideBar: boolean
	@observable loginState: LoginState
	@observable hint: string
	@observable myId: number
	@observable currentChatId: number
	@observable search: string = ''

	// Opened dialogs
	@observable readonly chats: { readonly [chatId: number]: Chat }
	readonly users: { readonly [userId: number]: User }
	readonly messages: {
		[chatId: number]: { [messageId: number]: Message }
	}
	readonly supergroups: { [supergroupId: number]: Supergroup }
	readonly history: { [chatId: number]: number[] }

	// Files
	readonly files: { [fileId: number]: File }
	readonly filesQueue: number[]
	filesQueueBusy = false

	@computed get chatIds(): number[] {
		const result: number[] = []

		for (const key of keys(this.chats)) {
			const chat = this.chats[key as any as number]
			if (chat.order) result.push(chat.id)
		}

		return result
	}

	constructor() {
		this.loaded = false
		this.loginState = LoginState.WaitTDLib
		this.showSideBar = false
		this.myId = 0
		this.currentChatId = 0
		this.chats = observable({} as { readonly [chatId: number]: Chat })
		this.users = observable({} as { readonly [userId: number]: User }) // TODO observable!!!!!!!!!
		this.messages = observable({} as {
			[chatId: number]: { [messageId: number]: Message }
		})
		this.supergroups = observable({} as { [supergroupId: number]: Supergroup }) // TODO observable
		this.files = {}
		this.filesQueue = []
		this.hint = ''
		this.history = observable({} as { [chatId: number]: number[] })

		dispatchTelegramEventHandler.handle = (updates: TL.TLObject[]) => this.mergeAll(updates)
	}

	private dispatched: StoreEvent = null as unknown as StoreEvent

	private dispatcher = (store: Store) => {
		store.listen(this.dispatched)
	}

	dispatch(e: StoreEvent) {
		this.dispatched = e
		listeners.forEach(this.dispatcher)
	}

	getOrCreateMessages(chatId: number): {
		[message_id: number]: Message
	} {
		const messages = this.messages[chatId]
		if (messages) {
			return messages
		}

		const result = observable({} as {
			[message_id: number]: Message
		})
		this.messages[chatId] = result
		return result
	}

	getOrCreateMessage(chatId: number, messageId: number): Message {
		const messages = this.getOrCreateMessages(chatId)
		return createIfNone(messages, messageId, Message)
	}

	getOrCreateHistory(chatId: number): number[] {
		const history = this.history[chatId]
		if (history) {
			return history
		}

		const result = observable([] as number[])
		this.history[chatId] = result
		return result
	}

	saveChatHistory(chatId: number, posts: ReadonlyArray<TL.TLMessage>) {
		const messages = this.getOrCreateMessages(chatId)

		for (const post of posts) {
			createIfNone(messages, post.id, Message).merge(post)
		}

		this.history[chatId] = observable(posts.map(message => message.id))
	}

	selectChat(chatId: number): void {
		// TODO ignore if chat not present or
		// we can write to people who aren't on chat list?
		// well, they are not selected anyway,
		// but viewed via history viewer
		// so it has to be different mechanism (like CurrentPeerType aggregate)
		tg.openChat(chatId)
		this.currentChatId = chatId
	}

	downloadFile(tl: TL.TLFile, generateUrl: boolean = false) {
		const id = tl.id
		if (!tl.local.can_be_downloaded) return
		if (this.filesQueue.includes(id)) return
		const file = createIfNone(this.files, id, File)
		file.preserve = file.preserve || generateUrl
		if (file.active) return
		if (file.completed) return
		// TODO move .url to computed on-demand property
		this.filesQueue.push(id)
		this.downloadNextFile()
	}

	// TODO concurrent downloads
	// TODO remove weird delay (maybe do no deque at all for file updates? or shorten them to 10ms?)
	downloadNextFile() {
		if (this.filesQueue.length < 1) return
		if (this.filesQueueBusy) return

		const id = this.filesQueue.shift() ?? 0
		const file = createIfNone(this.files, id, File)

		if (file.active || file.completed) {
			this.downloadNextFile()
			return
		}

		this.filesQueueBusy = true
		tg.downloadFile(id, 30, 0, 0, false)
	}

	async saveFileParts(file: File) {
		const id = file.id
		const filePart: Uint8Array = (await tg.readFilePart(id, 0, 0)).data
		file.parts = (await (new Response(filePart as unknown as Blob)).arrayBuffer()) as Uint8Array
		file.url = window.URL.createObjectURL(filePart)
		this.downloadNextFile()
	}

	file(tl: TL.TLFile) {
		const id = tl.id
		const file = createIfNone(this.files, id, File)
		return file
	}

	fileURL(tl: TL.TLFile) {
		const id = tl.id
		const file = createIfNone(this.files, id, File)
		return file.url
	}

	fileParts(tl: TL.TLFile) {
		const id = tl.id
		const file = createIfNone(this.files, id, File)
		return file.parts
	}

	async logOut() {
		this.loaded = false
		await tg.logOut()
		setTimeout(() => {
			window.location.reload()
		}, 1000)
	}

	@action
	mergeAll(updates: TL.TLObject[]): void {
		updates.map(update => this.merge(update))
	}

	merge(update: TL.TLObject): void {
		switch (update['@type']) {
			case "updateAuthorizationState":
				{
					const updateAuthorizationState = update
					switch (updateAuthorizationState.authorization_state['@type']) {
						case "authorizationStateWaitPhoneNumber":
							this.loginState = LoginState.WaitPhoneNumber
							break
						case "authorizationStateWaitCode":
							this.loginState = LoginState.WaitCode
							break
						case "authorizationStateWaitRegistration":
							this.loginState = LoginState.WaitRegistration
							break
						case "authorizationStateWaitPassword":
							this.loginState = LoginState.WaitPassword
							const authorizationStateWaitPassword = updateAuthorizationState.authorization_state
							this.hint = authorizationStateWaitPassword.password_hint
							break
						case "authorizationStateReady":
							this.loginState = LoginState.Ready
							break
					}
				}
				break

			case "updateOption":
				{
					const updateOption = update
					switch (updateOption.name) {
						case "version":
							this.loaded = true
							break
						case "my_id":
							if (updateOption.value['@type'] === 'optionValueInteger') {
								this.myId = parseFloat(updateOption.value.value)
							}
							break
						default:
							console.warn('Unknown update option', update)
					}
				}
				break

			case "updateNewChat":
				{
					const updateNewChat = update
					const chat_id = updateNewChat.chat.id
					const chat = createIfNone(this.chats, chat_id, Chat)
					chat.merge(updateNewChat.chat)
				}
				break

			case "updateChatLastMessage":
				{
					const updateChatLastMessage = update
					if (updateChatLastMessage.last_message == null) {
						console.warn('updateChatLastMessage TODO handle empty last_message')
						break
					}

					const message = new Message(updateChatLastMessage.last_message.id).merge(updateChatLastMessage.last_message)
					const chat_id = updateChatLastMessage.chat_id
					const chat = createIfNone(this.chats, chat_id, Chat)
					const messages = this.getOrCreateMessages(chat_id)
					messages[message.id] = message
					for (const position of updateChatLastMessage.positions) {
						if (position.list['@type'] === 'chatListMain') {
							chat.order = position.order
							chat.isPinned = position.is_pinned
							break
						}
					}
					chat.lastMessage = message.id

					const history = this.getOrCreateHistory(chat_id)
					if (history.length === 0) {
						history.unshift(message.id)
					}
				}
				break

			case "updateChatPosition":
				{
					const updateChatPosition = update
					const chat_id = updateChatPosition.chat_id
					const chat = createIfNone(this.chats, chat_id, Chat)
					const position = updateChatPosition.position

					if (position.list['@type'] === 'chatListMain') {
						chat.order = position.order
						chat.isPinned = position.is_pinned
						break
					}
				}
				break

			case "updateChatUnreadMentionCount":
				{
					const updateChatUnreadMentionCount = update
					const chat_id = updateChatUnreadMentionCount.chat_id
					const chat = createIfNone(this.chats, chat_id, Chat)
					chat.mentions = updateChatUnreadMentionCount.unread_mention_count
				}
				break

			case "updateMessageMentionRead":
				{
					const updateMessageMentionRead = update
					const chat_id = updateMessageMentionRead.chat_id
					const chat = createIfNone(this.chats, chat_id, Chat)
					chat.mentions = updateMessageMentionRead.unread_mention_count
					// TODO probably means something different
					// TODO message_id
				}
				break

			case "updateNewMessage":
				{
					const updateNewMessage = update
					const message = new Message(updateNewMessage.message.id).merge(updateNewMessage.message)
					const chat_id = updateNewMessage.message.chat_id
					const chat = createIfNone(this.chats, chat_id, Chat)
					const messages = this.getOrCreateMessages(chat_id)
					messages[message.id] = message
					const history = this.getOrCreateHistory(chat_id)
					history.unshift(message.id)
					chat.lastMessage = message.id
				}
				break

			case "updateDeleteMessages":
				{
					const updateDeleteMessages = update
					if (updateDeleteMessages.is_permanent === false) break
					if (updateDeleteMessages.from_cache === true) break
					const chat_id = updateDeleteMessages.chat_id
					const history = this.getOrCreateHistory(chat_id)
					this.history[chat_id] = observable(history.filter(id => updateDeleteMessages.message_ids.indexOf(id) === -1))
					// TODO optimization: just mark message as deleted = true
				}
				break

			case "updateChatReadInbox":
				{
					const updateChatReadInbox = update
					const chat_id = updateChatReadInbox.chat_id
					const chat = createIfNone(this.chats, chat_id, Chat)
					chat.unreadCount = updateChatReadInbox.unread_count
				}
				break

			case "updateChatDraftMessage":
				{
					// TODO consider `order`
					const updateChatDraftMessage = update
					const chat_id = updateChatDraftMessage.chat_id
					const chat = createIfNone(this.chats, chat_id, Chat)
					const draft_message: TL.TLDraftMessage | null = updateChatDraftMessage.draft_message

					if (draft_message == null) {
						chat.draft = null
					} else {
						chat.draft = draft_message.input_message_text
						chat.replyToMessageIdDraft = draft_message.reply_to_message_id
					}
				}
				break

			case "updateChatOnlineMemberCount":
				{
					const updateChatOnlineMemberCount = update
					const chat_id = updateChatOnlineMemberCount.chat_id
					const chat = createIfNone(this.chats, chat_id, Chat)
					chat.onlineMemberCount = updateChatOnlineMemberCount.online_member_count
				}
				break

			case "updateMessageContent":
				{
					const updateMessageContent = update
					const chat_id = updateMessageContent.chat_id
					const messages = this.getOrCreateMessages(chat_id)
					const message_id = updateMessageContent.message_id
					const message = createIfNone(messages, message_id, Message)
					message.content = updateMessageContent.new_content
				}
				break

			case "updateSupergroup":
				{
					const updateSupergroup = update
					const supergroup = createIfNone(this.supergroups, updateSupergroup.supergroup.id, Supergroup)
					supergroup.merge(updateSupergroup.supergroup)
				}
				break

			case "updateFile":
				{
					const updateFile = update
					const file = createIfNone(this.files, updateFile.file.id, File)
					file.completed = updateFile.file.local.is_downloading_completed
					file.active = updateFile.file.local.is_downloading_active
					if (file.completed) {
						this.filesQueueBusy = false

						if (file.preserve && file.parts == null) {
							this.saveFileParts(file)
						} else {
							this.downloadNextFile()
						}
					}
				}
				break

			case "updateUser":
				{
					const updateUser = update
					const user = createIfNone(this.users, updateUser.user.id, User)
					user.merge(updateUser.user)
				}
				break

			case "updateUserStatus":
				{
					const updateUserStatus = update
					const user = createIfNone(this.users, updateUserStatus.user_id, User)
					user.status = updateUserStatus.status
				}
				break

			// TODO updateUser updateUserFullInfo
			// TODO updateSupergroup

			default:
				console.warn('Unknown update', update['@type'], update)
				return
		}

		console.log('Handled update', update['@type'])
	}
}

export const state: State = new State()
