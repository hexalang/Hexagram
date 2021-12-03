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

import React, { useEffect, useRef, RefObject } from 'react'
import { state } from '../../mobx/store'
import * as TL from '../../tdlib/tdapi'
import { tg } from '../../tdlib/tdlib'
import { MessageSameSender, MessageSameSenderTheirs, CenterSystemMessage, MessagePhotoTheirs } from '../messages/MessageTypes'
import { StickerMy, StickerOnMessage, MessageMy, MessageTheirs, LottieSticker } from '../messages/MessageTypes'
import { Input } from './Input'
import { Top } from './Top'
import './CurrentChatPanel.scss'
import { observer } from 'mobx-react-lite'
import css from './CurrentChatPanel.module.scss'
import { observable } from "mobx"
import { Store, useStore, StoreEvent } from '../../mobx/wrap'

interface Position {
	left: number, top: number
}

class UI extends Store {
	// GUI
	@observable dragging: boolean | null = null
	position: Position = { left: 0, top: 0 }
	lastPosition: Position = { left: 0, top: 0 }
	paneY: number = 0
	sliderY: number = 0

	chatListScrollBar: RefObject<HTMLDivElement>
	chatListScrollPane: RefObject<HTMLDivElement>
	chatListScrollSlider: RefObject<HTMLDivElement>
	sliderHeight: number = 100
	sliderMaxY: number = 200

	constructor(
		chatListScrollBar: RefObject<HTMLDivElement>,
		chatListScrollPane: RefObject<HTMLDivElement>,
		chatListScrollSlider: RefObject<HTMLDivElement>
	) {
		super()

		this.chatListScrollBar = chatListScrollBar
		this.chatListScrollPane = chatListScrollPane
		this.chatListScrollSlider = chatListScrollSlider

		this.reposition()
	}

	readonly events = () => {
		if (this.dragging === true) {
			document.addEventListener('mousemove', this.onMouseMove)
			document.addEventListener('mouseup', this.onMouseUp, { once: true })
		}

		if (this.dragging === false) {
			document.removeEventListener('mousemove', this.onMouseMove)
			document.removeEventListener('mouseup', this.onMouseUp)
		}
	}

	readonly reposition = () => {
		this.sliderMaxY = this.chatListScrollBar.current != null ? (this.chatListScrollBar.current as any).offsetHeight : 0
		const count = state.history[state.currentChatId] ? state.history[state.currentChatId].length : 1
		this.sliderHeight = Math.round(this.sliderMaxY * (this.sliderMaxY / (100 * count)))
		this.sliderY = Math.min(Math.max(this.position.top, 0), this.sliderMaxY - this.sliderHeight)
		const progress = Math.min(this.sliderY / (this.sliderMaxY - this.sliderHeight), 1.0)
		const paneH = this.chatListScrollPane.current != null ? (this.chatListScrollPane.current as any).offsetHeight : 0
		this.paneY = -Math.round(progress * (paneH - this.sliderMaxY))

		if (this.chatListScrollPane.current) {
			this.chatListScrollPane.current.style.top = this.paneY + 'px'
		}

		if (this.chatListScrollSlider.current) {
			this.chatListScrollSlider.current.style.top = this.sliderY + 3 + 'px'
			this.chatListScrollSlider.current.style.height = this.sliderHeight + 'px'
		}

		if (this.sliderY < 2) {
			this.loadMoreHistory()
			this.position.top = this.sliderY = 3
		}
	}

	loadsMore = false

	loadMoreHistory() {
		// Fix race condition
		const currentChatId = state.currentChatId
		// Avoid repeating of getChatHistory
		// TODO

		let from = 0
		let date = Date.now()

		const history = state.history[state.currentChatId]

		if (!history) return
		if (this.loadsMore) return

		this.loadsMore = true

		history.forEach(messageId => {
			const messageState = state.messages[currentChatId][messageId]

			if (messageState.date < date) {
				date = messageState.date
				from = messageState.id
			}
		})

		const howMuch = 25
		tg.getChatHistory(
			currentChatId,
			from,
			0,
			howMuch,
			false
		).then(messages => {
			tg.getChatHistory(
				currentChatId,
				from,
				0,
				howMuch,
				false
			).then(messages => {
				state.saveChatHistory(currentChatId, messages.messages)
				this.loadsMore = false
				this.reposition()
			})
		})
	}

	readonly onMouseDown = (e: any) => {
		e.preventDefault()
		e.stopPropagation()

		this.lastPosition.left = e.pageX
		this.lastPosition.top = e.pageY
		this.dragging = true
		this.events()
	}

