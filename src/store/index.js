import {
  compose, applyMiddleware,
  createStore, combineReducers
} from 'redux'

import thunk from 'redux-thunk'
import logger from 'redux-logger'

import { createDecroator } from '../createDecorator'
import { createModule } from '../createModule'

import counter from './counter'
export { increment, decrement, add } from './counter'

const reducer = combineReducers({ counter })

export const store = compose(
  applyMiddleware(thunk, logger())
)(createStore)(reducer)

export const decorator = createDecroator(store)
export const module = createModule(store)

