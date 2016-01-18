import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newError: function newError(formData) {
            var error = this.store.createRecord('error', Object.assign({
                status: 'new',
                //date: Date.now().toLocaleString(),
                location: 'labor',
                description: 'rossz'
            }, formData));
            error.save();
            $('.modal').modal('hide');
            //this.transitionToRoute('errors.list');
        }
    }
});