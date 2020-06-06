// Hexagram
// Copyright (C) 2020  Oleg Petrenko
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

import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import * as TL from '../tdlib/tdapi'
import { Chat, User, Message, Supergroup } from './types'
import { chatToState, messageToState, supergroupToState, userToState } from './converters'

export enum LoginState {
  WaitTDLib,
  WaitPhoneNumber,
  WaitCode,
  WaitRegistration,
  WaitPassword,
  Ready
}

export interface State {
	// GUI
	readonly loaded: boolean
	readonly showSideBar: boolean
	readonly loginState: LoginState
	readonly myId: number
	readonly currentChatId: number

	// Opened dialogs
	readonly chatIds: ReadonlyArray<number>
	readonly chats: { readonly [chat_id: number]: Chat }
	readonly users: { readonly [user_id: number]: User }
	readonly messages: {
		readonly [chat_id: number]: { readonly [message_id: number]: Message }
	}
	readonly supergroups: { readonly [supergroup_id: number]: Supergroup }
	readonly history: { readonly [chat_id: number]: number[] }

	// Files
	readonly files: { readonly [file_id: number]: TL.TLFile }
	readonly fileURL: { readonly [file_id: number]: string }
	// If true, then downloadFile & readFilePart should NOT be repeated
	readonly fileLoads: { readonly [file_id: number]: number }
}

const initialState: State = {
	loaded: false,
	loginState: LoginState.WaitTDLib,
	showSideBar: false,
	myId: 0,
	currentChatId: 0,
	chatIds: [],
	chats: {},
	users: {},
	messages: {},
	supergroups: {},
	files: {},
	fileURL: {},
	fileLoads: {},
	history: {},
}

export interface TDLIB_UPDATE {
	readonly type: 'TDLIB_UPDATE'
	readonly payload: TL.TLObject
}

export interface TDLIB_QUEUE {
	readonly type: 'TDLIB_QUEUE'
	readonly payload: TL.TLObject[]
}

export interface TDLIB_MANUAL_UPDATE {
	readonly type: 'TDLIB_MANUAL_UPDATE'
	readonly payload: TL.TLObject | null
}

export interface SELECT_CHAT {
	readonly type: 'SELECT_CHAT'
	readonly payload: number
}

export interface SAVE_CHAT_HISTORY {
	readonly type: 'SAVE_CHAT_HISTORY'
	readonly payload: {
		chat_id: number,
		messages: ReadonlyArray<TL.TLMessage>
	}
}

export interface SAVE_FILE_URL {
	readonly type: 'SAVE_FILE_URL'
	readonly payload: {
		id: number,
		url: string
	}
}

export interface SAVE_FILE_LOADS {
	readonly type: 'SAVE_FILE_LOADS'
	readonly payload: {
		id: number,
		loads: number
	}
}

export interface SET_SIDEBAR_VISIBILITY {
	readonly type: 'SET_SIDEBAR_VISIBILITY'
	readonly payload: {
		showSideBar: boolean
	}
}

interface INIT {
	readonly type: '@@INIT'
}

export type ActionTypes =
	INIT |
	TDLIB_UPDATE |
	TDLIB_QUEUE |
	SELECT_CHAT |
	SAVE_CHAT_HISTORY |
	SAVE_FILE_URL |
	SAVE_FILE_LOADS |
	SET_SIDEBAR_VISIBILITY |
	TDLIB_MANUAL_UPDATE

