define('gyak09/pods/todos/view/route', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Route.extend({
        model: function model(params) {
            //console.log(params);
            return this.store.find('todo', params.todo_id);
        }
    });

});