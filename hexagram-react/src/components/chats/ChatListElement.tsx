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

import { state } from '../../mobx/store'
import { formatTime } from '../../utils/Time'
import { nameToInitials } from '../../utils/UserInfo'
import { observer } from "mobx-react-lite"
import { Message } from '../../mobx/types'
import styled, { css } from 'styled-components'
import { useEffect, useRef } from 'react'

const ChatListElementStyled = styled.div<{
	readonly active: boolean
}>`
	width: 260px;
	height: 62px;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-content: center;
	flex-direction: row;

	background-color: rgba(0, 0, 0, 0);
	transition: background-color 0.15s ease-in-out;

	:hover {
		background-color: #f1f1f1;
	}

	:hover:active {
		background-color: #e5e5e5;
	}

	${({ active }) => active && css`
		background-color: #419fd9;
		color: white !important;

		* {
			color: white !important;
		}

		* .unread div {
			color: #419fd9 !important;
		}

		:hover {
			background-color: #419fd9;
		}

		:hover:active {
			background-color: #2095d0;
		}
	`}

	.avatar {
		width: 46px;
		height: 46px;
		border-radius: 100%;
		flex-shrink: 0;
		margin-right: 12px;
		background-image: url('data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7');
		transition: background-image 0.333s ease-in-out, color 0.333s ease-in-out;
		background-size: 46px 46px;

		// Fallback
		background-color: #7bc862;
		font-size: 18px;
		color: white;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}

	span {
		font-size: 11pt;
		white-space: nowrap;
		display: inline-flex;
	}

	span.bold {
		color: black;
		font-weight: 500;

		text-overflow: ellipsis;
	}

	span.light {
		color: #919191;
	}

	span.date {
		align-self: flex-end;
		flex-shrink: 0;
	}

	span.name {
		flex-shrink: 1;
		position: relative;
	}

	.counter {
		display: inline-flex;
		flex-shrink: 0;
	}

	.textcounter {
		display: flex;
		justify-content: space-between;
	}

	.textcounter .text {
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		display: inline-flex;

		justify-content: flex-end;
		flex-direction: row;
		align-items: flex-end;
	}

	.textcounter .text div {
		display: inline-block;
		font-size: 11pt;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.textcounter .text div.who {
		color: #16a0e7;
		margin-right: 4px;
		text-overflow: unset;
		flex-shrink: 0;
	}

	.textcounter .text div.draft {
		color: #dd4b39;
		margin-right: 4px;
		text-overflow: unset;
		flex-shrink: 0;
	}

	.textcounter .unread {
		background-color: #bbbbbb;
		flex-shrink: 0;
		color: white;
		font-size: 11pt;
		border-radius: 8px;
		padding: 0px 4px;
		margin-left: 4px;
		height: 17px;
		max-height: 17px;
	}

	.textcounter .unread div {
		display: inline-block;
		font-size: 10pt;
		white-space: nowrap;
		text-align: center;
		min-width: 10px;
	}

	.textcounter .mentioned {
		flex-shrink: 0;
		display: flex;
		background-color: #dd4b39;
		width: 17px;
		height: 17px;
		border-radius: 100%;
		margin: 0;
		flex-direction: column;
		align-content: center;
		align-items: center;
		justify-content: center;
		margin-left: 4px;

		& div {
			font-size: 10pt;
			display: flex;
			color: white;
			flex-shrink: 0;
			width: 12px;
			height: 18.5px;
		}
	}

	.textcounter .pinned {
		flex-shrink: 0;
	}

	.textcounter .pinned img {
		-webkit-filter: invert(1);
		filter: invert(1);
		opacity: 0.5;
		flex-shrink: 0;
	}

	span.name div {
		display: inline-block;
		font-size: 11pt;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	span.name img {
		-webkit-filter: invert(1);
		filter: invert(1);
		opacity: 0.6;
		position: relative;

		&.verified {
			margin-left: 4px;
			width: 14px;
			height: 14px;
			top: 2px;
			flex-shrink: 0;
		}

		&.channel {
			width: 12px;
			height: 11px;
			top: 3px;
			margin-right: 4px;
			flex-shrink: 0;
		}

		&.supergroup {
			width: 16px;
			height: 11px;
			top: 4px;
			margin-right: 4px;
			flex-shrink: 0;
		}

		&.bot {
			width: 16px;
			height: 11px;
			top: 3px;
			margin-right: 4px;
			flex-shrink: 0;
		}
	}

	.wrap {
		margin: 10px;
		height: 46px;
		display: flex;
		flex-grow: 1;
		align-self: center;
	}

	.namedate {
		display: flex;
		justify-content: space-between;
	}

	.namedatetext {
		display: flex;
		width: 100%;
		justify-content: space-between;
		flex-direction: column;
		align-content: space-between;
	}
`

