import BrewsShowRoute from 'app/routes/brews/show';

var route, store;

module('Unit - BrewsShowRoute', {
  setup: function(){
    store = {};

    route = BrewsShowRoute.create({
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
