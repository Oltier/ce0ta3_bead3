import Ember from 'ember';

export default Ember.Route.extend({
    model: function model(params) {
        //console.log(params);
        return this.store.find('todo', params.todo_id);
    }
});