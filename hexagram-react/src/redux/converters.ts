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

import * as TL from '../tdlib/tdapi'
import { Chat, User, Message } from './types'

export function chatToState(tl: TL.TLChat): Chat {
	return {
		title: tl.title,
		id: tl.id,
		order: tl.order,
		isPinned: tl.is_pinned,
		unreadCount: tl.unread_count,
		mentions: tl.unread_mention_count,
		photo: tl.photo,
		lastMessage: 0,
		onlineMemberCount: 0,
		replyToMessageIdDraft: tl.draft_message? tl.draft_message.reply_to_message_id : 0,
		draft: tl.draft_message? tl.draft_message.input_message_text : null,
		type: tl.type,
	}
}

export function userToState(tl: TL.TLUser): User {
	return {
		id: tl.id,
		firstName: tl.first_name, // TODO .trim()
		lastName: tl.last_name ?? '',
		username: tl.username,
		phone: tl.phone_number ?? '',
		type: tl.type,
		status: tl.status,
		verified: tl.is_verified,
		photo: tl.profile_photo
	}
}

export function supergroupToState(tl: TL.TLSupergroup) {
	return {
		id: tl.id,
		chatMemberStatus: tl.status,
		isChannel: tl.is_channel,
		isVerified: tl.is_verified,
		memberCount: tl.member_count,
		username: tl.username,
	}
}

export function messageToState(tl: TL.TLMessage): Message {
	return {
		id: tl.id,
		date: tl.date,
		senderUserId: tl.sender_user_id,
		replyToMessageId: tl.reply_to_message_id,
		content: tl.content,
	}
}
