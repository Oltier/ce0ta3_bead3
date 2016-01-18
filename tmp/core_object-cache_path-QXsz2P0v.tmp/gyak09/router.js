define('gyak09/router', ['exports', 'ember', 'gyak09/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {
    this.route('index', { path: '/' });
  });

  exports['default'] = Router;

});