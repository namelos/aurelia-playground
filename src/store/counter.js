const INCREMENT = 'counter/INCREMENT'
const DECREMENT = 'counter/DECREMENT'
const ADD = 'counter/ADD'

export default (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    case ADD:
      const n = action.n || 0
      return state + parseInt(n)
    default:
      return state
  }
}

export const increment = () => ({ type: INCREMENT })
export const decrement = () => ({ type: DECREMENT })
export const add = n => ({ type: ADD, n })

