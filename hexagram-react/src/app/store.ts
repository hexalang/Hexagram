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

import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

interface TelegramState {
	demo: true
}

const initialState: TelegramState = {
	demo: true
}

interface DemoAction {
  type: 'DELETE_MESSAGE'
  payload: {
    demo: boolean
  }
}

type ActionTypes = DemoAction

const reducer = (state: TelegramState = initialState, action: ActionTypes): TelegramState => {
	return state
}

const composeEnhancers: typeof compose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

store.dispatch({
  type: 'DELETE_MESSAGE',
  payload: {
    demo: true
  }
})

export default store
