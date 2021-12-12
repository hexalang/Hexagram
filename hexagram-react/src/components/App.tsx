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

import { CurrentChatPanel } from '../components/history/CurrentChatPanel'
import { ChatsPanel } from '../components/chats/ChatsPanel'
import { SidePanel } from '../components/panels/SidePanel'
import { LoginState, state } from '../mobx/store'
import { LoginForm } from '../components/login/LoginForm'
import preview from './preview.svg'
import { observer } from 'mobx-react-lite'
import styled, { css } from 'styled-components'

const App = styled.div`
	text-align: center;
	display: flex;
	flex-direction: row;
	height: 100vh;
`

const Loading = styled.div`
	background-color: #4c5463;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	background-image: url(${preview});

	div {
		text-shadow: 0px 0px 15px rgba(0, 0, 0, 0.6);
		color: white;
		font-size: calc(20px + 2vmin);
		padding: 20px;
		margin-top: 80vh;
	}
`

export default observer(() => {
	const loaded = state.loaded
	const loginState = state.loginState
	const showSideBar = state.showSideBar

	if (loaded === false) return <Loading><div>Loading Hexagram...</div></Loading>
	if (loginState === LoginState.WaitTDLib) return <Loading><div>Logging in...</div></Loading>

	if (loginState === LoginState.Ready) return (
		<App>
			<ChatsPanel />
			<CurrentChatPanel />
			{showSideBar && <SidePanel />}
		</App>
	)

	return (
		<App>
			<LoginForm />
		</App>
	)
})
