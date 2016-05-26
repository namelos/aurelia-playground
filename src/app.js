export class App {
  configureRouter(config, router){
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'home'], name: 'home', moduleId: './home', nav: true, title:'home' },
      { route: 'module', name: 'module', moduleId: './module', nav: true, title:'module' },
      { route: 'decorator', name: 'decorator', moduleId: './decorator', nav: true, title:'decorator' },
      { route: 'todo', name: 'todo', moduleId: './todo', nav: true, title:'todo' }
    ]);

    this.router = router;
  }
}