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

import { Footer } from './Footer'
import { Header } from './Header'
import { ChatList } from './ChatList'
import { observer } from 'mobx-react-lite'
import { state } from '../../mobx/store'
import styled, { css } from 'styled-components'

const ChatsPanelStyled = styled.div`
	width: 260px;
	height: 100vh;
	background-color: #ffffff;
	display: flex;
	flex-direction: column;
	flex-shrink: 0;
	position: relative;
`

export const ChatsPanel = observer(() => {
	const selectChat = (id: number): void => {
		state.selectChat(id)
	}

	const showSidePanel = (): void => {
		state.showSideBar = true
	}

	return (
		<ChatsPanelStyled>
			<Header showSidePanel={showSidePanel} />
			<ChatList selectChat={selectChat} />
			<Footer />
		</ChatsPanelStyled>
	)
})
