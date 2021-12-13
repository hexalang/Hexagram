// Hexagram
// Copyright (C) 2021  Oleg Petrenko
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

import { CurrentChatPanel } from '../components/history/CurrentChatPanel'
import { ChatsPanel } from '../components/chats/ChatsPanel'
import { SidePanel } from '../components/panels/SidePanel'
import { LoginState, state } from '../mobx/store'
import { LoginForm } from '../components/login/LoginForm'
import preview from './preview.svg'
import floating from './floating.png'
import { observer } from 'mobx-react-lite'
import styled, { css } from 'styled-components'
import { Var } from 'react'

const App = styled.div`
	position: relative;
	text-align: center;
	display: flex;
	flex-direction: row;
	height: 100vh;
`

const Loading = styled.div`
	background-color: #4c5463;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	background-image: url(${preview});

	div {
		text-shadow: 0px 0px 15px rgba(0, 0, 0, 0.6);
		color: white;
		font-size: calc(20px + 2vmin);
		padding: 20px;
		margin-top: 80vh;
	}
`

const FloatingCirclePreview = styled.div`
	width: 256px;
	height: 256px;
	left: 266px;
	top: var(--top, 6px);
	position: absolute;
	border-radius: 100%;
	border-color: white;
	border-style: solid;
	border-width: 4px;
	box-shadow: 0px 0px 24px gray;
	will-change: top, transform, opacity;
	transform: rotate(20deg);
	opacity: 0;

	transition:
		background-image 0.333s ease-in-out,
		top 0.111s ease-out,
		transform 0.333s ease-out,
		opacity 0.333s ease-out;

	background-color: while;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	background-image: url(${floating});
`

export default observer(() => {
	const loaded = state.loaded
	const loginState = state.loginState
	const showSideBar = state.showSideBar

	if (loaded === false) return <Loading><div>Loading Hexagram...</div></Loading>
	if (loginState === LoginState.WaitTDLib) return <Loading><div>Logging in...</div></Loading>

	// TODO load better quality chat pic (in separate bg element with transparent->png transition)
	const floatingTop = {
		'--top': Math.min(document.body.clientHeight - 266, Math.max(6, state.mouseY - 128)) + 'px',
		backgroundImage: state.floatingCirclePreview ? 'url(' + state.floatingCirclePreview + ')' : undefined,
		opacity: state.floatingCirclePreview ? 1 : undefined,
		transform: state.floatingCirclePreview ? 'rotate(0deg)' : undefined,
	} as Var

	if (loginState === LoginState.Ready) return (
		<App>
			<ChatsPanel />
			<CurrentChatPanel />
			{showSideBar && <SidePanel />}
			<FloatingCirclePreview style={floatingTop} />
		</App>
	)

	return (
		<App>
			<LoginForm />
		</App>
	)
})
