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

import { useState, useEffect, useRef, RefObject } from 'react'
import { ChatListElement } from './ChatListElement'
import { observer } from 'mobx-react-lite'
import { state } from '../../mobx/store'
import { observable } from "mobx"

interface Position {
	left: number, top: number
}

class UI {
	// GUI
	@observable dragging: boolean | null = null
	position: Position = { left: 0, top: 0 }
	lastPosition: Position = { left: 0, top: 0 }
	paneY: number = 0
	sliderY: number = 0

	chatListScrollBar: RefObject<HTMLDivElement>
	chatListScrollPane: RefObject<HTMLDivElement>
	chatListScrollSlider: RefObject<HTMLDivElement>
	sliderHeight: number = 100
	sliderMaxY: number = 200

	constructor(
		chatListScrollBar: RefObject<HTMLDivElement>,
		chatListScrollPane: RefObject<HTMLDivElement>,
		chatListScrollSlider: RefObject<HTMLDivElement>
	) {
		this.chatListScrollBar = chatListScrollBar
		this.chatListScrollPane = chatListScrollPane
		this.chatListScrollSlider = chatListScrollSlider

		this.reposition()
	}

	readonly events = () => {
		if (this.dragging === true) {
			document.addEventListener('mousemove', this.onMouseMove)
			document.addEventListener('mouseup', this.onMouseUp, { once: true })
		}

		if (this.dragging === false) {
			document.removeEventListener('mousemove', this.onMouseMove)
			document.removeEventListener('mouseup', this.onMouseUp)
		}
	}

	readonly reposition = () => {
		this.sliderMaxY = this.chatListScrollBar.current != null ? (this.chatListScrollBar.current as any).offsetHeight : 0
		this.sliderHeight = Math.round(this.sliderMaxY * (this.sliderMaxY / (62 * state.chatIds.length)))
		this.sliderY = Math.min(Math.max(this.position.top, 0), this.sliderMaxY - this.sliderHeight)
		const progress = Math.min(this.sliderY / (this.sliderMaxY - this.sliderHeight), 1.0)
		const paneH = this.chatListScrollPane.current != null ? (this.chatListScrollPane.current as any).offsetHeight : 0
		this.paneY = -Math.round(progress * (paneH - this.sliderMaxY))

		if (this.chatListScrollPane.current) {
			this.chatListScrollPane.current.style.top = this.paneY + 'px'
		}

		if (this.chatListScrollSlider.current) {
			this.chatListScrollSlider.current.style.top = this.sliderY + 3 + 'px'
			this.chatListScrollSlider.current.style.height = this.sliderHeight + 'px'
		}
	}

	readonly onMouseDown = (e: any) => {
		e.preventDefault()
		e.stopPropagation()

		this.lastPosition.left = e.pageX
		this.lastPosition.top = e.pageY
		this.dragging = true
		this.events()
	}

	readonly onMouseMove = (e: any) => {
		e.preventDefault()
		e.stopPropagation()

		this.position = {
			left: this.position.left + e.pageX - this.lastPosition.left,
			top: Math.max(0, this.position.top + e.pageY - this.lastPosition.top)
		}
		this.lastPosition = { left: e.pageX, top: e.pageY }

		this.reposition()
		requestAnimationFrame(this.reposition)
	}

	readonly onMouseUp = (e: any) => {
		e.preventDefault()
		e.stopPropagation()

		this.dragging = false
		this.events()
	}

	readonly onWheel = (e: any) => {
		e.stopPropagation()

		if (this.dragging) {
			return
		}

		// TODO fix delta
		this.position = { ...this.position, top: Math.min(Math.max(0, this.position.top + e.deltaY * 0.5), this.sliderMaxY - this.sliderHeight) }
		this.reposition()
	}

	readonly onMouseClick = (e: unknown) => {

	}

	readonly unmount = () => {
		this.dragging = false
		this.events()
	}
}

export const ChatList = observer(({ selectChat }: { selectChat: (id: number) => void }) => {
	const chatListScrollBar = useRef<HTMLDivElement>(null)
	const chatListScrollSlider = useRef<HTMLDivElement>(null)
	const chatListScrollPane = useRef<HTMLDivElement>(null)
	const [ui] = useState(() => new UI(chatListScrollBar, chatListScrollPane, chatListScrollSlider))

	useEffect(() => {
		return () => {
			ui.unmount()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const chats = state.chats // Optimization

	useEffect(() => {
		// Done after first and next complete renders
		// Required here to react on elements count change
		ui.reposition()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [state.chatIds.length])

	const sortedChats: number[] = [...state.chatIds].sort((a: number, b: number): number => {
		const ordera: BigInt = BigInt(chats[a].order ?? '0')
		const orderb: BigInt = BigInt(chats[b].order ?? '0')
		if (ordera > orderb) return -1
		if (ordera < orderb) return +1
		return 0
	})

	const slider = ui.dragging ? css.slider + ' ' + css.opacity : css.slider + ' ' + css.sliderSmooth
	const pane = ui.dragging ? css.pane : css.pane + ' ' + css.transition

	return (
		<div key="chats" className={css.chats} onWheel={ui.onWheel}>
			<div key="chatListScrollPane" className={pane} ref={chatListScrollPane} style={{ top: ui.paneY + 'px' }}>
				{
					sortedChats.map(chatId => <ChatListElement key={chatId} chatId={chatId} selectChat={selectChat} />)
				}
			</div>
			<div key="chatListScrollBar" className={css.scrollBar} onMouseDown={ui.onMouseClick} ref={chatListScrollBar}></div>
			<div key="chatListScrollBarSlider" className={slider} onMouseDown={ui.onMouseDown} ref={chatListScrollSlider} style={{ top: ui.sliderY + 3 + 'px', height: ui.sliderHeight + 'px' }}></div>
		</div>
	)
})
