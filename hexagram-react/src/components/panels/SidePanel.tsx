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
	display: flex;
	background-color: rgba(0, 0, 0, 0.3);
	flex-grow: 1;
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
	background-color: white;
	width: 260px;
	flex-direction: column;
`

const SideInfo = styled.div`
	width: 260px;
	height: 134px;
	margin-bottom: 13px;

	background-color: gray;
	background-image: url(flowers.jpg);
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
	color: black;
	width: 260px;
	height: 44px;
	text-align: left;
	padding-left: 24px;

	display: flex;
	flex-direction: column;
	justify-content: center;

	span {
		font-size: 11pt;
	}

	:hover {
		background-color: #f1f1f1;
	}

	:hover:active {
		background-color: #e5e5e5;
	}

	&.patreon {
		color: #f96854;
	}
`

export const SidePanel = observer(() => {
	const user = state.users[state.myId]

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
		<SidePanelStyled>
			<SideBar>
				<SideInfo>
					<SideInfoName>{name}</SideInfoName>
					<SideInfoName>{phone}</SideInfoName>
				</SideInfo>
				<Button onClick={_ => askLogout()}><span>Log out</span></Button>
				<Button className="patreon" onClick={_ => window.open('https://www.patreon.com/PeyTy', '_blank')}><span>Donate on Patreon</span></Button>
				<Button className="github" onClick={_ => window.open('https://github.com/hexalang/hexagram', '_blank')}><span>Source code on GitHub</span></Button>
			</SideBar>
			<Fade onClick={hideSidePanel}>
			</Fade>
		</SidePanelStyled>
	)
})
