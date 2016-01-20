define('gyak09/pods/todo/model', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  var TodoModel = DS['default'].Model.extend({
    date: DS['default'].attr('string'),
    description: DS['default'].attr('string'),
    status: DS['default'].attr('string'),
    steps: DS['default'].hasMany('step', { async: true })
  });

  exports['default'] = TodoModel;

});