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
