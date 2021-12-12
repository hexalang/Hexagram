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

import { observer } from "mobx-react-lite"
import styled, { css } from 'styled-components'

const HeaderStyled = styled.div`
	height: 54px;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-content: center;
	align-items: center;
`

const Burger = styled.div`
	width: 18px;
	height: 18px;
	padding-top: 3px;
	& div {
		width: 18px;
		height: 2px;
		background-color: #a8a8a8;
		margin-bottom: 3px;
	}
	cursor: pointer;
`

const Search = styled.div`
	width: 152px;
	background-color: #f1f1f1;
	height: 32px;
	border-radius: 4px;
	display: flex;
	color: #999999;
	align-content: center;
	align-items: center;
	cursor: text;
	& span {
		font-size: 11pt;
		margin-left: 14px;
	}
	// TODO flex-grow: 1;
`

export const Header = observer(({ showSidePanel }: { showSidePanel: (event: unknown) => void }) => {
	return (
		<HeaderStyled>
			<Burger onClick={showSidePanel}>
				<div></div>
				<div></div>
				<div></div>
			</Burger>
			<Search title="Not yet implemented"><span>Search</span></Search>
		</HeaderStyled>
	) // TODO Search, etc
})
