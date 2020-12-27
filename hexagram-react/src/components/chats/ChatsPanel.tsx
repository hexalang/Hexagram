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
import './ChatsPanel.scss'

const ChatsPanel = ({selectChat, downloadFile, showSidePanel}:{showSidePanel: any, selectChat: (id: number) => void, downloadFile: Function}) => (
	<div className="chatList">
		<Header showSidePanel={showSidePanel}/>
		<ChatList selectChat={selectChat} downloadFile={downloadFile}/>
		<Footer/>
	</div>
)


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


export { ChatsPanel }
