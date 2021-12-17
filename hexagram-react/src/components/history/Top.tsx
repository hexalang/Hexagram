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

import { observer } from 'mobx-react-lite'
import { state } from '../../mobx/store'
import * as TL from '../../tdlib/tdapi'
import styled, { css } from 'styled-components'

const ThinVerticalLine = styled.div`
	width: 1px;
	height: 100%;
	margin: 0;
	padding: 0;
	background-color: rgba(0, 0, 0, 0.1); //rgb(235, 235, 235);
	position: absolute;
	left: 0px;
	top: 0px;
`

const Panel = styled.div`
	height: 54px;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-content: center;
	align-items: center;
	background-color: var(--background-primary-bg);
	cursor: pointer;
	flex-grow: 0;
	flex-shrink: 0;
	position: relative;
	width: 100%;
`

const About = styled.div`
	height: 40px;
	display: flex;
	justify-content: space-evenly;
	flex-direction: column;
	align-items: flex-start;
	margin-left: 8px;
	color: var(--chat-title);
`

interface NameProps {
	readonly larger: boolean
}

const Name = styled.div<NameProps>`
	font-size: 10pt;
	font-weight: 500;

	${({ larger }) => larger && css`
		font-size: 11pt;
		margin-top: 5px;
	`}
`

const Summary = styled.div`
	font-size: 10pt;
	color: #919191;
`

export const Top = observer(() => {
	const chat = state.chats.get(state.currentChatId)
	const savedMessages = state.myId === chat?.id
	let larger = savedMessages

	let name = chat ? (savedMessages ? 'Saved Messages' : chat.meta.title) : ''
	let summary = ''

	if (
		chat &&
		chat.type['@type'] === 'chatTypeSupergroup' &&
		state.supergroups.get(chat.type.supergroup_id)
	) {
		const supergroup = state.supergroups.get(chat.type.supergroup_id)
		const memberCount = supergroup?.memberCount
		if (supergroup?.isChannel === false) {
			summary = '' + memberCount + ' members' // TODO 1 member/ N members
			if (chat.onlineMemberCount > 1) summary += ', ' + chat.onlineMemberCount + ' online'
		}
		if (supergroup?.isChannel === true) summary = '' + memberCount + ' subscribers'
	}

	const bot = (
		chat &&
		chat.type['@type'] === 'chatTypePrivate' &&
		// TODO TL.userTypeBot(...) != null
		// ^ or better isUserTypeBot
		state.users.get(chat.type.user_id)?.type['@type'] === 'userTypeBot'
	)

	if (bot) summary = 'bot'

	if (
		chat &&
		chat.type['@type'] === 'chatTypePrivate' &&
		state.users.get(chat.type.user_id)?.type['@type'] === 'userTypeDeleted'
	) {
		name = 'Deleted Account'
		larger = true
	}

	else {
		if (
			savedMessages === false &&
			chat &&
			chat.type['@type'] === 'chatTypePrivate' &&
			state.users.get(chat.type.user_id)?.type['@type'] === 'userTypeRegular'
		) {
			const user = state.users.get(chat.type.user_id)
			name = (user?.firstName + ' ' + user?.lastName).trim()
			if (user?.status['@type'] === 'userStatusEmpty') summary = 'service notifications'
			if (user?.status['@type'] === 'userStatusOnline') summary = 'online'
			if (user?.status['@type'] === 'userStatusOffline') {
				const was_online: number = user.status.was_online * 1000
				const second = 1
				const minute = 60 * second
				const hour = 60 * minute
				const day = hour * 24
				const week = day * 7
				const month = week * 4
				const now: number = Date.now()
				const diff: number = (now - was_online) / 1000

				if (diff < 10) summary = 'last seen right now'
				else if (diff < minute) summary = Math.round(diff) + ' seconds ago'
				else if (diff < hour) summary = Math.round(diff / minute) + ' minutes ago'
				// TODO 1 hour ago, not hours
				else if (diff < day) summary = Math.round(diff / hour) + ' hours ago'
				else if (diff < week) summary = Math.round(diff / day) + ' days ago'
				else if (diff < month) summary = Math.round(diff / week) + ' weeks ago'
				else if (diff < month * 2) summary = 'last seen a month ago'
				else summary = 'last seen a long time ago'
			}
			if (user?.status['@type'] === 'userStatusRecently') summary = 'last seen recently'
			if (user?.status['@type'] === 'userStatusLastWeek') summary = 'last seen within a week'
			if (user?.status['@type'] === 'userStatusLastMonth') summary = 'last seen within a month'
		}
	}

	return (
		<Panel>
			<About>
				<Name larger={larger}>{name}</Name>
				<Summary>{summary}</Summary>
			</About>

			<ThinVerticalLine />
		</Panel>
	)
})
