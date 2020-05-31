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

// "updateUser" - TODO
export interface User {
	readonly id: number
	readonly firstName: string
	readonly lastName: string
	readonly phone: string
	readonly username: string
	readonly type: TL.TLUserType
	readonly status: TL.TLUserStatus
	readonly verified: boolean
	readonly photo: TL.TLProfilePhoto | null
}

// "updateChatLastMessage" - TODO
// "updateNewMessage" - TODO
export interface Message {
	readonly id: number
	readonly date: number
	readonly senderUserId: number
	readonly replyToMessageId: number
	readonly content: TL.TLMessageContent
}

export interface ChatPhoto {

}

export interface Chat {
	readonly title: string
	readonly id: number
	readonly isPinned: boolean
	readonly unreadCount: number // "updateUnreadChatCount" - TODO
	readonly photo: TL.TLChatPhoto | null
	readonly lastMessage: number // "updateChatLastMessage" - TODO
	readonly type: TL.TLChatType
	readonly onlineMemberCount: number

	readonly replyToMessageIdDraft: number // No considered if draft == null
	readonly draft: TL.TLInputMessageContent | null
}

export interface Supergroup {
	readonly chatMemberStatus: TL.TLChatMemberStatus
	readonly isChannel: boolean
	readonly isVerified: boolean
	readonly memberCount: number
	readonly username: string
}
