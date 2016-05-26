import { combineReducers } from 'redux'

// constants
const ADD_TODO = 'todo/ADD_TODO'
const TOGGLE_TODO = 'todo/TOGGLE_TODO'

// actions
let nextTodoId = 0

export const addTodo = text =>
  ({ type: ADD_TODO, id: nextTodoId++, text })

export const toggleTodo = id =>
  ({ type: TOGGLE_TODO, id })

// reducers
const todo = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case TOGGLE_TODO:
      if (state.id !== action.id)
        return state

      return { ...state, completed: !state.completed }

    default:
      return state
  }
}

export const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, todo(undefined, action)]
    case TOGGLE_TODO:
      return state.map(t => todo(t, action))
    default:
      return state
  }
}
