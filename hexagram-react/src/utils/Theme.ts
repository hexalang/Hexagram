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

export const querySystemTheme = (): 'dark' | 'light' => {
    if (window.matchMedia) {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark'
        } else {
            return 'light'
        }
    }
    return 'light'
}

export const setTheme = (dark: boolean): void => {
    const { style } = document.documentElement

    style.setProperty('--background-primary-bg', dark ? '#17212B' : '#ffffff')

    style.setProperty('--chat-hover-bg', dark ? '#202B36' : '#f1f1f1')
    style.setProperty('--chat-pressed-bg', dark ? '#25313D' : '#e5e5e5')
    style.setProperty('--chat-counter-bg', dark ? '#3E546A' : '#bbbbbb')

    style.setProperty('--chat-active-bg', dark ? '#2B5278' : '#419fd9')
    style.setProperty('--chat-active-hover-bg', dark ? '#2B5278' : '#419fd9')
    style.setProperty('--chat-active-pressed-bg', dark ? '#315A80' : '#2095d0')

    style.setProperty('--chat-title', dark ? '#FFFFFF' : 'black')
    style.setProperty('--chat-title-weight', dark ? '100' : null)
    style.setProperty('--chat-filter', dark ? 'invert(0)' : 'invert(1)')

    style.setProperty('--header-search', dark ? '#242F3D' : '#f1f1f1')
}
