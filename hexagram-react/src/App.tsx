import React from 'react';
import logo from './logo.svg';
import './App.css';
import TdClient, { TdOptions, TdObject } from 'tdweb';

const options: TdOptions = {
	/**
	 * Callback for all incoming updates.
	 */
	onUpdate: async (update: TdObject) => {
		console.log('receive update', update)
		switch (update['@type']) {
			case "updateAuthorizationState":
				switch ((update as any).authorization_state['@type']) {
					case "authorizationStateWaitTdlibParameters":
						await td.send({
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
								use_file_database: false,
								database_directory: '/db',
								files_directory: '/'
							}
						})
						break;

					case "authorizationStateWaitEncryptionKey":
						await td.send({
							'@type': 'checkDatabaseEncryptionKey',
						})
						break;

					case "authorizationStateWaitPhoneNumber":
						await td.send({
							'@type': 'checkAuthenticationBotToken',
							token
						})
						break;

					default:
						// code...
						break;
				}
				break;

			default:
				// code...
				break;
		}
	},
	/**
	 * Name of the TDLib instance. Currently only one instance of TdClient with a given name is allowed.
	 * All but one instances with the same name will be automatically closed. Usually, the newest non-background instance is kept alive.
	 * Files will be stored in an IndexedDb table with the same name.
	 */
	instanceName: 'test',
	/**
	 * Pass true, if the instance is opened from the background.
	 */
	//isBackground: false,
	/**
	 * The initial verbosity level for the TDLib internal logging (0-1023).
	 */
	logVerbosityLevel: 1,
	/**
	 * The initial verbosity level of the JavaScript part of the code (one of 'error', 'warning', 'info', 'log', 'debug').
	 */
	jsLogVerbosityLevel: 'error',
	/**
	 * Pass false to use TDLib without database and secret chats. It will significantly improve loading time, but some functionality will be unavailable.
	 */
	useDatabase: true,
	/**
	 * For debug only. PaPass false to use TDLib without database and secret chats.
	 * It will significantly improve loading time, but some functionality will be unavailable.ss true
	 * to open TDLib database in read-only mode
	 */
	readOnly: false,
	/**
	 * For debug only. The type of the TDLib build to use. 'asmjs' for asm.js and 'wasm' for WebAssembly.
	 * If mode == 'auto' WebAbassembly will be used if supported by browser, asm.js otherwise.
	 */
	mode: 'wasm'
}

const td = new TdClient(options)

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
