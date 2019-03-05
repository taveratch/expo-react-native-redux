import { createStore, applyMiddleware } from 'redux'
import appReducer from '../reducers'
import thunk from 'redux-thunk'

export const store = () => {
  return createStore(appReducer, applyMiddleware(thunk))
}