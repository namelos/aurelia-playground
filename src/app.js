export class App {
  configureRouter(config, router){
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'home'], name: 'home', moduleId: './home', nav: true, title:'home' },
      { route: 'module', name: 'module', moduleId: './module', nav: true, title:'module' },
      { route: 'decorator', name: 'decorator', moduleId: './decorator/index', nav: true, title:'decorator' },
      { route: 'counter', name: 'counter', moduleId: './counter/index', nav: true, title:'counter' },
      { route: 'event', name: 'event', moduleId: './event', nav: true, title:'event' }
    ]);

    this.router = router;
  }
}

// import { inject } from 'aurelia-framework'
// import { EventAggregator } from 'aurelia-event-aggregator'
//
// @inject(EventAggregator)
// export default class {
//   age = 24
//
//   constructor(ea) {
//     this.ea = ea
//     this.ea.subscribe('grow', _ => this.age += 1)
//   }
//
//   grow = _ =>
//     this.ea.publish('grow')
//
//   submit = p =>
//     console.log(p)
// }
