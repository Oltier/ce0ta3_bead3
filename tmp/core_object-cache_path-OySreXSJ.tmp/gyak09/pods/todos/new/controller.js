define('gyak09/pods/todos/new/controller', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Controller.extend({
        actions: {
            newTodo: function newTodo(formData) {
                console.log(formData);
                // formData.status = 'new';
                // formData.date = Date.now().toLocaleString();
                var todo = this.store.createRecord('todo', Object.assign({
                    status: 'new',
                    date: Date.now().toLocaleString(),
                    description: 'Kitakarítani a konyhát!'
                }, //steps: [],
                formData));
                todo.save();
                this.transitionToRoute('todos.list');
            }
        }
    });

});