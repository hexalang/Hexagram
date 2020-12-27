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

import React from 'react'
import { State } from '../../mobx/store'
import { Footer } from './Footer'
import { Header } from './Header'
import { ChatList } from './ChatList'
import './ChatsPanel.scss'
import { observer } from 'mobx-react-lite'

export const ChatsPanel = observer(({ state }: { state: State }) => {
	const selectChat = (id: number): void => {
		state.selectChat(id)
	}

	const showSidePanel = (): void => {
		state.showSideBar = true
	}

	return <div className="chatList">
		<Header showSidePanel={showSidePanel} />
		<ChatList state={state} selectChat={selectChat} />
		<Footer />
	</div>
})
