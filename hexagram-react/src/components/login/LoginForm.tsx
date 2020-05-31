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
import './LoginForm.scss'
import { State, LoginState } from '../../redux/store'
import * as TL from '../../tdlib/tdapi'
import { tg } from '../../tdlib/tdlib'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { downloadFile as $downloadFile } from '../../tdlib/loader'
import { nameToInitials } from '../../utils/UserInfo'

function cleanPhoneNumber(text: string): string {
	text = text.trim()
	if (text.startsWith('+')) text = text.substr(1).trim()
	text = text.split('-').join('').split(' ').join('')
	return text
}

function isCorrectPhoneNumber(text: string): boolean {
	text = cleanPhoneNumber(text)
	for (const char of text.split('')) {
		if (!'0123456789'.includes(char)) return false
	}
	return true
}

function LoginForm({state, setAuthenticationPhoneNumber, checkAuthenticationCode, checkAuthenticationPassword}: {
	state: State,
	setAuthenticationPhoneNumber: Function,
	checkAuthenticationCode: Function,
	checkAuthenticationPassword: Function
}) {
	const [phone, setPhone] = useState('')
	const [code, setCode] = useState('')
	const [secret, setSecret] = useState('')

	const next = () => {
		let password = secret.trim()
		setSecret('')

		if (state.loginState == LoginState.WaitPhoneNumber && isCorrectPhoneNumber(phone)) {
			setAuthenticationPhoneNumber(cleanPhoneNumber(phone))
		}

		if (state.loginState == LoginState.WaitCode && isCorrectPhoneNumber(code)) {
			checkAuthenticationCode(cleanPhoneNumber(code))
		}

		if (state.loginState == LoginState.WaitPassword && password != '') {
			checkAuthenticationPassword(password)
		}

		if (state.loginState == LoginState.WaitRegistration) {
			// TODO
		}
	}

	const blur = (state.loginState != LoginState.WaitPhoneNumber) || (phone != '')

	return <>
	<div className="centerBackgroundBefore"></div>
	<div className="centerBackground" style={blur? {filter: 'blur(30px)', transform: 'scale(1.1)'} : {filter: 'blur(10px)', transform: 'scale(1.0)'}}></div>
	<div className="loginForm">
		<img src="logo.svg"/>
		<div className="title">Hexagram</div>
		<div className="sign">Sign in to Telegram</div>

		{ state.loginState == LoginState.WaitPhoneNumber && <>
			<div className="hint">Enter your phone number to log in</div>
			<div className="phone"><input
				className={isCorrectPhoneNumber(phone)? '' : 'error'}
				value={phone} onChange={e => setPhone(e.target.value)}
				type="tel" name="phoneInput" id="phoneInput"
				placeholder="Your phone number"
			/></div>
		</> }

		{ state.loginState == LoginState.WaitCode && <>
			<div className="hint">Enter authentication code to log in</div>
			<div className="code"><input
				className={isCorrectPhoneNumber(code)? '' : 'error'}
				value={code} onChange={e => setCode(e.target.value)}
				type="tel" name="codeInput" id="codeInput"
				placeholder="Code from SMS or message"/></div>
		</> }

		{ state.loginState == LoginState.WaitRegistration /* TODO > show TOS */ && <>
			<div className="hint">Registration is not yet implemented, sorry</div>
		</> }

		{ state.loginState == LoginState.WaitPassword /* TODO > password hint */ && <>
			<div className="hint">Enter your phone 2FA password to log in</div>
			<div className="secret"><input
				className={true? '' : 'error'}
				value={secret} onChange={e => setSecret(e.target.value)}
				type="password" name="secretInput" id="secretInput"
				placeholder="Your password"/></div>
		</> }

		<div className="next" onClick={next}>NEXT</div>

		{ state.loginState == LoginState.WaitPhoneNumber && <div className="hint">You will receive SMS</div> }
		{ state.loginState == LoginState.WaitCode && <div className="hint">Check your SMS inbox or other devices</div> }
		{ state.loginState == LoginState.WaitRegistration && <div className="hint">You accept Telegram terms of service</div> }
		{ state.loginState == LoginState.WaitPassword && <div className="hint">You have set 2FA in your profile</div> }

		{ false && <div className="hint">Wrong phone number</div> }
		{ false && <div className="hint">Wrong secret code</div> }
		{ false && <div className="hint">Wrong 2FA password</div> }
	</div>
	</>
}

const mapStateToProps = (state: State, ownProps: any) => ({ state })

function setAuthenticationPhoneNumber(value: string) {
	return async (dispatch:Dispatch, getState: () => State) => {
		await tg.setAuthenticationPhoneNumber(value, {
			"@type": "phoneNumberAuthenticationSettings",
			allow_flash_call: false,
			is_current_phone_number: false,
			allow_sms_retriever_api: false,
		})
	}
}

function checkAuthenticationCode(value: string) {
	return async (dispatch:Dispatch, getState: () => State) => {
		await tg.checkAuthenticationCode(value)
	}
}

function checkAuthenticationPassword(value: string) {
	return async (dispatch:Dispatch, getState: () => State) => {
		await tg.checkAuthenticationPassword(value)
	}
}

const mapDispatchToProps = (dispatch:Dispatch) => {
	return {
		setAuthenticationPhoneNumber: (value: string) => {
			return dispatch(setAuthenticationPhoneNumber(value) as any)
		},
		checkAuthenticationCode: (value: string) => {
			return dispatch(checkAuthenticationCode(value) as any)
		},
		checkAuthenticationPassword: (value: string) => {
			return dispatch(checkAuthenticationPassword(value) as any)
		},
	}
}

const LoginFormConnected = connect(mapStateToProps, mapDispatchToProps)(LoginForm)

export { LoginFormConnected as LoginForm }
