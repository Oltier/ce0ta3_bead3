define('gyak09/pods/components/todo-list/component', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Component.extend({
        actions: {
            deleteTodo: function deleteTodo(todo) {
                //console.log(todo);
                todo.deleteRecord();
                todo.save();
            }
        }
    });

});