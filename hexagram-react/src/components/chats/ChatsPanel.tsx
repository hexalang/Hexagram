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
import { tg } from '../../tdlib/tdlib'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { downloadFile as $downloadFile } from '../../tdlib/loader'
import { Footer } from './Footer'
import { Header } from './Header'
import { ChatList } from './ChatList'
import './ChatsPanel.scss'

const ChatsPanel = ({state, selectChat, downloadFile, showSidePanel}:{state: State, showSidePanel: any, selectChat: (id: number) => void, downloadFile: Function}) => (
	<div className="chatList">
		<Header showSidePanel={showSidePanel}/>
		<ChatList state={state} selectChat={selectChat} downloadFile={downloadFile}/>
		<Footer/>
	</div>
)

const mapStateToProps = (state: State, ownProps: any) => ({ state })

const mapDispatchToProps = (dispatch:Dispatch) => {
	return {
		selectChat: (id: number) => {
			tg.openChat(id)
			return dispatch({ type: 'SELECT_CHAT', payload: id })
		},
		showSidePanel: (id: number) => {
			return dispatch({ type: 'SET_SIDEBAR_VISIBILITY', payload: { showSideBar: true } })
		},
		downloadFile: (id: number) => {
			return dispatch($downloadFile(id) as any)
		},
	}
}

const ChatsPanelConnected = connect(mapStateToProps, mapDispatchToProps)(ChatsPanel)

export { ChatsPanelConnected as ChatsPanel }
