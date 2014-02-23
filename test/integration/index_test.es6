var App;

module('Integration - Index', {
  setup: function(){
    App = startApp();
  },
  teardown: function(){
    Ember.run(App, 'destroy');
  }
});

test('Visiting index', function() {
  visit('/').then(function(){
    equal(find('header h1').text().trim(), "Broue.io", "displays header" )
  });
});
