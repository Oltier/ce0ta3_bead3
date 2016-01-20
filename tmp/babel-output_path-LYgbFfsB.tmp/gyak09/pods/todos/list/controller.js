import Ember from 'ember';

export default Ember.Controller.extend({
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