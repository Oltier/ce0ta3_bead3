import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newError: function newError(formData) {
            console.log(formData);
            // formData.status = 'new';
            // formData.date = Date.now().toLocaleString();
            this.store.createRecord('error', Object.assign({
                status: 'new',
                date: Date.now().toLocaleString(),
                location: 'labor',
                description: 'rossz'
            }, formData));
            this.transitionToRoute('errors.list');
        }
    }
});