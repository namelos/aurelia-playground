import { inject } from 'aurelia-framework'
import { EventAggregator } from 'aurelia-event-aggregator'

const createModel = (initialState, handler) => {
  return class {
    static inject() {
      return [EventAggregator]
    }

    constructor(ea) {
      this.ea = ea
      this.state = initialState

      Object.keys(handler).map(key => {
        this[key] = () => this.ea.publish(key)

        this.ea.subscribe(key, () => {
          const callback = handler[key]

          if(callback)
            this.state = callback(this.state)

          // this.state = handler[key](this.state)
        })
      })
    }

    reset() {
      this.state = initialState
    }
  }
}

const Counter = createModel(0, {
  increment: state => state + 1,
  decrement: state => state - 1
})

const BigCounter = createModel(0, {
  increment: state => state + 100,
})

const test = createModel(0, {
})

// @inject(EventAggregator)
// class Counter {
//   constructor(ea) {
//     this.state = counterInitialState
//     this.ea = ea
//
//     Object.keys(counterHandler).map(handlerName => {
//       this[handlerName] = () => this.ea.publish(handlerName)
//
//       this.ea.subscribe(handlerName, () =>
//           this.state = counterHandler[handlerName](this.state)
//       )
//     })
//   }
// }

@inject(Counter, BigCounter)
export default class {
  constructor(counter, bigCoutner) {
    this.counter = counter
    this.bigCounter = bigCoutner
  }
}

// @inject(EventAggregator)
// class Model {
//   constructor(ea) {
//     this.state = { counter: 0 }
//     this.ea = ea
//     this.ea.subscribe('increment', () => this.state.counter += 1)
//     this.ea.subscribe('decrement', () => this.state.counter -= 1)
//     this.ea.subscribe('add', n => this.state.counter += n)
//   }
//
//   increment = () =>
//     this.ea.publish('increment')
//
//   decrement = () =>
//     this.ea.publish('decrement')
//
//   add = n => () =>
//     this.ea.publish('add', n)
// }
//
// @inject(Model)
// export default class {
//   constructor({ state, increment, decrement, add }) {
//     this.state = state
//     this.increment = increment
//     this.decrement = decrement
//     this.add = add(10)
//   }
// }
