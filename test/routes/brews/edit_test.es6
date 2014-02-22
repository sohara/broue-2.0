import BrewsEditRoute from 'app/routes/brews/edit';

var route, store;

module('Unit - BrewsEditRoute', {
  setup: function(){
    store = {};

    route = BrewsEditRoute.create({
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
