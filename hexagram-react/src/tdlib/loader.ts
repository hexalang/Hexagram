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

import * as TL from '../tdlib/tdapi'
import { Dispatch } from 'redux'
import { State } from '../redux/store'
import { tg } from '../tdlib/tdlib'

let busy = false
export function downloadFile(idOrFile: number | TL.TLFile) {
	return async (dispatch:Dispatch, getState: () => State) => {
		if (busy) return;
		const id = typeof(idOrFile) == 'number'? idOrFile as number : (idOrFile as TL.TLFile).id
		const state = getState()

		const file: TL.TLFile | null = state.files[id] ?? ((typeof(idOrFile) != 'number') && (idOrFile as TL.TLFile))

		if (file == null) return console.warn('downloadFile->state.files[id] == null')
		if (state.fileURL[id] != null) return

		if (
			state.fileLoads[id] == null &&
			file &&
			file.local.can_be_downloaded == true &&
			file.local.is_downloading_completed == false &&
			file.local.is_downloading_active == false
		) {
			dispatch({ type: 'SAVE_FILE_LOADS', payload: { id, loads: 1 } })
			const file = await tg.downloadFile(id, 30, 0, 0, false)
			return
		}

		if (
			(state.fileLoads[id] == null || state.fileLoads[id] == 1) &&

			file &&
			file.local.is_downloading_completed == true
		) {
			if (busy) return;
			busy = true
			dispatch({ type: 'SAVE_FILE_LOADS', payload: { id, loads: 2 } })
			const filePart = await tg.readFilePart(id, 0, 0)
			await new Promise(resolve => setTimeout(resolve, 16))
			let blobURL = (window as any).blobURL || window.URL.createObjectURL(filePart.data)
			busy = false
			dispatch({ type: 'SAVE_FILE_URL', payload: { id, url: blobURL } })
		}
	}
}
