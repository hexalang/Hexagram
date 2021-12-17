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
import { observable } from "mobx"

export class User {
	readonly id: number
	@observable firstName!: string
	@observable lastName!: string
	@observable phone!: string
	@observable username!: string
	@observable type!: TL.TLUserType
	@observable status!: TL.TLUserStatus
	@observable verified!: boolean
	@observable photo!: TL.TLProfilePhoto | null

	constructor(id: number) {
		this.id = id
	}

	merge(tl: TL.TLUser) {
		this.firstName = tl.first_name // TODO .trim()
		// TODO combinedName = +' '+
		// TODO Dell Acc name
		this.lastName = tl.last_name ?? ''
		this.username = tl.username
		this.phone = tl.phone_number ?? ''
		this.type = tl.type
		this.status = tl.status
		this.verified = tl.is_verified
		this.photo = tl.profile_photo
	}
}

// "updateChatLastMessage" - TODO
// "updateNewMessage" - TODO
export class Message {
	//readonly textPreview: string // Like "Xxx joined this channel" or "Hello!"
	//readonly systemPreview?: string // Like "Photo" or "You joined this channel"
	readonly id: number
	@observable date!: number
	@observable senderUserId!: number
	@observable senderChatId!: number
	@observable replyToMessageId!: number
	@observable content!: TL.TLMessageContent
	@observable media_album_id!: string

	constructor(id: number) {
		this.id = id
	}

	merge(tl: TL.TLMessage) {
		this.date = tl.date
		switch (tl.sender['@type']) {
			case 'messageSenderChat':
				this.senderChatId = tl.sender.chat_id
				this.senderUserId = 0
				break
			case 'messageSenderUser':
				this.senderUserId = tl.sender.user_id
				this.senderChatId = 0
				break
		}
		this.replyToMessageId = tl.reply_to_message_id
		this.content = tl.content
		this.media_album_id = tl.media_album_id

		return this
	}
}

export class Chat {
	readonly id: number
	@observable meta!: TL.TLChat
	@observable isPinned!: boolean
	@observable unreadCount!: number // "updateUnreadChatCount" - TODO
	@observable photo!: TL.TLChatPhotoInfo | null
	@observable lastMessage!: number
	@observable type!: TL.TLChatType
	@observable mentions!: number
	@observable onlineMemberCount!: number
	@observable order!: string

	@observable replyToMessageIdDraft!: number // No considered if draft == null
	@observable draft!: TL.TLInputMessageContent | null

	constructor(id: number) {
		this.id = id
	}

	merge(tl: TL.TLChat) {
		this.meta = tl
		for (const position of tl.positions) {
			if (position.list['@type'] === 'chatListMain') {
				this.order = position.order
				this.isPinned = position.is_pinned
				break
			}
		}
		this.unreadCount = tl.unread_count
		this.mentions = tl.unread_mention_count
		this.photo = tl.photo
		this.lastMessage = 0

		if (tl.last_message) {
			this.lastMessage = tl.last_message.id
		}

		this.onlineMemberCount = 0
		this.replyToMessageIdDraft = tl.draft_message ? tl.draft_message.reply_to_message_id : 0
		this.draft = tl.draft_message ? tl.draft_message.input_message_text : null
		this.type = tl.type
	}
}

export class Supergroup {
	// TODO do we need to store ids here at all?
	readonly id: number
	@observable chatMemberStatus!: TL.TLChatMemberStatus
	@observable isChannel!: boolean
	@observable isVerified!: boolean
	@observable memberCount!: number
	@observable username!: string

	constructor(id: number) {
		this.id = id
	}

	merge(tl: TL.TLSupergroup) {
		this.chatMemberStatus = tl.status
		this.isChannel = tl.is_channel
		this.isVerified = tl.is_verified
		this.memberCount = tl.member_count
		this.username = tl.username
	}
}

export class File {
	readonly id: number
	@observable completed = false
	@observable active = false
	// TODO progress %
	preserve = false
	@observable parts: Uint8Array | null = null
	@observable url: string | null = null

	constructor(id: number) {
		this.id = id
	}
}
