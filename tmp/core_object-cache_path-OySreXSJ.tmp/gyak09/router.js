define('gyak09/router', ['exports', 'ember', 'gyak09/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {
    this.route('index', { path: '/' });

    this.route('todos', function () {
      this.route('list');
      this.route('new');
      this.route('view', { path: '/:todo_id' });
      this.route('edit', { path: '/edit/:todo_id' });
    });
  });

  exports['default'] = Router;

});