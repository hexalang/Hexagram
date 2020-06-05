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

import React, { useState } from 'react'
import * as TL from '../../tdlib/tdapi'
import { State } from '../../redux/store'
import { formatTime } from '../../utils/Time'
import { nameToInitials } from '../../utils/UserInfo'
import { useSelector, useDispatch } from 'react-redux'

function messageContentToPreview(tl: TL.TLMessageContent): {textPreview:string, systemPreview?:string} {
	switch (tl['@type']) {
		case "messageText":
			return {
				textPreview: TL.messageText(tl).text.text,
			}
			break;

		case "messagePhoto":
			const caption = TL.messagePhoto(tl).caption.text
			return {textPreview:caption, systemPreview: caption == ''? "Photo" : "Photo, "}
			break;

		case "messageChatJoinByLink":
			return {textPreview:'', systemPreview: "joined the group via invite link"}
			break;

		case "messageSticker":
			const messageSticker = TL.messageSticker(tl)
			return {textPreview: messageSticker.sticker.emoji, systemPreview: "Sticker "}
			break;

		default:
			return {textPreview:`Unsupported message type ${tl['@type']}`}
			break;
	}
}

export function ChatListElement({chatId, selectChat, downloadFile}:{chatId: number, selectChat: (id: number) => void, downloadFile: Function}) {
	const currentChatId = useSelector((state: State) => state.currentChatId)
	const myId = useSelector((state: State) => state.myId)
	const chats = useSelector((state: State) => state.chats)
	const fileURL = useSelector((state: State) => state.fileURL)
	const supergroups = useSelector((state: State) => state.supergroups)
	const users = useSelector((state: State) => state.users)
	const messages = useSelector((state: State) => state.messages)

	const current = currentChatId == chatId //false
	const chat = chats[chatId]
	const srcAva: string | null = (chatId == myId && 'SM.png') || (chat && chat.photo && fileURL[chat.photo.small.id])

	if (
		chat &&
		chat.type['@type'] == 'chatTypeSupergroup' &&
		supergroups[TL.chatTypeSupergroup(chat.type).supergroup_id] &&
		supergroups[TL.chatTypeSupergroup(chat.type).supergroup_id].chatMemberStatus['@type'] == 'chatMemberStatusLeft'
	) return null

	const message = (messages[chat.id] ?? {})[chat.lastMessage] ?? null

	// Ignore inactive chats
	if (message == null) return null

	let name = chat? (myId == chat.id? 'Saved Messages' : chat.title) : ''

	if (
		chat &&
		chat.type['@type'] == 'chatTypePrivate' &&
		users[TL.chatTypePrivate(chat.type).user_id] &&
		users[TL.chatTypePrivate(chat.type).user_id].type['@type'] == 'userTypeDeleted'
	) name = 'Deleted Account'

	const unread = chat? chat.unreadCount : 0
	const mentioned = chat? chat.mentions : 0
	const date = message? formatTime(message.date)  : ''
	const dateHint = message? new Date(message.date * 1000).toLocaleDateString() : ''

	const preview = message? messageContentToPreview(message.content) : null

	const text = preview? preview.textPreview : ''
	const system = preview? preview.systemPreview : null

	let who = ''

	if (chat && message) {
		// Works for any chat type
		if (myId == message.senderUserId) who = 'You: '
		else
		if (chat.type['@type'] == 'chatTypePrivate') {
			// Just empty
		}
		else
		if (chat.type['@type'] == 'chatTypeSupergroup' && TL.chatTypeSupergroup(chat.type).is_channel == false) {
			const sender = users[message.senderUserId]
			if (sender) who = sender.firstName + ': '
			if (sender && sender.type['@type'] == 'userTypeDeleted') who = 'Deleted: '
			// If senderUserId == 0 then it's a channel
			// If sender == null then it's service messages
		}
	}

	const pinned = chat && chat.isPinned
	const verified = (
		chat &&
		chat.type['@type'] == 'chatTypePrivate' &&
		users[TL.chatTypePrivate(chat.type).user_id] &&
		users[TL.chatTypePrivate(chat.type).user_id].verified
	)
	const channel = (chat && chat.type['@type'] == 'chatTypeSupergroup' && TL.chatTypeSupergroup(chat.type).is_channel == true)
	const supergroup = (chat && chat.type['@type'] == 'chatTypeSupergroup' && channel == false)
	const bot = (
		chat &&
		chat.type['@type'] == 'chatTypePrivate' &&
		users[TL.chatTypePrivate(chat.type).user_id] &&
		users[TL.chatTypePrivate(chat.type).user_id].type['@type'] == 'userTypeBot'
	)

	const active = current? "chatListElement chatListElement__active" : "chatListElement"

	if (srcAva == null && chat && chat.photo) downloadFile(chat.photo.small.id)

	const draft = chat && chat.draft
	let draftText = ''

	if (chat && chat.draft) switch (chat.draft['@type']) {
		case 'inputMessageText': {
			switch (TL.inputMessageText(chat.draft).text['@type']) {
				case 'formattedText': {
					draftText = TL.formattedText(TL.inputMessageText(chat.draft).text).text
					break;
				}
				default:
					console.warn('Unknown draft type ' + TL.inputMessageText(chat.draft).text['@type'])
					draftText = TL.inputMessageText(chat.draft).text['@type']
			}
			break;
		}
		default:
			console.warn('Unknown draft type ' + chat.draft['@type'])
			draftText = chat.draft['@type']
	}

	return <div className={active} onClick={e => selectChat(chatId)}>
		<div className="wrap">

		{ srcAva && <img className="avatar" src={srcAva || 'blur.jpg'}/> || <div className="avatarEmpty">{
			nameToInitials(name)
		}</div> }
		<div className="namedatetext">
			<div className="namedate">
				<span className="bold name">
					{channel && <img className="channel" title="This is a news channel or blog" src="icons/dialogs_channel.png"/>}
					{supergroup && <img className="supergroup" title="This is a group chat" src="icons/dialogs_chat.png"/>}
					{bot && <img className="bot" title="This is a bot, not a human" src="icons/dialogs_bot.png"/>}
					<div title={name}>{name}</div>
					{verified && <img className="verified" title="Account verified by Telegram team" src="icons/dialogs_verified_star.png"/>}
				</span>
				<span className="light date" title={dateHint}>{date}</span>
			</div>
			<div className="textcounter">
				{
				draft == null?
				<span className="light text">{who && <div className="who">{who}</div>}{system && <div className="who">{system}</div>}<div title={text}>{text}</div></span>
				:
				<span className="light text"><div className="draft">{'Draft:'}</div><div title={draftText}>{draftText}</div></span>
				}
				<div className="counter">
				{(mentioned > 0 && unread > 0) && <span className="mentioned" title={`You have been mentioned ${mentioned} times in this chat`}><div>@</div></span>}
				{unread == 0 && pinned && <span className="light pinned" title={"You pinned this chat for quick access\n\nOnly 5 chats may be pinned"}><img src="icons/dialogs_pinned.png"/></span>}
				{unread > 0 && <span className="light unread" title="You have unread messages in this chat"><div>{unread}</div></span>}
				</div>
			</div>
		</div>
	</div>
	</div>
}