	readonly onMouseMove = (e: any) => {
		e.preventDefault()
		e.stopPropagation()

		this.position = {
			left: this.position.left + e.pageX - this.lastPosition.left,
			top: Math.max(0, this.position.top + e.pageY - this.lastPosition.top)
		}
		this.lastPosition = { left: e.pageX, top: e.pageY }

		this.reposition()
		requestAnimationFrame(this.reposition)
	}

	readonly onMouseUp = (e: any) => {
		e.preventDefault()
		e.stopPropagation()

		this.dragging = false
		this.events()
	}

	readonly onWheel = (e: any) => {
		e.stopPropagation()

		if (this.dragging) {
			return
		}

		const howMuch = 25
		const count = state.history[state.currentChatId] ? state.history[state.currentChatId].length : 1

		// e.deltaY is -100 ... 100
		this.position = {
			...this.position,
			top: Math.min(
				Math.max(0, this.position.top + e.deltaY * (howMuch / count)),
				this.sliderMaxY - this.sliderHeight
			)
		}
		this.reposition()
	}

	readonly onMouseClick = (e: unknown) => {

	}

	mustScrollToBottom = false

	readonly scrollToBottom = () => {
		if (this.dragging) {
			return
		}

		this.reposition() // Get values
		this.position.top = this.sliderMaxY - this.sliderHeight
		console.log('scrollToBottom')
		this.reposition()
	}

	unmount() {
		super.unmount()
		this.dragging = false
		this.events()
	}

	render() {
		if (this.mustScrollToBottom) {
			this.scrollToBottom()
			this.mustScrollToBottom = false
		}
	}

	listen(e: StoreEvent) {

	}
}