const messageContentToPreview = (message: Message, chatId: number): {
	textPreview: string,
	colon?: boolean,
	systemPreview?: string
} => {
	const content = message.content

	// TODO pre-load messages, also proper nullability
	if (!content) return {
		textPreview: '...'
	}

	switch (content['@type']) {
		case "messageText":
			return {
				textPreview: content.text.text,
			}

		case "messagePhoto":
			const caption = content.caption.text
			if (message.media_album_id !== '0') {
				return { textPreview: caption, systemPreview: caption === '' ? "Album" : "Album, " }
			}
			return { textPreview: caption, systemPreview: caption === '' ? "Photo" : "Photo, " }

		case "messageChatAddMembers":
			return { textPreview: '', systemPreview: "joined the group", colon: false }

		case "messageChatJoinByLink":
			return { textPreview: '', systemPreview: "joined the group via invite link", colon: false }

		case "messagePinMessage":
			const messagePinMessage = content.message_id
			const preview = messageContentToPreview(state.getOrCreateMessage(chatId, messagePinMessage), chatId)
			// TODO elipsis: via , systemNested: + no '\n'
			const previewText = (preview.textPreview || preview.systemPreview || '...').split('\n')[0]
			return { textPreview: '', systemPreview: "pinned «" + previewText + "»" }

		case "messageCall":
			const messageCall = content
			switch (messageCall.discard_reason['@type']) {
				case 'callDiscardReasonEmpty':
					return { textPreview: '', systemPreview: messageCall.is_video ? "Video call" : "Call" }

				case 'callDiscardReasonMissed':
					return { textPreview: '', systemPreview: messageCall.is_video ? "Missed video call" : "Missed call" }

				default:
					console.warn(`Unsupported messageCall type ${content['@type']}`, content)
					return { textPreview: '', systemPreview: messageCall.is_video ? "Video call" : "Call" }
			}

		case "messageSticker":
			const messageSticker = content
			return { textPreview: messageSticker.sticker.emoji ?? '🙃', systemPreview: "Sticker " }

		default:
			console.warn(`Unsupported message type ${content['@type']}`, content)
			return { textPreview: `Unsupported message type ${content['@type']}` }
	}
}

const PreviewSystem = styled.div<{
	readonly ellipsis: boolean
}>`
	text-overflow: ellipsis;
	color: #16a0e7;
	margin-right: 4px;
	text-overflow: unset;
	flex-shrink: ${props => props.ellipsis ? 1 : 0};
`

