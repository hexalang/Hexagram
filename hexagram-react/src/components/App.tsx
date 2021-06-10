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

import './App.scss'
import { CurrentChatPanel } from '../components/history/CurrentChatPanel'
import { ChatsPanel } from '../components/chats/ChatsPanel'
import { SidePanel } from '../components/panels/SidePanel'
import { LoginState, state } from '../mobx/store'
import { LoginForm } from '../components/login/LoginForm'
import preview from './preview.svg'
import { observer } from 'mobx-react-lite'

export default observer(() => {
	const loaded = state.loaded
	const loginState = state.loginState
	const showSideBar = state.showSideBar

	if (loaded === false) return <div className="App-header" style={{ backgroundImage: 'url(' + preview + ')' }}><div>Loading Hexagram...</div></div>
	if (loginState === LoginState.WaitTDLib) return <div className="App-header" style={{ backgroundImage: 'url(' + preview + ')' }}><div>Logging in...</div></div>

	if (loginState === LoginState.Ready) return (
		<div className="App">
			<ChatsPanel />
			<CurrentChatPanel />
			{showSideBar && <SidePanel />}
		</div>
	)

	return (
		<div className="App">
			<LoginForm />
		</div>
	)
})
