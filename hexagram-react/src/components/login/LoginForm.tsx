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

import { LoginState } from '../../mobx/store'
import { state } from '../../mobx/store'
import { tg } from '../../tdlib/tdlib'
import { observer } from 'mobx-react-lite'
import { observable } from 'mobx'
import { Store, useStore, StoreEvent } from '../../mobx/wrap'

const cleanPhoneNumber = (text: string): string => {
	text = text.trim()
	if (text.startsWith('+')) text = text.substr(1).trim()
	text = text.split('-').join('').split(' ').join('')
	return text
}

const isCorrectPhoneNumber = (text: string): boolean => {
	text = cleanPhoneNumber(text)
	for (const char of text.split('')) {
		if (!'0123456789'.includes(char)) return false
	}
	return text.length > 0
}

class LoginFormState extends Store {
	@observable phone = ''
	@observable code = ''
	@observable secret = ''
	@observable error = false

	constructor(
	) {
		super()
	}

	unmount() {
		super.unmount()
	}

	listen(e: StoreEvent) {
		console.log({ StoreEvent: e })
	}
}

export const LoginForm = observer(() => {
	const ui = useStore(() => new LoginFormState())
	const { loginState } = state

	const setAuthenticationPhoneNumber = async (value: string) => {
		try {
			await tg.setAuthenticationPhoneNumber(value, {
				"@type": "phoneNumberAuthenticationSettings",
				allow_flash_call: false,
				is_current_phone_number: false,
				allow_sms_retriever_api: false,
			})
		} catch (e) {
			ui.error = true
		}
	}

	const checkAuthenticationCode = async (value: string) => {
		try {
			await tg.checkAuthenticationCode(value)
		} catch (e) {
			ui.error = true
		}
	}

	const checkAuthenticationPassword = async (value: string) => {
		try {
			await tg.checkAuthenticationPassword(value)
		} catch (e) {
			ui.error = true
		}
	}

	const next = () => {
		let password = ui.secret.trim()
		ui.secret = ''
		ui.error = false

		if (loginState === LoginState.WaitPhoneNumber && isCorrectPhoneNumber(ui.phone)) {
			setAuthenticationPhoneNumber(cleanPhoneNumber(ui.phone))
		}

		if (loginState === LoginState.WaitCode && isCorrectPhoneNumber(ui.code)) {
			checkAuthenticationCode(cleanPhoneNumber(ui.code))
		}

		if (loginState === LoginState.WaitPassword && password !== '') {
			checkAuthenticationPassword(password)
		}

		if (loginState === LoginState.WaitRegistration) {
			// TODO
		}
	}

	const blur = (loginState !== LoginState.WaitPhoneNumber) || (ui.phone !== '')

	return <>
		<div className="centerBackgroundBefore"></div>
		<div className="centerBackground" style={blur ? { filter: 'blur(30px)', transform: 'scale(1.1)' } : { filter: 'blur(10px)', transform: 'scale(1.0)' }}></div>
		<div className="loginForm">
			<img src="logo.svg" alt="Logo" />
			<div className="title">Hexagram</div>
			<div className="sign">Sign in to Telegram</div>

			{loginState === LoginState.WaitPhoneNumber && <>
				<div className="hint">Enter your phone number to log in</div>
				<div className="phone"><input
					className={isCorrectPhoneNumber(ui.phone) && !ui.error ? '' : 'error'}
					value={ui.phone} onChange={e => {
						ui.error = false
						ui.phone = e.target.value
					}}
					type="tel" name="phoneInput" id="phoneInput"
					placeholder="Your phone number"
				/></div>
			</>}

			{loginState === LoginState.WaitCode && <>
				<div className="hint">Enter authentication code to log in</div>
				<div className="code"><input
					className={isCorrectPhoneNumber(ui.code) && !ui.error ? '' : 'error'}
					value={ui.code} onChange={e => {
						ui.error = false
						ui.code = e.target.value
					}}
					type="tel" name="codeInput" id="codeInput"
					placeholder="Code from SMS or message" /></div>
			</>}

			{loginState === LoginState.WaitRegistration /* TODO > show TOS */ && <>
				<div className="hint">Registration is not yet implemented, sorry</div>
			</>}

			{loginState === LoginState.WaitPassword && <>
				<div className="hint">Enter your phone 2FA password to log in</div>
				<div className="secret"><input
					className={ui.error ? 'error' : ''}
					value={ui.secret} onChange={e => {
						ui.error = false
						ui.secret = e.target.value
					}}
					type="password" name="secretInput" id="secretInput"
					placeholder={state.hint ? state.hint : "Your password"} /></div>
			</>}

			<div className={ui.error ? 'next error' : 'next'} onClick={next}>NEXT</div>

			{!ui.error && loginState === LoginState.WaitPhoneNumber && <div className="hint">You will receive SMS</div>}
			{!ui.error && loginState === LoginState.WaitCode && <div className="hint">Check your SMS inbox or other devices</div>}
			{!ui.error && loginState === LoginState.WaitRegistration && <div className="hint">You accept Telegram terms of service</div>}
			{!ui.error && loginState === LoginState.WaitPassword && <div className="hint">You have set 2FA in your profile</div>}

			{ui.error && loginState === LoginState.WaitPhoneNumber && <div className="hint">Wrong phone number</div>}
			{ui.error && loginState === LoginState.WaitCode && <div className="hint">Wrong secret code</div>}
			{ui.error && loginState === LoginState.WaitPassword && <div className="hint">Wrong 2FA password</div>}
		</div>
	</>
})
