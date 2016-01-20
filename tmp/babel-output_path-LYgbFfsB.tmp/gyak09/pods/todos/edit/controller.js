import Ember from 'ember';

export default Ember.Controller.extend({
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