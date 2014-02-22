import BrewsIndexRoute from 'app/routes/brews/index';

var route, store;

module('Unit - BrewsIndexRoute', {
  setup: function(){
    store = {};

    route = BrewsIndexRoute.create({
      store: store
    });
  },
  teardown: function(){
    Ember.run(route, 'destroy');
  }
});

test('it exist', function(){
  expect(2);

  ok(route);
  ok(route instanceof Ember.Route);
});
