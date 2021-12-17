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

import * as TL from '../tdlib/tdapi'
import { observable } from "mobx"

// Handles updateOption
export class Options {
	@observable myId: string | null = null

	merge(updateOption: TL.TLUpdateOption) {
		switch (updateOption.name) {
			//case "version":
			//	this.loaded = true
			//	break
			//case "my_id":
			//	this.myId = parseFloat(TL.optionValueInteger(updateOption.value).value)
			//	break
			default:
				console.warn('Unknown update option', updateOption)
		}
	}
}
