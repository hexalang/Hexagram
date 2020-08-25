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
import { ChatListElement } from './ChatListElement'
import { State } from '../../redux/store'
import { useSelector, useDispatch } from 'react-redux'

export function ChatList({selectChat, downloadFile}:{selectChat: (id: number) => void, downloadFile: Function}) {
	const [dragging, setDragging] = useState(false)
	const [position, setPosition] = useState({left: 0, top: 0})
	const [lastPosition, setLastPosition] = useState({left: 0, top: 0})

	const chatListScrollBar = useRef(null)
	const chatListScrollPane = useRef(null)

	const chatIds = useSelector((state: State) => state.chatIds)
	const chats = useSelector((state: State) => state.chats)

	useEffect(() => {

		const onMouseMove = (e: any) => {
			setPosition({
				left: position.left + e.pageX - lastPosition.left,
				top: Math.max(0, position.top + e.pageY - lastPosition.top)
			})
			setLastPosition({left: e.pageX, top: e.pageY})
		}

		const onMouseUp = () => {
			setDragging(false)
		}

		if (dragging) {
			document.addEventListener('mousemove', onMouseMove)
			document.addEventListener('mouseup', onMouseUp)
		}

		return () => {
			document.removeEventListener('mousemove', onMouseMove)
			document.removeEventListener('mouseup', onMouseUp)
		}
	}, [dragging])

	const onMouseDown = (e: any) => {
		setLastPosition({left: e.pageX, top: e.pageY})
		setDragging(true)
	}

	const sliderMaxY = chatListScrollBar.current != null? (chatListScrollBar.current as any).offsetHeight : 0
	const sliderHeight = 100 // TODO
	const sliderY = Math.min(Math.max(position.top, 0), sliderMaxY - sliderHeight)
	const progress = Math.min(sliderY / (sliderMaxY - sliderHeight), 1.0)
	const paneH = chatListScrollPane.current != null? (chatListScrollPane.current as any).offsetHeight : 0
	const paneY = -Math.round(progress * (paneH - sliderMaxY))
	const onMouseClick = (e: unknown) => {
	}

	const onWheel = (e: any) => {
		setPosition({...position, top: Math.min(Math.max(0, position.top + e.deltaY * 0.5), sliderMaxY - sliderHeight)})
	}

	const sortedChats: number[] = [...chatIds].sort((a: number, b: number): number => {
		const ordera: BigInt = BigInt(chats[a].order)
		const orderb: BigInt = BigInt(chats[b].order)
		if (ordera > orderb) return -1
		if (ordera < orderb) return +1
		return 0
	})

	return <div key="chats" className="chats" onWheel={onWheel}>
		<div key="chatListScrollPane" className="chatListScrollPane" ref={chatListScrollPane} style={{top: paneY + 'px'}}>
		{
		sortedChats.map(chatId => <ChatListElement downloadFile={downloadFile} key={chatId} chatId={chatId} selectChat={selectChat}/>)
		}
		</div>
		<div key="chatListScrollBar" className="chatListScrollBar" onMouseDown={onMouseClick} ref={chatListScrollBar}></div>
		<div key="chatListScrollBarSlider" className="chatListScrollBarSlider" onMouseDown={onMouseDown} style={{top: sliderY + 3+ 'px'}}></div>
	</div>
}
