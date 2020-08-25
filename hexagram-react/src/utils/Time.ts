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

const day = (60 * 60 * 24 * 1000)
const week = day * 7
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const date = new Date()

// Shows XX:XX or XX.XX.XX
export function formatTime(dateTime: number): string {
	date.setTime(dateTime * 1000)
	const diff = Date.now() - (dateTime * 1000)

	if (diff >= week) {
		return date.toLocaleDateString(navigator.language, {
			dateStyle: 'short'
		} as any)
	}

	if (diff >= day) {
		return days[date.getDay()]
	}

	return date.toLocaleTimeString(navigator.language, {
		hour: '2-digit',
		minute: '2-digit'
	}).replace(/^0/, "") /* remove leading zero */
}
