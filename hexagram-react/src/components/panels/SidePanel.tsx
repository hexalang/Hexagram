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
import { State } from '../../mobx/store'
import './SidePanel.scss'

const SidePanel = observer(({ state }: { state: State }) => {
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

	return <div className="sidePanel">
		<div className="sideBar">
			<div className="sideInfo">
				<div className="sideInfoName">{name}</div>
				<div className="sideInfoName">{phone}</div>
			</div>
			<div className="button" onClick={_ => askLogout()}><span>Log out</span></div>
			<div className="button patreon" onClick={_ => window.open('https://www.patreon.com/PeyTy', '_blank')}><span>Donate on Patreon</span></div>
			<div className="button github" onClick={_ => window.open('https://github.com/hexalang/hexagram', '_blank')}><span>Source code on GitHub</span></div>
		</div>
		<div className="fade" onClick={hideSidePanel}>
		</div>
	</div>
})

export { SidePanel }
