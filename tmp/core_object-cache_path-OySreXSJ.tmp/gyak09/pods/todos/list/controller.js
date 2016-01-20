define('gyak09/pods/todos/list/controller', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Controller.extend({
        actions: {
            newTodo: function newTodo(formData) {
                var todo = this.store.createRecord('todo', Object.assign({
                    status: 'new',
                    date: Date.now().toLocaleString(),
                    description: 'Kitakarítani a konyhát!'
                }, formData));
                todo.save();
                $('.modal').modal('hide');
            }
        }
    });

});