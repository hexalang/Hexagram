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
import './App.scss'
import { td, dispatchTelegramEventHandler } from '../tdlib/tdlib'
import * as TD from '../tdlib/tdlib'
import { CurrentChatPanel } from '../components/history/CurrentChatPanel'
import { ChatsPanel } from '../components/chats/ChatsPanel'
import { SidePanel } from '../components/panels/SidePanel'
import { connect } from 'react-redux'
import { State, LoginState } from '../redux/store'
import * as TL from '../tdlib/tdapi'
import { downloadFile as downloadFile } from '../tdlib/loader'
import { LoginForm } from '../components/login/LoginForm'
import preview from './preview.svg'
import { useSelector, useDispatch } from 'react-redux'

const dispatchTelegramEventFunction = (update: TL.TLObject) => async (dispatch: any) => {
	dispatch({
		type: 'TDLIB_UPDATE',
		payload: update
	})
}

function App({dispatchTelegramEventFunction}: {dispatchTelegramEventFunction: Function}) {
	dispatchTelegramEventHandler.handle = dispatchTelegramEventFunction

	const loaded = useSelector((state: State) => state.loaded)
	const loginState = useSelector((state: State) => state.loginState)
	const showSideBar = useSelector((state: State) => state.showSideBar)

	if (loaded == false) return <div className="App-header" style={{ backgroundImage: 'url(' + preview + ')' }}><div>Updating Hexagram...</div></div>
	if (loginState == LoginState.WaitTDLib) return <div className="App-header" style={{ backgroundImage: 'url(' + preview + ')' }}><div>Logging in...</div></div>

	if (loginState == LoginState.Ready) return (
		<div className="App">
			<ChatsPanel />
			<CurrentChatPanel />
			{showSideBar && <SidePanel/>}
		</div>
	);

	return <div className="App"><LoginForm/></div>
}

const mapStateToProps = (state: State, ownProps: any) => ({ })

const mapDispatchToProps = { dispatchTelegramEventFunction }

export default connect(mapStateToProps, mapDispatchToProps)(App)
