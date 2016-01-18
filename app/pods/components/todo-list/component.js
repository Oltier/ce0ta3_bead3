import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        deleteTodo(todo) {
            //console.log(todo);
            todo.deleteRecord();
            todo.save();
        }
    }
});
