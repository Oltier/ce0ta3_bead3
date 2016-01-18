define('gyak09/pods/error/model', ['exports', 'ember-data'], function (exports, DS) {

    'use strict';

    var ErrorModel = DS['default'].Model.extend({
        location: DS['default'].attr('string'),
        description: DS['default'].attr('string'),
        date: DS['default'].attr('date'),
        status: DS['default'].attr('string')
    });

    ErrorModel.reopenClass({
        FIXTURES: [{
            id: 1,
            date: '2021.12.12',
            location: 'pc1',
            description: 'rossz',
            status: 'new'
        }, {
            id: 2,
            date: '2012.12.12',
            location: 'pc2',
            description: 'rossz',
            status: 'assigned'
        }, {
            id: 3,
            date: '2015.12.12',
            location: 'pc9',
            description: 'rossz',
            status: 'success'
        }]
    });

    exports['default'] = ErrorModel;

});