export const ChatListElement = observer(({ chatId, selectChat }: { chatId: number, selectChat: (id: number) => void }) => {
	const currentChatId = state.currentChatId
	const myId = state.myId
	const chats = state.chats
	const supergroups = state.supergroups
	const users = state.users
	const messages = state.messages

	const current = currentChatId === chatId //false
	const chat = chats.get(chatId)

	// TODO 'SM.png' to constant somewhere?
	const srcAva = (chatId === myId && 'SM.png') || (chat && chat.photo && state.fileURL(chat.photo.small))

	if (
		chat &&
		// TODO if(let TL.chatTypeSupergroup(chat.type)) i.e. func does @type check or ret null
		chat.type['@type'] === 'chatTypeSupergroup' &&
		supergroups.get(chat.type.supergroup_id)?.chatMemberStatus['@type'] === 'chatMemberStatusLeft'
	) return null

	const message = messages.get(chat?.id ?? 0)?.get(chat?.lastMessage ?? 0)

	// Ignore inactive chats
	// TODO they may have drafts!
	if (message == null) return null

	let name = chat ? (myId === chat.id ? 'Saved Messages' : chat.meta.title) : ''

	if (
		chat &&
		chat.type['@type'] === 'chatTypePrivate' &&
		users.get(chat.type.user_id)?.type['@type'] === 'userTypeDeleted'
	) name = 'Deleted Account'

	const unread = chat ? chat.unreadCount : 0
	const mentioned = chat ? chat.mentions : 0
	const date = message ? formatTime(message.date) : ''
	const dateHint = message ? new Date(message.date * 1000).toLocaleDateString() : ''

	const preview = message ? messageContentToPreview(message, chatId) : null

	// TODO hexa switch (chat, message, user) case null, null, null:
	const linkPreview = (message.content['@type'] === "messageText" && message.content.web_page) ? (
		`\n\nThis message contains a link:\n\n${message.content.web_page.site_name
		}\n${message.content.web_page.title
		}`
	) : ''
	const text = preview ? preview.textPreview + linkPreview : ''
	const system = preview ? preview.systemPreview : null
	const colon = preview?.colon ?? true

	let who = ''

	if (chat && message) {
		// Works for any chat type
		if (myId === message.senderUserId) who = 'You'
		else
			if (chat.type['@type'] === 'chatTypePrivate') {
				// Just empty
			}
			else
				if (chat.type['@type'] === 'chatTypeSupergroup' && chat.type.is_channel === false) {
					const sender = users.get(message.senderUserId)
					if (sender) who = (sender.firstName + ' ' + sender.lastName).trim()
					if (sender && sender.type['@type'] === 'userTypeDeleted') who = 'Deleted'
					// If senderUserId == 0 then it's a channel
					// If sender == null then it's service messages
				}
	}

	const pinned = chat && chat.isPinned
	const verified = (
		chat &&
		chat.type['@type'] === 'chatTypePrivate' &&
		users.get(chat.type.user_id)?.verified === true
	)
	const channel = (chat && chat.type['@type'] === 'chatTypeSupergroup' && chat.type.is_channel === true)
	const supergroup = (chat && chat.type['@type'] === 'chatTypeSupergroup' && channel === false)
	const bot = (
		chat &&
		chat.type['@type'] === 'chatTypePrivate' &&
		users.get(chat.type.user_id)?.type['@type'] === 'userTypeBot'
	)

	const active = current ? "chatListElement chatListElement__active" : "chatListElement"

	if (srcAva == null && chat && chat.photo) state.downloadFile(chat.photo.small, true)

	const draft = chat && chat.draft
	let draftText = ''
	// TODO handle only-reply no-text drafts as "(reply)"

	if (chat && chat.draft) switch (chat.draft['@type']) {
		case 'inputMessageText': {
			switch (chat.draft.text['@type']) {
				case 'formattedText': {
					draftText = chat.draft.text.text
					break
				}
				default:
					console.warn('Unknown draft type ' + chat.draft.text['@type'])
					draftText = chat.draft.text['@type']
			}
			break
		}
		default:
			console.warn('Unknown draft type ' + chat.draft['@type'])
			draftText = chat.draft['@type']
	}

	const avatarRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const avatar = avatarRef.current
		if (avatar) {
			avatar.addEventListener('mouseenter', () => {
				state.floatingCirclePreview = srcAva
			})
			avatar.addEventListener('mouseleave', () => {
				state.floatingCirclePreview = null
			})
			return () => {
				// TODO
			}
		}
	})

	return (
		<ChatListElementStyled active={current} className={active} onClick={e => selectChat(chatId)}>
			<div className="wrap">
				<div ref={avatarRef} title={'Hover to show larger picture'} className="avatar" style={srcAva ? {
					backgroundImage: 'url(' + srcAva + ')',
					color: 'transparent'
				} : {}} >{
						nameToInitials(name)
					}</div>
				<div className="namedatetext">
					<div className="namedate">
						<span className="bold name">
							{channel && <img className="channel" title="This is a news channel or blog" src="icons/dialogs_channel.png" alt="Channel" />}
							{supergroup && <img className="supergroup" title="This is a group chat" src="icons/dialogs_chat.png" alt="Supergroup" />}
							{bot && <img className="bot" title="This is a bot, not a human" src="icons/dialogs_bot.png" alt="Bot" />}
							<div title={name}>{name}</div>
							{verified && <img className="verified" title="Account verified by Telegram team" src="icons/dialogs_verified_star.png" alt="Verified" />}
						</span>
						<span className="light date" title={dateHint}>{date}</span>
					</div>
					<div className="textcounter">
						{
							draft == null ?
								<span className="light text">
									{who && <div className="who" title={who}>{who}{colon && ': '}</div>}
									{system && <PreviewSystem ellipsis={!text} title={text ? system + text : system}>{system}</PreviewSystem>}
									<div title={text}>{text}</div>
								</span>
								:
								<span className="light text">
									<div className="draft">{'Draft:'}</div>
									<div title={'Draft: ' + draftText + '\n\n' + (who || (name + ': ')) + (text || system)}>{draftText}</div>
								</span>
						}
						<div className="counter">
							{(mentioned > 0 && unread > 0) && <span className="mentioned" title={`You have been mentioned ${mentioned} times in this chat`}><div>@</div></span>}
							{unread === 0 && pinned && <span className="light pinned" title={"You pinned this chat for quick access\n\nOnly 5 chats may be pinned"}><img src="icons/dialogs_pinned.png" alt="Pinned" /></span>}
							{unread > 0 && <span className="light unread" title="You have unread messages in this chat"><div>{unread}</div></span>}
						</div>
					</div>
				</div>
			</div>
		</ChatListElementStyled>
	)
})
