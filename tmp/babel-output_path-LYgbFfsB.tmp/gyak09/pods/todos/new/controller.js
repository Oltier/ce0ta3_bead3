import Ember from 'ember';

export default Ember.Controller.extend({
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