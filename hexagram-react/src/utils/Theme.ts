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

export const setTheme = (dark: boolean): void => {
    const { style } = document.documentElement

    style.setProperty('--background-primary', dark ? '#17212B' : '#ffffff')

    style.setProperty('--chat-hover', dark ? '#' : '#')
    style.setProperty('--chat-active', dark ? '#' : '#')
    style.setProperty('--chat-pressed', dark ? '#' : '#')
    style.setProperty('--chat-title', dark ? '#' : '#')
    style.setProperty('--chat-filter', dark ? 'invert(0)' : 'invert(1)')
    style.setProperty('--chat-counter', dark ? '#' : '#')
    style.setProperty('--chat-mention', dark ? '#' : '#')

    style.setProperty('--header-search', dark ? '#' : '#')
}
