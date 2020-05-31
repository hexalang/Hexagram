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

// First Last => FL
export function nameToInitials(nameCombined: string): string {
	if (nameCombined.length < 2) return nameCombined.toUpperCase()
	return nameCombined.indexOf(' ') != -1? (nameCombined.split(' ')[0][0] + nameCombined.split(' ')[1][0]).substr(0, 2).toUpperCase() : nameCombined.substr(0, 2).toUpperCase()
}
