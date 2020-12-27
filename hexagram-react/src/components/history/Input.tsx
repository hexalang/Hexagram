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
import * as TL from '../../tdlib/tdapi'
import { tg } from '../../tdlib/tdlib'
import './Input.scss'

function replaceCaret(el: HTMLElement) {
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

export default function Input() {
	const [value, setValue] = useState('')
	const messagesEndRef = useRef(null)

	useEffect(() => {
		const current = messagesEndRef.current
		if (current) replaceCaret(current)
	})

	useEffect(() => {
		const chat = state.chats[state.currentChatId]
		// Get draft
		const draft = chat && chat.draft
		if (
			draft &&
			draft['@type'] == 'inputMessageText' &&
			TL.inputMessageText(draft).text['@type'] == 'formattedText'
		) {
			const draftText: string = TL.formattedText(TL.inputMessageText(draft).text).text
			setValue(draftText.trim())
		} else setValue('')

	}, [state.currentChatId])

	function updateValue(text: string) {
		setValue(text.trim())
	}

	function onKeyDown(e: any) {
		if (e.key == 'Enter') {
			tg.parseTextEntities(
				value,
				{ '@type': 'textParseModeMarkdown', version: 1 }
			).then(text => {
				tg.sendMessage(
					state.currentChatId, // chat_id
					0, // reply_to_message_id
					{
						"@type": "sendMessageOptions",
						disable_notification: false,
						from_background: false,
						// TODO
						scheduling_state: null as any
					},// options
					null as any,// reply_markup
					{
						'@type': 'inputMessageText',
						text: text,
						disable_web_page_preview: false,
						clear_draft: true
					}// input_message_content
				)
			})

			setValue('')
			e.preventDefault()
			return false
		}
	}

	const chat = state.chats[state.currentChatId]

	if (chat == null) return null

	if (
		chat.type['@type'] == 'chatTypePrivate' &&
		state.users[TL.chatTypePrivate(chat.type).user_id] &&
		state.users[TL.chatTypePrivate(chat.type).user_id].type['@type'] == 'userTypeDeleted'
	) {
		return null
	}

	if (
		chat.type['@type'] == 'chatTypeSupergroup' &&
		state.supergroups[TL.chatTypeSupergroup(chat.type).supergroup_id]
	) {
		const supergroup = state.supergroups[TL.chatTypeSupergroup(chat.type).supergroup_id]
		if (supergroup.isChannel == true) return null
	}

	return <div className="bottom">
		<div className="input">
			{(value == '') && false && <div className="placeholder">Write a message...</div>}
			{false&&
			<div ref={messagesEndRef} className="editor" contentEditable={true} onKeyDown={onKeyDown} onInput={e => updateValue((e.target as any).innerHTML)} dangerouslySetInnerHTML={{__html:value}}></div>
			}
			<input type="text" className="editor" id="textName" maxLength={90} placeholder="Write a message..." onKeyDown={onKeyDown} value={value} onChange={e => updateValue(e.target.value)} required/>
		</div>

		<div className="thinVerticalLine"/>
	</div>
}
