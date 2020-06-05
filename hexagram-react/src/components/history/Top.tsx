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

import React, { useState, useEffect, useRef } from 'react'
import { State } from '../../redux/store'
import * as TL from '../../tdlib/tdapi'
import './Top.scss'
import { useSelector, useDispatch } from 'react-redux'

export default function Top() {
	const state: State = useSelector((state: State) => state)
	const chat = useSelector((state: State) => state.chats[state.currentChatId])
	const savedMessages = state.myId == chat.id
	let larger = savedMessages

	let name = chat? (savedMessages? 'Saved Messages' : chat.title) : ''
	let summary = ''

	if (
		chat &&
		chat.type['@type'] == 'chatTypeSupergroup' &&
		state.supergroups[TL.chatTypeSupergroup(chat.type).supergroup_id]
	) {
		const supergroup = state.supergroups[TL.chatTypeSupergroup(chat.type).supergroup_id]
		const memberCount = supergroup.memberCount
		if (supergroup.isChannel == false) {
			summary = '' + memberCount + ' members' // TODO 1 member/ N members
			if (chat.onlineMemberCount > 1) summary += ', ' + chat.onlineMemberCount + ' online'
		}
		if (supergroup.isChannel == true) summary = '' + memberCount + ' subscribers'
	}

	const bot = (
		chat &&
		chat.type['@type'] == 'chatTypePrivate' &&
		state.users[TL.chatTypePrivate(chat.type).user_id] &&
		state.users[TL.chatTypePrivate(chat.type).user_id].type['@type'] == 'userTypeBot'
	)

	if (bot) summary = 'bot'

	if (
		chat &&
		chat.type['@type'] == 'chatTypePrivate' &&
		state.users[TL.chatTypePrivate(chat.type).user_id] &&
		state.users[TL.chatTypePrivate(chat.type).user_id].type['@type'] == 'userTypeDeleted'
	) {
		name = 'Deleted Account'
		larger = true
	}

	else

	if (
		savedMessages == false &&
		chat &&
		chat.type['@type'] == 'chatTypePrivate' &&
		state.users[TL.chatTypePrivate(chat.type).user_id] &&
		state.users[TL.chatTypePrivate(chat.type).user_id].type['@type'] == 'userTypeRegular'
	) {
		const user = state.users[TL.chatTypePrivate(chat.type).user_id]
		name = (user.firstName + ' ' + user.lastName).trim()
		if (user.status['@type'] == 'userStatusEmpty') summary = 'service notifications'
		if (user.status['@type'] == 'userStatusOnline') summary = 'online'
		if (user.status['@type'] == 'userStatusOffline') {
			const was_online: number = TL.userStatusOffline(user.status).was_online * 1000
			const second = 1
			const minute = 60 * second
			const hour = 60 * minute
			const day = hour * 24
			const week = day * 7
			const moth = week * 4
			const now: number = Date.now()
			const diff: number = (now - was_online) / 1000

			if (diff < 10) summary = 'last seen right now'
			else if (diff < minute) summary = Math.round(diff) + ' seconds ago'
			else if (diff < hour) summary = Math.round(diff / minute) + ' minutes ago'
			else if (diff < day) summary = Math.round(diff / hour) + ' hours ago'
			else if (diff < week) summary = Math.round(diff / day) + ' days ago'
			else if (diff < moth) summary = Math.round(diff / week) + ' weeks ago'
			else if (diff < moth * 2) summary = 'last seen a month ago'
			else summary = 'last seen a long time ago'
		}
		if (user.status['@type'] == 'userStatusRecently') summary = 'last seen recently'
		if (user.status['@type'] == 'userStatusLastWeek') summary = 'last seen within a week'
		if (user.status['@type'] == 'userStatusLastMonth') summary = 'last seen within a month'
	}

	return <div className="top">
		<div className="about">
			<div className={larger? "bold larger" : "bold"}>{name}</div>
			<div className="light">{summary}</div>
		</div>

		<div className="thinVerticalLine"/>
	</div>
}
