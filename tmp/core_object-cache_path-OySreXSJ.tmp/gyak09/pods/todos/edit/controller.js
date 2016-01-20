define('gyak09/pods/todos/edit/controller', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Controller.extend({
        actions: {
            modifyTodo: function modifyTodo(formData) {
                var _this = this;

                //console.log(formData);
                var todo = this.get('model');
                //console.log(todo);
                todo.setProperties(formData);
                return todo.save().then(function () {
                    _this.transitionToRoute('todos.list');
                });
            }
        }
    });

});