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
import { state } from '../../mobx/store'

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
	background-color: var(--header-search);
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

const SearchInput = styled.input`
	font-size: 11pt;
	background-color: unset;
	height: 32px;
	width: 152px;
	cursor: text;
	margin-left: 14px;
	color: #999999;

	::placeholder {
		color: #999999;
	}
`

export const Header = observer(({ showSidePanel }: { showSidePanel: (event: unknown) => void }) => {
	// TODO clear Search on Escape

	return (
		<HeaderStyled>
			<Burger onClick={showSidePanel}>
				<div></div>
				<div></div>
				<div></div>
			</Burger>
			<Search title="Filter over chats" onClick={e => e.currentTarget.querySelector('input')?.focus()}>
				<SearchInput
					placeholder="Search"
					type="text"
					className="editor"
					id="textName"
					maxLength={90}
					value={state.search}
					onChange={e => state.search = e.target.value}
					required
					autoComplete="off"
				/>
			</Search>
		</HeaderStyled>
	) // TODO Search, etc
})
