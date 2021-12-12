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

import React, { useEffect, useRef, RefObject, Var } from 'react'
import { state } from '../../mobx/store'
import * as TL from '../../tdlib/tdapi'
import { tg } from '../../tdlib/tdlib'
import { MessageSameSender, MessageSameSenderTheirs, CenterSystemMessage, MessagePhotoTheirs } from '../messages/MessageTypes'
import { StickerMy, StickerOnMessage, MessageMy, MessageTheirs, LottieSticker } from '../messages/MessageTypes'
import { Input } from './Input'
import { Top } from './Top'
import { observer } from 'mobx-react-lite'
import { observable } from "mobx"
import { Store, useStore, StoreEvent } from '../../mobx/wrap'
import styled, { css } from 'styled-components'

const sliderTransition = `background-color 0.5s ease, opacity 0.5s ease`

const HistoryStyled = styled.div`
	height: calc(100vh - 54px);
	width: 100%;
	position: relative;
`

interface PaneProps {
	readonly dragging: boolean | null
}

const Pane = styled.div<PaneProps>`
	position: relative;
	height: auto;
	will-change: top;

	width: 100%;
	flex-shrink: 0;
	display: flex;
	flex-direction: column;
	padding-top: 34px;

	top: var(--top, 0px);

	${({ dragging }) => !dragging && css`
		transition: top 0.4s ease;
	`}
`

const ScrollBar = styled.div`
	display: block;
	width: 4px;
	background-color: rgba(0, 0, 0, 0.1);
	height: calc(100% - 6px);
	position: absolute;
	right: 3px;
	top: 3px;
	border-radius: 4px;
	transition: background-color 0.5s ease, opacity 0.5s ease;
	opacity: 0;

	${HistoryStyled}:hover & {
		opacity: 1;
	}

	&:hover {
		background-color: rgba(0, 0, 0, 0.25);
	}
`

