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
import { useState, useEffect, useRef, RefObject } from 'react'
import { state } from '../../mobx/store'
import * as TL from '../../tdlib/tdapi'
import { tg } from '../../tdlib/tdlib'
import { autorun, observable, reaction } from "mobx"
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

const Placeholder = styled.div`
	position: absolute;
	pointer-events: none;
	color: #bbbbbb;
	font-size: 11pt;
	font-weight: lighter;
	left: 16px;
	top: 34%;
`

const InputField = styled.div`
	display: flex;
	cursor: text;
	margin-left: 16px;

	input::placeholder {
		color: #999999;
	}

	input {
		color: var(--chat-title);
	}

	& .editor {
		width: 2048px; // TODO
		text-align: left;
		outline: none !important;

		& *,
		& > *,
		&,
		& *[style],
		& > *[style],
		& > a[style],
		& a[style] {
			color: var(--chat-title) !important;
			user-select: auto !important;
			font-size: 11pt !important;
			cursor: text !important;
			font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
				'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
				'Helvetica Neue', sans-serif !important;
			text-decoration: none !important;
			font-weight: lighter !important;
			background-color: transparent !important;
			text-align: left !important;
			display: inline;
		}

		& img,
		& > img {
			display: none !important;
		}
	}
`

const Bottom = styled.div`
	width: 100%;
	height: 46px;
	display: flex;
	flex-grow: 0;
	flex-shrink: 0;
	background-color: var(--background-primary-bg);
	flex-direction: row;
	justify-content: flex-start;
	align-content: center;
	align-items: center;
	position: relative;
`

const replaceCaret = (el: HTMLElement) => {
	// Place the caret at the end of the element
	const target = document.createTextNode('')
	el.appendChild(target)
	// do not move caret if element was not focused
	const isTargetFocused = document.activeElement === el
	if (target !== null && target.nodeValue !== null && isTargetFocused) {
		const sel = window.getSelection()
		if (sel !== null) {
			const range = document.createRange()
			range.setStart(target, target.nodeValue.length)
			range.collapse(true)
			sel.removeAllRanges()
			sel.addRange(range)
		}
		if (el instanceof HTMLElement) el.focus()
	}
}

class UI {
	// GUI
	@observable value: string = ''

	messagesEndRef: RefObject<HTMLDivElement>

	constructor(
		messagesEndRef: RefObject<HTMLDivElement>
	) {
		this.messagesEndRef = messagesEndRef

		autorun(() => {
			const current = messagesEndRef.current
			if (current) replaceCaret(current)
		})
	}
}

export const Input = observer(() => {
	const messagesEndRef = useRef<HTMLDivElement>(null)
	const [ui] = useState(() => new UI(messagesEndRef))

	useEffect(() => {
		const current = messagesEndRef.current
		if (current) replaceCaret(current)
	})

	useEffect(() => {
		const chat = state.chats.get(state.currentChatId)
		// Get draft
		const draft = chat && chat.draft
		if (
			draft &&
			draft['@type'] === 'inputMessageText' &&
			draft.text['@type'] === 'formattedText'
		) {
			// TODO every Chat has own input value
			const draftText: string = draft.text.text
			ui.value = draftText.trim()
		} else {
			ui.value = ''
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [state.currentChatId])

	const updateValue = (text: string) => {
		ui.value = text
	}

	const onKeyDown = (e: any) => {
		if (e.key === 'Enter') {
			tg.parseTextEntities(
				ui.value,
				{ '@type': 'textParseModeMarkdown', version: 1 }
			).then(text => {
				tg.sendMessage(
					state.currentChatId, // chat_id
					0, // message_thread_id
					0, // reply_to_message_id
					{
						"@type": "messageSendOptions",
						disable_notification: false,
						from_background: false,
						scheduling_state: null as any
					}, // options
					null as any,// reply_markup
					{
						'@type': 'inputMessageText',
						text: text,
						disable_web_page_preview: false,
						clear_draft: true
					}// input_message_content
				)
			})

			ui.value = ''
			e.preventDefault()
			return false
		}
	}

	const chat = state.chats.get(state.currentChatId)

	if (chat == null) return null

	if (
		chat.type['@type'] === 'chatTypePrivate'
	) {
		const user = state.users.get(chat.type.user_id)
		if (user && user.type['@type'] === 'userTypeDeleted') return null
	}

	if (
		chat.type['@type'] === 'chatTypeSupergroup' &&
		state.supergroups.get(chat.type.supergroup_id)
	) {
		const supergroup = state.supergroups.get(chat.type.supergroup_id)
		if (supergroup && supergroup.isChannel === true) return null
	}

	return (
		<Bottom>
			<InputField>
				{(ui.value === '') && false && <Placeholder>Write a message...</Placeholder>}
				{false &&
					<div ref={messagesEndRef} className="editor" contentEditable={true} onKeyDown={onKeyDown} onInput={e => updateValue((e.target as any).innerHTML)} dangerouslySetInnerHTML={{ __html: ui.value }}></div>
				}
				<input
					type="text"
					className="editor"
					id="textName"
					maxLength={90}
					placeholder="Write a message..."
					onKeyDown={onKeyDown}
					value={ui.value}
					onChange={e => updateValue(e.target.value)}
					required
					autoComplete="off"
				/>
			</InputField>

			<ThinVerticalLine />
		</Bottom>
	)
})