const History = observer(() => {
	const chatListScrollBar = useRef<HTMLDivElement>(null)
	const chatListScrollSlider = useRef<HTMLDivElement>(null)
	const chatListScrollPane = useRef<HTMLDivElement>(null)

	const ui = useStore(() => new UI(chatListScrollBar, chatListScrollPane, chatListScrollSlider))

	useEffect(() => {
		// Done after first and next complete renders
		// Required here to react on chat change
		ui.reposition()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [state.currentChatId])

	const messages: React.ReactNode[] = []
	const chat = state.chats[state.currentChatId]

	useEffect(() => {
		if (
			chat &&
			(state.history[state.currentChatId] == null || state.history[state.currentChatId].length < 10)
		) {
			// Fix race condition
			const currentChatId = state.currentChatId
			// Avoid repeating of getChatHistory
			state.saveChatHistory(currentChatId, [])
			const howMuch = 25
			tg.getChatHistory(
				currentChatId,
				0, //chat.lastMessage,
				0,
				howMuch,
				false
			).then(messages => {
				tg.getChatHistory(
					currentChatId,
					0, //chat.lastMessage,
					0,
					howMuch,
					false
				).then(messages => {
					state.saveChatHistory(currentChatId, messages.messages)
					ui.mustScrollToBottom = true
				})
			})
		}
	}, [state.currentChatId])

	if (
		chat &&
		state.history[state.currentChatId] &&
		state.history[state.currentChatId].length > 0
	) {
		let destination = messages
		let lastSender = 0
		let lastMessageId = 0

		const mergeDestination = () => {
			if (lastSender === state.myId)
				messages.push(<MessageSameSender key={lastMessageId + '~my'}>{destination}</MessageSameSender>)
			else if (lastSender === -1) // System message
				messages.push(destination)
			// Note: for channels and auto-forward from channels `lastSender == 0`!
			else messages.push(<MessageSameSenderTheirs
				senderUserId={lastSender}
				key={lastSender + '~' + state.currentChatId + '~' + lastMessageId}>
				{destination}
			</MessageSameSenderTheirs>
			)
		}

		const updateDestination = (senderUserId: number) => {
			if (destination === messages) {
				destination = []
				lastSender = senderUserId
			} else {
				if (lastSender !== senderUserId) {
					mergeDestination()
					destination = []
					lastSender = senderUserId
				}
			}
		}

		for (const messageId of [...state.history[state.currentChatId].slice().reverse()/*, chat.lastMessage*/]) {
			const messageState = state.messages[chat.id][messageId]
			if (messageState == null) continue
			const key = messageState.id
			lastMessageId = key
			const time = new Date(messageState.date * 1000).toLocaleTimeString(navigator.language, {
				hour: '2-digit',
				minute: '2-digit'
			})
			switch (messageState.content['@type']) {
				case "messageChatUpgradeFrom":
					let messageChatUpgradeFrom = messageState.content
					updateDestination(-1)
					destination.push(<CenterSystemMessage key={key} text={`Group ${messageChatUpgradeFrom.title} upgraded to supergroup`} />)
					break

				case "messageChatJoinByLink":
					{
						updateDestination(-1)
						let messageChatJoinByLink = messageState.content
						const senderName = state.users[messageState.senderUserId] ?
							(state.users[messageState.senderUserId].firstName + ' ' + state.users[messageState.senderUserId].lastName).trim()
							: 'User'
						const text = `${senderName} joined the group via invite link`
						destination.push(<CenterSystemMessage key={key} text={text} />)
					}
					break

				case "messagePhoto":
					{
						const messagePhoto = messageState.content
						const photo = messagePhoto.photo
						const caption: TL.TLFormattedText = messagePhoto.caption
						const text = caption.text !== "" ? [<div className="text">{caption.text}</div>] : []
						const sized: TL.TLFile = photo.sizes.reduce((prev, curr) => prev.height > curr.height ? prev : curr).photo
						updateDestination(messageState.senderUserId)
						const senderName = destination.length === 0 && state.users[messageState.senderUserId] ? state.users[messageState.senderUserId].firstName : null
						destination.push(<MessagePhotoTheirs key={key} sized={sized} author={senderName} text={text} time={time} date={messageState.date} />)
					}
					break

				case "messageSticker":
					{
						const messageSticker = messageState.content

						if (messageSticker.sticker.is_animated) {
							const sticker: TL.TLFile = messageSticker.sticker.sticker
							updateDestination(messageState.senderUserId)
							destination.push(<LottieSticker key={key} sticker={sticker} time={time} />)

						} else {

							const sticker: TL.TLFile = messageSticker.sticker.is_animated ? messageSticker.sticker.thumbnail.file : messageSticker.sticker.sticker
							updateDestination(messageState.senderUserId)
							destination.push(<StickerMy key={key} sticker={sticker} time={time} />)
						}
					}
					break

				case "messageText":
					updateDestination(messageState.senderUserId)

					// TODO no sender name for private chats
					const senderName = destination.length === 0 && state.users[messageState.senderUserId] ? state.users[messageState.senderUserId].firstName : null
					let text = [<div className="text">{lines}</div>]
					let lines = messageState.content.text.text//.trim()

					if (lines.includes('\n')) {
						text = []
						const parts = lines.split('\n')

						for (let line of parts) {
							let className = "text"

							if (text.length !== (parts.length - 1)) {
								className = "text textLine"
							}

							if (line === '') {
								line = <>&nbsp;</> as any
							}

							const what = <div className={className}>{line}</div>
							text.push(what)
						}
					}

					if (messageState.content.text.entities.length > 0) {
						let lastOffset = 0
						let lastLength = 0
						text = []
						for (const entity of messageState.content.text.entities) {
							if (entity.offset > lastOffset + lastLength) {
								const string = lines.substr(lastOffset + lastLength, entity.offset - (lastOffset + lastLength))
								const what = <div key={lastOffset} className="text">{'' + string + ''}</div>
								text.push(what)
							}

							lastOffset = entity.offset
							lastLength = entity.length
							const string = lines.substr(entity.offset, entity.length)

							switch (entity.type['@type']) {
								case 'textEntityTypeBold': {
									const what = <div key={lastOffset} className="text textEntityTypeBold">{'' + string + ''}</div>
									text.push(what)
									break
								}

								case 'textEntityTypeItalic': {
									const what = <div key={lastOffset} className="text textEntityTypeItalic">{'' + string + ''}</div>
									text.push(what)
									break
								}

								case 'textEntityTypeCode': {
									const what = <div key={lastOffset} className="text textEntityTypeCode">{'' + string + ''}</div>
									text.push(what)
									break
								}

								case 'textEntityTypeStrikethrough': {
									const what = <div key={lastOffset} className="text textEntityTypeStrikethrough">{'' + string + ''}</div>
									text.push(what)
									break
								}

								case 'textEntityTypeUnderline': {
									const what = <div key={lastOffset} className="text textEntityTypeUnderline">{'' + string + ''}</div>
									text.push(what)
									break
								}

								case 'textEntityTypeUrl': {
									const href = string
									const what = <div onClick={_ => window.open(href, '_blank')} title={href} key={lastOffset} className="text textEntityTypeUrl">{'' + string + ''}</div>
									text.push(what)
									break
								}

								case 'textEntityTypeTextUrl': {
									const textEntityTypeTextUrl = (entity.type as TL.TLTextEntityTypeTextUrl)
									const href = textEntityTypeTextUrl.url
									const what = <div onClick={_ => window.open(href, '_blank')} title={href} key={lastOffset} className="text textEntityTypeUrl">{'' + string + ''}</div>
									text.push(what)
									break
								}

								case 'textEntityTypeMention': {
									const href = 'https://t.me/' + string.substr(1)
									const what = <div onClick={_ => window.open(href, '_blank')} title={href} key={lastOffset} className="text textEntityTypeUrl">{'' + string + ''}</div>
									text.push(what)
									break
								}

								case 'textEntityTypeHashtag': {
									const href = 'https://t.me/TODO_' + string // TODO
									const what = <div onClick={_ => window.open(href, '_blank')} title={href} key={lastOffset} className="text textEntityTypeUrl">{'' + string + ''}</div>
									text.push(what)
									break
								}

								case 'textEntityTypeCashtag': {
									const href = 'https://t.me/TODO_' + string // TODO
									const what = <div onClick={_ => window.open(href, '_blank')} title={href} key={lastOffset} className="text textEntityTypeUrl">{'' + string + ''}</div>
									text.push(what)
									break
								}

								case 'textEntityTypeBotCommand': {
									const href = 'https://t.me/TODO_' + string // TODO
									const what = <div onClick={_ => window.open(href, '_blank')} title={href} key={lastOffset} className="text textEntityTypeUrl">{'' + string + ''}</div>
									text.push(what)
									break
								}

								case 'textEntityTypeEmailAddress': {
									const href = 'mailto:' + string
									const what = <div onClick={_ => window.open(href, '_blank')} title={href} key={lastOffset} className="text textEntityTypeUrl">{'' + string + ''}</div>
									text.push(what)
									break
								}

								case 'textEntityTypePhoneNumber': {
									const href = 'tel:' + string
									const what = <div onClick={_ => window.open(href, '_blank')} title={href} key={lastOffset} className="text textEntityTypeUrl">{'' + string + ''}</div>
									text.push(what)
									break
								}

								default: {
									const what = <div className="text">{'(?' + entity.type["@type"] + '=' + string + '?)'}</div>
									text.push(what)
								}
							}
						}

						if (lastOffset + lastLength !== lines.length) {
							const string = lines.substr(lastOffset + lastLength)
							const what = <div key={lastOffset} className="text">{'' + string + ''}</div>
							text.push(what)
						}
					}

					const reactions = []
					for (const messageId of state.history[chat.id]) {
						const message = state.messages[chat.id][messageId]
						if (message.replyToMessageId === messageState.id && message.content['@type'] === "messageSticker") {
							const messageSticker = message.content
							const sticker: TL.TLFile = messageSticker.sticker.thumbnail.file
							const senderName = state.users[message.senderUserId] ? state.users[message.senderUserId].firstName : 'Someone'

							reactions.push(<StickerOnMessage senderName={senderName} key={key} sticker={sticker} />)
						}
					}

					destination.push(
						lastSender === state.myId ?
							<MessageMy key={key} text={text} time={time} date={messageState.date} reactions={reactions} />
							:
							<MessageTheirs key={key} author={senderName} text={text} time={time} date={messageState.date} reactions={reactions} />
					)

					break

				default:
					console.log(`Unsupported message history type ${messageState.content['@type']}`)
					destination.push(<CenterSystemMessage key={key} text={`Unsupported message type ${messageState.content['@type']}`} />)
					break
			}
		}

		if (destination !== messages && destination.length > 0) mergeDestination()
	}

	const slider = ui.dragging ? css.slider + ' ' + css.opacity : css.slider + ' ' + css.sliderSmooth
	const pane = ui.dragging ? css.pane : css.pane + ' ' + css.transition

	// TODO use return (<>) everywhere
	return (
		<div className={css.history} key={state.currentChatId}>
			<div className={pane} onWheel={ui.onWheel} key={state.currentChatId} ref={chatListScrollPane} style={{ top: ui.paneY + 'px' }}>
				{messages}
			</div>
			<div className={css.scrollBar} onWheel={ui.onWheel} onMouseDown={ui.onMouseClick} ref={chatListScrollBar}></div>
			<div className={slider} onWheel={ui.onWheel} onMouseDown={ui.onMouseDown} ref={chatListScrollSlider} style={{ top: ui.sliderY + 3 + 'px', height: ui.sliderHeight + 'px' }}></div>
		</div>
	)
})

export const CurrentChatPanel = observer(() => {
	const chatSelected = state.chats[state.currentChatId] && state.chatIds.includes(state.currentChatId)

	return (
		<>
			<div className="blow center">
				{
					// TODO handle status . left the group
					chatSelected ?
						<>
							<Top />
							<History />
							<Input />
						</>
						:
						<>
							<div className="pleaseSelectChat "><div>Please select a chat to start messaging</div></div>
							<div className="pleaseSelectChat "><a href="https://www.patreon.com/PeyTy">Made for you by PeyTy</a></div>
						</>
				}
			</div>
		</>
	)
})
