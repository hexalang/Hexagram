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
import { state } from '../../mobx/store'
import styled from 'styled-components'
import preview from '../preview.svg'
import { setTheme } from '../../utils/Theme'

const SidePanelStyled = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	width: 100vw;
	height: 100vh;
	flex-direction: row;
`

const Fade = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	display: flex;
	background-color: transparent;
	width: 100vw;
	height: 100vh;
	transition: background-color 0.222s ease-in-out;
`

const SideInfoName = styled.div`
	display: flex;
	color: white;
	font-size: 11pt;
	text-shadow: 0px 0px 5px #000000;
	padding: 8px;
`

const SideBar = styled.div`
	display: flex;
	flex-grow: 0;
	background-color: var(--background-primary-bg);
	width: 260px;
	flex-direction: column;
	transform: translateX(-260px);
	transition: transform 0.222s ease-out, background-color 0.222s ease-in-out;
`

const SideInfo = styled.div`
	width: 260px;
	height: 134px;
	margin-bottom: 13px;

	background-color: gray;
	background-image: url(${preview});
	background-repeat: no-repeat;
	background-size: cover;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-content: center;
	align-items: center;
`

const Button = styled.div`
	font-size: 11pt;
	color: var(--chat-title);
	width: 260px;
	height: 44px;
	text-align: left;
	padding-left: 24px;
	padding-right: 24px;
	transition: background-color 0.33s ease-in-out, color 0.33s ease-in-out;;
	cursor: pointer;

	display: flex;
	flex-direction: column;
	justify-content: center;

	span {
		font-size: 11pt;
		flex-shrink: 0;
	}

	svg {
		flex-shrink: 0;
		height: 22px;
		width: 38px;

		> circle {
			stroke-width: 1.5px;
			stroke: #276899;
			stroke: var(--chat-counter-bg);
			fill: var(--background-primary-bg);
			transition: transform 0.33s ease-in-out, fill 0.33s ease-in-out;
			transform: translate(calc(var(--dark) * 16px), 0px);
		}

		> path {
			fill: #276899;
			fill: var(--chat-counter-bg);
		}
	}

	> div {
		display: flex;
		justify-content: space-between;
		width: 100%;

		span {
			padding-top: 2px;
		}
	}

	:hover {
		background-color: var(--chat-hover-bg);
	}

	:hover:active {
		background-color: var(--chat-pressed-bg);
	}

	&.patreon {
		color: #f96854;
	}
`

const Checkbox = styled.svg`
	display: flex;
`

export const ThemeCheckbox = observer(() => {
	const x = 10
	const y = 3
	const w = 20
	const h = 0
	const r = 8

	return (
		<Checkbox>
			<path d={`M${x},${y} h${w} a${r},${r} 0 0 1 ${r},${r} v${h} a${r},${r} 0 0 1 -${r},${r} h-${w} a${r},${r} 0 0 1 -${r},-${r} v-${h} a${r},${r} 0 0 1 ${r},-${r} z`} />
			<circle cx={'11px'} cy={'11px'} r={'10px'} />
		</Checkbox>
	)
})

export const SidePanel = observer(() => {
	const user = state.users.get(state.myId)
	const showSideBar = state.showSideBar

	const hideSidePanel = (e: unknown) => {
		state.showSideBar = false
	}

	const name = user ? (user.firstName + ' ' + user.lastName).trim() : 'Hexagram'
	const phone = '+' + (user ? user.phone : '')

	const askLogout = () => {
		if (window.confirm("Log out?") === true) {
			state.logOut()
		}
	}

	return (
		<SidePanelStyled style={{ pointerEvents: showSideBar ? undefined : `none` }}>
			<Fade onClick={hideSidePanel} style={{ backgroundColor: showSideBar ? `rgba(0, 0, 0, 0.3)` : undefined }} />
			<SideBar style={{
				transform: showSideBar ? `translateX(0px)` : undefined,
				boxShadow: showSideBar ? `0px 0 22px 0px rgba(0, 0, 0, 0.4)` : undefined
			}}>
				<SideInfo>
					<SideInfoName>{name}</SideInfoName>
					<SideInfoName>{phone}</SideInfoName>
				</SideInfo>
				<Button onClick={_ => askLogout()}><span>Log out</span></Button>
				<Button className="patreon" onClick={_ => window.open('https://www.patreon.com/PeyTy', '_blank')}><span>Donate on Patreon</span></Button>
				<Button className="github" onClick={_ => window.open('https://github.com/hexalang/hexagram', '_blank')}><span>Source code on GitHub</span></Button>
				<Button onClick={_ => {
					state.dark = !state.dark
					setTheme(state.dark)
				}}>
					<div>
						<span>Night Mode</span>
						<ThemeCheckbox />
					</div>
				</Button>
			</SideBar>
		</SidePanelStyled >
	)
})
