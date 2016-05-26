import { decorator, increment, decrement, add } from './store'

@decorator({ increment, decrement, add })
export default class {

  constructor(store, { increment, decrement, add }) {
    this.store = store
    this.increment = increment
    this.decrement = decrement
    this.add = add
    this.sync()
    store.subscribe(this.sync)
  }

  sync = () => {
    this.counter = this.store.getState().counter
  }
}