const Slider = styled.div<PaneProps>`
	content: '';
	display: block;
	width: 4px;
	background-color: rgba(0, 0, 0, 0.1);
	position: absolute;
	right: 3px;
	height: var(--height, 100px);
	border-radius: 4px;
	transition: ${sliderTransition};
	opacity: 0;
	will-change: top;
	top: var(--top, 0px);

	${HistoryStyled}:hover & {
		opacity: 1;
	}

	&:hover {
		background-color: rgba(0, 0, 0, 0.4);
	}

	${({ dragging }) => dragging ? css`
		opacity: 1;
	` : css`
		transition: ${sliderTransition}, top 0.4s ease;
	`}
`

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
		const count = state.history.get(state.currentChatId)?.length ?? 1
		this.sliderHeight = Math.round(this.sliderMaxY * (this.sliderMaxY / (100 * count)))
		this.sliderY = Math.min(Math.max(this.position.top, 0), this.sliderMaxY - this.sliderHeight)
		const progress = Math.min(this.sliderY / (this.sliderMaxY - this.sliderHeight), 1.0)
		const paneH = this.chatListScrollPane.current != null ? (this.chatListScrollPane.current as any).offsetHeight : 0
		this.paneY = -Math.round(progress * (paneH - this.sliderMaxY))

		if (this.chatListScrollPane.current) {
			this.chatListScrollPane.current.style.setProperty('--top', this.paneY + 'px')
		}

		if (this.chatListScrollSlider.current) {
			this.chatListScrollSlider.current.style.setProperty('--top', this.sliderY + 3 + 'px')
			this.chatListScrollSlider.current.style.setProperty('--height', this.sliderHeight + 'px')
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

		const history = state.history.get(state.currentChatId)

		if (!history) return
		if (this.loadsMore) return

		this.loadsMore = true

		history.forEach(messageId => {
			const messageState = state.messages.get(currentChatId)?.get(messageId)

			if (messageState && messageState.date < date) {
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
		const count = state.history.get(state.currentChatId)?.length ?? 1

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

const TextEntityTypeBold = styled.div`
	font-weight: 600;
`

const TextEntityTypeItalic = styled.div`
	font-style: italic;
	padding-right: 2px; // Fix overflowing
`

const TextEntityTypeCode = styled.div`
	//font-variant-numeric: tabular-nums;
	font-family: monospace, monospace;
`

const TextEntityTypeStrikethrough = styled.div`
	text-decoration: line-through;
`

const TextEntityTypeUnderline = styled.div`
	text-decoration: underline;
`

const TextEntityTypeUrl = styled.div`
	cursor: pointer !important;
	color: #168acd !important;

	:hover {
		text-decoration: underline;
	}
`

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
	const chat = state.chats.get(state.currentChatId)

	useEffect(() => {
		const currentChatHistory = state.history.get(state.currentChatId)
		if (
			chat &&
			(currentChatHistory == null || currentChatHistory.length < 10)
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

	const currentChatHistory = state.history.get(state.currentChatId)
	if (
		chat &&
		currentChatHistory &&
		currentChatHistory.length > 0
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

		// TODO sort by date
		for (const messageId of [...currentChatHistory.slice().reverse()/*, chat.lastMessage*/]) {
			const messageState = state.messages.get(chat.id)?.get(messageId)
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
						const sender = state.users.get(messageState.senderUserId)
						const senderName = sender ?
							(sender.firstName + ' ' + sender.lastName).trim()
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
						const sender = state.users.get(messageState.senderUserId)
						const senderName = destination.length === 0 && sender ? sender.firstName : null
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
					const sender = state.users.get(messageState.senderUserId)
					const senderName = destination.length === 0 && sender ? sender.firstName : null
					let lines = messageState.content.text.text//.trim()
					let text = [<div key="lines" className="text">{lines}</div>]

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
						let keyof = 9900
						let lastOffset = 0
						let lastLength = 0
						text = []
						for (const entity of messageState.content.text.entities) {
							keyof++

							if (entity.offset > lastOffset + lastLength) {
								const string = lines.substr(lastOffset + lastLength, entity.offset - (lastOffset + lastLength))
								const what = <div key={keyof} className="text">{'' + string + ''}</div>
								text.push(what)
							}

							lastOffset = entity.offset
							lastLength = entity.length
							const string = lines.substr(entity.offset, entity.length)

							switch (entity.type['@type']) {
								case 'textEntityTypeBold': {
									const what = <TextEntityTypeBold key={'textEntityTypeBold' + keyof} className="text">{'' + string + ''}</TextEntityTypeBold>
									text.push(what)
									break
								}

								case 'textEntityTypeItalic': {
									const what = <TextEntityTypeItalic key={'textEntityTypeItalic' + keyof} className="text">{'' + string + ''}</TextEntityTypeItalic>
									text.push(what)
									break
								}

								case 'textEntityTypeCode': {
									const what = <TextEntityTypeCode key={'textEntityTypeCode' + keyof} className="text">{'' + string + ''}</TextEntityTypeCode>
									text.push(what)
									break
								}

								case 'textEntityTypeStrikethrough': {
									const what = <TextEntityTypeStrikethrough key={'textEntityTypeStrikethrough' + keyof} className="text">{'' + string + ''}</TextEntityTypeStrikethrough>
									text.push(what)
									break
								}

								case 'textEntityTypeUnderline': {
									const what = <TextEntityTypeUnderline key={'textEntityTypeUnderline' + keyof} className="text">{'' + string + ''}</TextEntityTypeUnderline>
									text.push(what)
									break
								}

								case 'textEntityTypeUrl': {
									const href = string
									const what = <TextEntityTypeUrl onClick={_ => window.open(href, '_blank')} title={href} key={'textEntityTypeUrl' + keyof} className="text">{'' + string + ''}</TextEntityTypeUrl>
									text.push(what)
									break
								}

								case 'textEntityTypeTextUrl': {
									const textEntityTypeTextUrl = entity.type
									const href = textEntityTypeTextUrl.url
									const what = <TextEntityTypeUrl onClick={_ => window.open(href, '_blank')} title={href} key={'textEntityTypeTextUrl' + keyof} className="text">{'' + string + ''}</TextEntityTypeUrl>
									text.push(what)
									break
								}

								case 'textEntityTypeMention': {
									const href = 'https://t.me/' + string.substr(1)
									const what = <TextEntityTypeUrl onClick={_ => window.open(href, '_blank')} title={href} key={'textEntityTypeMention' + keyof} className="text">{'' + string + ''}</TextEntityTypeUrl>
									text.push(what)
									break
								}

								case 'textEntityTypeHashtag': {
									const href = 'https://t.me/TODO_' + string // TODO
									const what = <TextEntityTypeUrl onClick={_ => window.open(href, '_blank')} title={href} key={'textEntityTypeHashtag' + keyof} className="text">{'' + string + ''}</TextEntityTypeUrl>
									text.push(what)
									break
								}

								case 'textEntityTypeCashtag': {
									const href = 'https://t.me/TODO_' + string // TODO
									const what = <TextEntityTypeUrl onClick={_ => window.open(href, '_blank')} title={href} key={keyof} className="text">{'' + string + ''}</TextEntityTypeUrl>
									text.push(what)
									break
								}

								case 'textEntityTypeBotCommand': {
									const href = 'https://t.me/TODO_' + string // TODO
									const what = <TextEntityTypeUrl onClick={_ => window.open(href, '_blank')} title={href} key={keyof} className="text">{'' + string + ''}</TextEntityTypeUrl>
									text.push(what)
									break
								}

								case 'textEntityTypeEmailAddress': {
									const href = 'mailto:' + string
									const what = <TextEntityTypeUrl onClick={_ => window.open(href, '_blank')} title={href} key={'textEntityTypeEmailAddress' + keyof} className="text">{'' + string + ''}</TextEntityTypeUrl>
									text.push(what)
									break
								}

								case 'textEntityTypePhoneNumber': {
									const href = 'tel:' + string
									const what = <TextEntityTypeUrl onClick={_ => window.open(href, '_blank')} title={href} key={'textEntityTypePhoneNumber' + keyof} className="text">{'' + string + ''}</TextEntityTypeUrl>
									text.push(what)
									break
								}

								default: {
									const what = <div className="text" key={'text' + keyof}>{'(?' + entity.type['@type'] + '=' + string + '?)'}</div>
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
					const messages = state.messages.get(chat.id)
					for (const messageId of state.history.get(chat.id) ?? []) {
						const message = messages?.get(messageId)
						if (message && message.replyToMessageId === messageState.id && message.content['@type'] === "messageSticker") {
							const messageSticker = message.content
							const sticker: TL.TLFile = messageSticker.sticker.thumbnail.file
							const sender = state.users.get(message.senderUserId)
							const senderName = sender ? sender.firstName : 'Someone'

							reactions.push(<StickerOnMessage senderName={senderName} key={reactions.length} sticker={sticker} />)
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

	const sliderStyle = { '--top': ui.sliderY + 3 + 'px', '--height': ui.sliderHeight + 'px' } as Var

	// TODO use return (<>) everywhere
	return (
		<HistoryStyled key={state.currentChatId}>
			<Pane dragging={ui.dragging} onWheel={ui.onWheel} key={state.currentChatId} ref={chatListScrollPane} style={{ '--top': ui.paneY + 'px' } as Var}>
				{messages}
			</Pane>
			<ScrollBar onWheel={ui.onWheel} onMouseDown={ui.onMouseClick} ref={chatListScrollBar}></ScrollBar>
			<Slider dragging={ui.dragging} onWheel={ui.onWheel} onMouseDown={ui.onMouseDown} ref={chatListScrollSlider} style={sliderStyle}></Slider>
		</HistoryStyled>
	)
})

const Blow = styled.div`
	background-color: gray;
	background-image: url(${flowers});
	background-repeat: no-repeat;
	background-size: cover;

	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100vh;
`

const PleaseSelectChat = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	& > div,
	& > a {
		display: flex;
		color: white;
		font-size: 10.5pt;
		background-color: rgba(0, 0, 0, 0.2);
		border-radius: 12px;
		padding: 4px 12px;
		flex-grow: 0;
		text-decoration: none;
	}
`

export const CurrentChatPanel = observer(() => {
	const chatSelected = state.chats.get(state.currentChatId) && state.chatIds.includes(state.currentChatId)

	return (
		<>
			<Blow>
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
							<PleaseSelectChat><div>Select a chat to start messaging</div></PleaseSelectChat>
							<PleaseSelectChat><a href="https://www.patreon.com/PeyTy">Made for you by PeyTy</a></PleaseSelectChat>
						</>
				}
			</Blow>
		</>
	)
})
