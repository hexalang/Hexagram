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

import TdClient, { TdOptions, TdObject } from 'tdweb'
import * as TL from './tdapi'
import ids from './id.json'

// 'cause you cannot reassign `import {let}`
export const dispatchTelegramEventHandler = { handle: null as unknown as Function }

const apiId = ids.apiId
const apiHash = ids.apiHash
const instanceName = 'user0'

let queue: TdObject[] = []
let timeOut = true

const dequeue = () => {
	timeOut = true
	if (queue.length === 0) return
	dispatchTelegramEventHandler.handle(queue)
	queue = []
}

const dispatchTelegramEvent = (update: TdObject) => {
	queue.push(update)
	if (timeOut) {
		dequeue()
		timeOut = false
		setTimeout(dequeue, 111)
	}
}

const options: TdOptions = {
	/**
	 * Callback for all incoming updates.
	 */
	onUpdate: (update: TdObject) => {

		switch (update['@type']) {
			case "ok": break // Just Ok
			case "updateAuthorizationState":
				switch ((update as any).authorization_state['@type']) {
					case "authorizationStateWaitTdlibParameters":
						td.send({
							'@type': 'setTdlibParameters',
							parameters: {
								'@type': 'tdParameters',
								use_test_dc: false,
								api_id: apiId,
								api_hash: apiHash,
								system_language_code: navigator.language || 'en',
								device_model: 'WebAssembly',
								system_version: 'WebAssembly',
								application_version: '1.0.0',
								use_secret_chats: true,
								use_message_database: true,
								use_file_database: true,
								database_directory: '/db',
								files_directory: '/'
							}
						})
						break

					case "authorizationStateWaitEncryptionKey":
						td.send({
							'@type': 'checkDatabaseEncryptionKey',
						})
						break

					default:
						dispatchTelegramEvent(update)
						break
				}
				break

			//			case "updateFile":
			//				dispatchTelegramEvent(update)
			//				break
			//
			case "updateOption":
				if ((update as any).name === "my_id") { // Ready
					// Trigger TDLib to load dialogs
					const CHAT_SLICE_LIMIT = 25
					td.send({
						'@type': 'getChats',
						chat_list: { '@type': 'chatListMain' },
						offset_chat_id: 0,
						offset_order: '9223372036854775807',
						limit: CHAT_SLICE_LIMIT
					})
				}

				dispatchTelegramEvent(update)

				break

			default:
				dispatchTelegramEvent(update)
				break
		}
	},
	/**
	 * Name of the TDLib instance. Currently only one instance of TdClient with a given name is allowed.
	 * All but one instances with the same name will be automatically closed. Usually, the newest non-background instance is kept alive.
	 * Files will be stored in an IndexedDb table with the same name.
	 */
	instanceName: instanceName,
	/**
	 * Pass true, if the instance is opened from the background.
	 */
	//isBackground: false,
	/**
	 * The initial verbosity level for the TDLib internal logging (0-1023).
	 */
	logVerbosityLevel: 0,
	/**
	 * The initial verbosity level of the JavaScript part of the code (one of 'error', 'warning', 'info', 'log', 'debug').
	 */
	jsLogVerbosityLevel: 'error',
	/**
	 * Pass false to use TDLib without database and secret chats. It will significantly improve loading time, but some functionality will be unavailable.
	 */
	useDatabase: true,
	/**
	 * For debug only. Pass true
	 * to open TDLib database in read-only mode
	 */
	readOnly: false,
	/**
	 * For debug only. The type of the TDLib build to use. 'asmjs' for asm.js and 'wasm' for WebAssembly.
	 * If mode == 'auto' WebAbassembly will be used if supported by browser, asm.js otherwise.
	 */
	mode: 'wasm'
}

export const td: TdClient = new TdClient(options)
export const tg: TL.TD = new TL.TD(td)
