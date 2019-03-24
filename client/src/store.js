import { createStore, applyMiddleware } from 'redux'
import asyncReducer from './reducers'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const store = createStore(asyncReducer, applyMiddleware(thunk, logger))

export default store
