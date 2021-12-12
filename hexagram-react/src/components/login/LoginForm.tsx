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
import styled, { css } from 'styled-components'

const CenterBackgroundBefore = styled.div`
	content: '';
	background-color: #27443a;
	position: absolute;
	left: 0px;
	top: 0px;
	width: 100%;
	height: 100%;
	z-index: -2;
`

const CenterBackground = styled.div`
	z-index: -1;
	transition: filter 1s ease, transform 1s ease;
	position: absolute;
	left: 0%;
	top: 0px;
	width: 100%;
	height: 100%;
	background-image: url(dark-fog-forest-haze-6992.jpg);
	background-repeat: no-repeat;
	background-size: cover;

	transform: scale(1.1);
`

const Hint = styled.div`
	font-size: 16px;
	margin-top: 24px;
	color: #8D969C;

	color: rgba(255, 255, 255, 0.6);
`

const Sign = styled.div`
	color: black;
	font-size: 34px;
	font-weight: 600;
	margin-top: 30px;

	text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
	padding-bottom: 5px;
	padding-top: 5px;
	padding-left: 15px;
	padding-right: 15px;
	color: rgb(240, 240, 240);
`

const Title = styled.div`
	color: #2FA7E3;
	font-size: 40px;
	font-weight: 600;
	margin-top: 40px;

	text-shadow: 0px 0px 15px rgba(0, 0, 0, 0.6);
	padding-top: 0px;
	padding-bottom: 10px;
	padding-left: 35px;
	padding-right: 35px;
`

const Form = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-content: center;
	align-items: center;
	height: 100vh;
	width: 100vw;

	& > * {
		flex-shrink: 0;
	}
`

const Logo = styled.img`
	pointer-events: none;
	width: 13vw;
	height: 13vw;
`

interface NextProps {
	readonly error: boolean
}

const Next = styled.div<NextProps>`
	margin-top: 24px;
	color: white;
	font-size: 20px;
	background-color: #4EA4F6;
	border-radius: 10px;
	height: 54px;
	width: 360px;
	line-height: 50px;
	cursor: pointer;

	transition: background-color 0.2s ease-in-out, transform 0.2s ease-in-out;
	transform: scale(1.0);

	&:hover:active {
		background-color: #418BD0;
		transform: scale(0.95);
	}

	&:hover {
		background-color: #4797E2;
		transform: scale(1.05);
	}

	${({ error }) => error && css`
		background-color: #7aacdb;
	`}
`

const Input = styled.input`
	padding-left: 20px;
	outline-width: 0;
	color: black;
	font-size: 20px;
	height: 52px;
	width: 358px;
	transition: color 0.3s ease-in-out;

	background-color: rgba(255,255,255,0.4);
	color: white;

	&.error {
		color: rgba(255, 155, 155, 0.9);
	}
`

const Phone = styled.div`
	margin-top: 24px;
	border-radius: 10px;
	border-style: solid;
	border-width: 1px;
	border-color: #4797E2;
	width: 360px;
	height: 54px;
	line-height: 50px;
	display: inline-block;
	text-align: left;
	padding: 1px;

	transition: border-color 0.4s ease-in-out;
	border-width: 2px;
	border-color: rgba(71, 151, 226, 0.0);
	padding: 0px;

	&:hover {
		border-color: rgba(71, 151, 226, 1.0);
	}
`

const Code = styled(Phone)``

const Secret = styled(Phone)``

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
		<CenterBackgroundBefore></CenterBackgroundBefore>
		<CenterBackground style={blur ? { filter: 'blur(30px)', transform: 'scale(1.1)' } : { filter: 'blur(10px)', transform: 'scale(1.0)' }}></CenterBackground>
		<Form>
			<Logo src="logo.svg" alt="Logo" />
			<Title>Hexagram</Title>
			<Sign>Sign in to Telegram</Sign>

			{loginState === LoginState.WaitPhoneNumber && <>
				<Hint>Enter your phone number to log in</Hint>
				<Phone><Input
					className={isCorrectPhoneNumber(ui.phone) && !ui.error ? '' : 'error'}
					value={ui.phone} onChange={e => {
						ui.error = false
						ui.phone = e.target.value
					}}
					type="tel" name="phoneInput" id="phoneInput"
					placeholder="Your phone number"
				/></Phone>
			</>}

			{loginState === LoginState.WaitCode && <>
				<Hint>Enter authentication code to log in</Hint>
				<Code><Input
					className={isCorrectPhoneNumber(ui.code) && !ui.error ? '' : 'error'}
					value={ui.code} onChange={e => {
						ui.error = false
						ui.code = e.target.value
					}}
					type="tel" name="codeInput" id="codeInput"
					placeholder="Code from SMS or message" /></Code>
			</>}

			{loginState === LoginState.WaitRegistration /* TODO > show TOS */ && <>
				<Hint>Registration is not yet implemented, sorry</Hint>
			</>}

			{loginState === LoginState.WaitPassword && <>
				<Hint>Enter your phone 2FA password to log in</Hint>
				<Secret><Input
					className={ui.error ? 'error' : ''}
					value={ui.secret} onChange={e => {
						ui.error = false
						ui.secret = e.target.value
					}}
					type="password" name="secretInput" id="secretInput"
					placeholder={state.hint ? state.hint : "Your password"} /></Secret>
			</>}

			<Next error={ui.error} onClick={next}>NEXT</Next>

			{!ui.error && loginState === LoginState.WaitPhoneNumber && <Hint>You will receive SMS</Hint>}
			{!ui.error && loginState === LoginState.WaitCode && <Hint>Check your SMS inbox or other devices</Hint>}
			{!ui.error && loginState === LoginState.WaitRegistration && <Hint>You accept Telegram terms of service</Hint>}
			{!ui.error && loginState === LoginState.WaitPassword && <Hint>You have set 2FA in your profile</Hint>}

			{ui.error && loginState === LoginState.WaitPhoneNumber && <Hint>Wrong phone number</Hint>}
			{ui.error && loginState === LoginState.WaitCode && <Hint>Wrong secret code</Hint>}
			{ui.error && loginState === LoginState.WaitPassword && <Hint>Wrong 2FA password</Hint>}
		</Form>
	</>
})
