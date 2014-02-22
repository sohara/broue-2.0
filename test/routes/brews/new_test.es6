import BrewsNewRoute from 'app/routes/brews/new';

var route, store;

module('Unit - BrewsNewRoute', {
  setup: function(){
    store = {};

    route = BrewsNewRoute.create({
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