const reducer = (state: State = initialState, action: ActionTypes): State => {
	switch (action.type) {
		case "TDLIB_MANUAL_UPDATE": {
			// For nullable chatPhoto etc
			if (action.payload == null) return state

			console.log('Receive manual update', action.payload)
			const update: TL.TLObject = action.payload
			switch (update['@type']) {

				// Sent from main app
				case "chats":
					{
						const chats = TL.chats(update)
						return {
							...state,
						}
					}
					break;

				case "chatPhoto":
					{
						const chatPhoto = TL.chatPhoto(update)
						return {
							...state,
							files: {
								...state.files,
								[chatPhoto.big.id]: chatPhoto.big,
								[chatPhoto.small.id]: chatPhoto.small
							}
						}
					}
					break;

				case "profilePhoto":
					{
						const profilePhoto = TL.profilePhoto(update)
						return {
							...state,
							files: {
								...state.files,
								[profilePhoto.big.id]: profilePhoto.big,
								[profilePhoto.small.id]: profilePhoto.small
							}
						}
					}
					break;

				default:
					console.warn('Unknown manual update', update)
			}
		}
		break;

		case "TDLIB_QUEUE": {
			let restate = state
			const event = {
				type: 'TDLIB_UPDATE',
				payload: null as unknown as TL.TLObject
			}
			for (const payload of action.payload) {
				event.payload = payload
				restate = reducer(restate, event as ActionTypes)
			}
			return restate
		}
		break;

		case "TDLIB_UPDATE":
			const update: TL.TLObject = action.payload
			switch (update['@type']) {
				case "updateAuthorizationState":
					{
						const updateAuthorizationState = TL.updateAuthorizationState(update)
						switch (updateAuthorizationState.authorization_state['@type']) {
							case "authorizationStateWaitPhoneNumber":
								return {...state, loginState: LoginState.WaitPhoneNumber}
							case "authorizationStateWaitCode":
								return {...state, loginState: LoginState.WaitCode}
							case "authorizationStateWaitRegistration":
								return {...state, loginState: LoginState.WaitRegistration}
							case "authorizationStateWaitPassword":
								return {...state, loginState: LoginState.WaitPassword}
							case "authorizationStateReady":
								return {...state, loginState: LoginState.Ready}
						}
					}
					break;

				case "updateOption":
					{
						const updateOption = TL.updateOption(update)
						switch (updateOption.name) {
							case "version":
								return {...state, loaded: true}
							case "my_id":
								return {...state, myId: TL.optionValueInteger(updateOption.value).value}
						}
						console.warn('Unknown update option', update)
					}
					break;

				case "updateNewChat":
					{
						const updateNewChat = TL.updateNewChat(update)
						if (state.chatIds.includes(updateNewChat.chat.id)) return state
						return {
							...reducer(state, {
								type: 'TDLIB_MANUAL_UPDATE',
								payload: updateNewChat.chat.photo
							} as TDLIB_MANUAL_UPDATE),
							chatIds: [...state.chatIds, updateNewChat.chat.id],
							chats: {...state.chats, [updateNewChat.chat.id]: chatToState(updateNewChat.chat)}
						}
					}
					break;

				case "updateChatLastMessage":
					{
						const updateChatLastMessage = TL.updateChatLastMessage(update)
						if (updateChatLastMessage.last_message == null) {
							console.warn('updateChatLastMessage TODO handle empty last_message')
							return state
						}

						const message = messageToState(updateChatLastMessage.last_message)
						const chat_id = updateChatLastMessage.chat_id
						let chat = state.chats[chat_id]// ?? emptyChat(chat_id)
						if (chat == null) {
							console.warn('updateChatLastMessage for not yet loaded object')
							return state
						}
						return {
							...state,
							messages: {...state.messages, [chat_id]: {...state.messages[chat_id], [message.id]: message}},
							chats: {...state.chats, [chat_id]: {
								...chat,
								order: updateChatLastMessage.order,
								lastMessage: message.id
							}},
						}
					}
					break;

				case "updateChatOrder":
					{
						const updateChatOrder = TL.updateChatOrder(update)
						const chat_id = updateChatOrder.chat_id
						let chat = state.chats[chat_id]// ?? emptyChat(chat_id)
						if (chat == null) {
							console.warn('updateChatOrder for not yet loaded object')
							return state
						}
						return {
							...state,
							chats: {...state.chats, [chat_id]: {
								...chat,
								order: updateChatOrder.order,
							}},
						}
					}
					break;

					case "updateChatIsPinned":
					{
						const updateChatIsPinned = TL.updateChatIsPinned(update)
						const chat_id = updateChatIsPinned.chat_id
						let chat = state.chats[chat_id]// ?? emptyChat(chat_id)
						if (chat == null) {
							console.warn('updateChatIsPinned for not yet loaded object')
							return state
						}
						return {
							...state,
							chats: {...state.chats, [chat_id]: {
								...chat,
								order: updateChatIsPinned.order,
								isPinned: updateChatIsPinned.is_pinned
							}},
						}
					}
					break;

				case "updateChatUnreadMentionCount":
					{
						const updateChatUnreadMentionCount = TL.updateChatUnreadMentionCount(update)
						const chat_id = updateChatUnreadMentionCount.chat_id
						let chat = state.chats[chat_id]// ?? emptyChat(chat_id)
						if (chat == null) {
							console.warn('updateChatUnreadMentionCount for not yet loaded object')
							return state
						}
						return {
							...state,
							chats: {...state.chats, [chat_id]: {
								...chat,
								mentions: updateChatUnreadMentionCount.unread_mention_count,
							}},
						}
					}
					break;

				case "updateMessageMentionRead":
					{
						// TODO message_id
						const updateMessageMentionRead = TL.updateMessageMentionRead(update)
						const chat_id = updateMessageMentionRead.chat_id
						let chat = state.chats[chat_id]// ?? emptyChat(chat_id)
						if (chat == null) {
							console.warn('updateMessageMentionRead for not yet loaded object')
							return state
						}
						return {
							...state,
							chats: {...state.chats, [chat_id]: {
								...chat,
								mentions: updateMessageMentionRead.unread_mention_count,
							}},
						}
					}
					break;

				case "updateNewMessage":
					{
						const updateNewMessage = TL.updateNewMessage(update)
						const message = messageToState(updateNewMessage.message)
						const chat_id = updateNewMessage.message.chat_id
						let chat = state.chats[chat_id]
						return {
							...state,
							messages: {...state.messages, [chat_id]: {...state.messages[chat_id], [message.id]: message}},
							chats: {...state.chats, [chat_id]: {...chat, lastMessage: message.id}},

							// Save message to history
							history: {...state.history, [chat_id]:
								[message.id, ...(state.history[chat_id] ?? [])]
							}
						}
					}
					break;

				case "updateDeleteMessages":
					{
						const updateDeleteMessages = TL.updateDeleteMessages(update)
						if (updateDeleteMessages.is_permanent == false) return state
						if (updateDeleteMessages.from_cache == true) return state

						const chat_id = updateDeleteMessages.chat_id

						return {
							...state,
							history: {...state.history, [chat_id]:
								(state.history[chat_id] ?? []).filter(id => updateDeleteMessages.message_ids.indexOf(id) == -1)
							}
						}
					}
					break;

				case "updateChatReadInbox":
					{
						const updateChatReadInbox = TL.updateChatReadInbox(update)
						const chat_id = updateChatReadInbox.chat_id
						const chat = state.chats[chat_id]// ?? emptyChat(chat_id)
						if (chat == null) {
							console.warn('updateChatReadInbox for not yet loaded chat')
							return state
						}
						return {
							...state,
							chats: {...state.chats, [chat_id]: {...chat, unreadCount: updateChatReadInbox.unread_count}}
						}
					}
					break;

				case "updateChatDraftMessage":
					{
						// TODO consider `order`
						const updateChatDraftMessage = TL.updateChatDraftMessage(update)
						const chat_id = updateChatDraftMessage.chat_id
						const chat = state.chats[chat_id]
						const draft_message: TL.TLDraftMessage | null = updateChatDraftMessage.draft_message

						if (chat == null) {
							console.warn('updateChatDraftMessage for not yet loaded chat')
							return state
						}

						if (draft_message == null) {
							return {
								...state,
								chats: {...state.chats, [chat_id]: {...chat, draft: null}}
							}
						}

						return {
							...state,
							chats: {...state.chats, [chat_id]: {
									...chat,
									draft: draft_message.input_message_text,
									replyToMessageIdDraft: draft_message.reply_to_message_id
								}
							}
						}
					}
					break;

				case "updateChatOnlineMemberCount":
					{
						const updateChatOnlineMemberCount = TL.updateChatOnlineMemberCount(update)
						return {
							...state,
							chats: {...state.chats, [updateChatOnlineMemberCount.chat_id]: {
								...state.chats[updateChatOnlineMemberCount.chat_id],
								onlineMemberCount: updateChatOnlineMemberCount.online_member_count
							}}
						}
					}
					break;

				case "updateMessageContent":
					{
						const updateMessageContent = TL.updateMessageContent(update)
						const message = state.messages[updateMessageContent.chat_id][updateMessageContent.message_id]
						if (message != null) {
							return {
								...state,
								messages: {...state.messages, [updateMessageContent.chat_id]: {...state.messages[updateMessageContent.chat_id], [message.id]: {...message, content:updateMessageContent.new_content}}},
							}
						}
					}
					break;

				case "updateSupergroup":
					{
						const updateSupergroup = TL.updateSupergroup(update)
						return {
							...state,
							supergroups: {...state.supergroups, [updateSupergroup.supergroup.id]: supergroupToState(updateSupergroup.supergroup)},
						}
					}
					break;

				case "updateFile":
					{
						const updateFile = TL.updateFile(update)
						const file = state.files[updateFile.file.id]
						if (file != null) {
							if (
								file.local.is_downloading_completed == updateFile.file.local.is_downloading_completed
								&&
								file.local.is_downloading_active == updateFile.file.local.is_downloading_active
							) return state
						}
						return {
							...state,
							files: {...state.files, [updateFile.file.id]: updateFile.file}
						}
					}
					break;

				case "updateUser":
					{
						const updateUser = TL.updateUser(update)
						return {
							...reducer(state, {
								type: 'TDLIB_MANUAL_UPDATE',
								payload: updateUser.user.profile_photo
							} as TDLIB_MANUAL_UPDATE),
							users: {...state.users, [updateUser.user.id]: userToState(updateUser.user)}
						}
					}
					break;

				case "updateUserStatus":
					{
						const updateUserStatus = TL.updateUserStatus(update)
						return {
							...state,
							users: {...state.users, [updateUserStatus.user_id]: {
									...state.users[updateUserStatus.user_id],
									status: updateUserStatus.status
								}
							}
						}
					}
					break;


				// TODO updateUser updateUserFullInfo
		 		// TODO updateSupergroup

				default:
					console.warn('Unknown update', update)
			}
			break;

		case "SELECT_CHAT":
			{
				const selectChat = action as SELECT_CHAT
				// TODO ignore if chat not present or
				// we can write to people who aren't on chat list?
				// well, they are not selected anyway,
				// but viewed via history viewer
				// so it has to be different mechanism (like CurrentPeerType aggregate)
				return {
					...state,
					currentChatId: selectChat.payload
				}
			}
			break;

		case "SET_SIDEBAR_VISIBILITY":
			{
				const payload = (action as SET_SIDEBAR_VISIBILITY).payload
				return {
					...state,
					showSideBar: payload.showSideBar
				}
			}
			break;

		case "SAVE_FILE_URL":
			{
				const value = action as SAVE_FILE_URL
				return {
					...state,
					fileURL: {...state.fileURL, [value.payload.id]: value.payload.url}
				}
			}
			break;

		case "SAVE_FILE_LOADS":
			{
				const value = action as SAVE_FILE_LOADS
				return {
					...state,
					fileLoads: {...state.fileLoads, [value.payload.id]: value.payload.loads}
				}
			}
			break;

		case "SAVE_CHAT_HISTORY":
			{
				const value = action as SAVE_CHAT_HISTORY

				const messagesHolder: { [message_id: number]: Message } = {}

				for (const message of value.payload.messages) {
					const messageState = messageToState(message)
					messagesHolder[messageState.id] = messageState
				}

				// Merge messages
				let result = state

				result = {
					...result,
					messages: {
						...result.messages,
						[value.payload.chat_id]: {...(result.messages[value.payload.chat_id] ?? {}), ...messagesHolder}
					}
				}

				return {
					...result,
					history: {...result.history, [value.payload.chat_id]:
						[/*result.chats[value.payload.chat_id].lastMessage, */...value.payload.messages.map(message => message.id)]
					}
				}
			}
			break;

		case "@@INIT":
			break;

		default:
			console.warn('Unknown action', action)
	}
	//return {...state}
	return state
}

const composeEnhancers: typeof compose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store
