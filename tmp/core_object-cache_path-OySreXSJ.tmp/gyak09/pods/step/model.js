define('gyak09/pods/step/model', ['exports', 'ember-data'], function (exports, DS) {

    'use strict';

    var stepModel = DS['default'].Model.extend({
        description: DS['default'].attr('string'),
        difficulty: DS['default'].attr('string')
    });

    exports['default'] = stepModel;

});