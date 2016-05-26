import {
  compose, applyMiddleware,
  createStore, combineReducers
} from 'redux'

import thunk from 'redux-thunk'
import logger from 'redux-logger'

import { createDecroator, createModule } from 'redux-aurelia'

import counter from './counter'
export { increment, decrement, add } from './counter'
import { todos } from './todo'
export { addTodo, toggleTodo }  from './todo'

const reducer = combineReducers({ counter, todos })

export const store = compose(
  applyMiddleware(thunk, logger())
)(createStore)(reducer)

export const decorator = createDecroator(store)
export const module = createModule(store)