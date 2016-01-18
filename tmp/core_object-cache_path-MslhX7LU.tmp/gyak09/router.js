define('gyak09/router', ['exports', 'ember', 'gyak09/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {
    this.route('index', { path: '/' });

    this.route('errors', function () {
      this.route('list');
      this.route('new');
      this.route('view', { path: '/:error_id' });
      this.route('edit', { path: '/edit/:error_id' });
    });
  });

  exports['default'] = Router;

});