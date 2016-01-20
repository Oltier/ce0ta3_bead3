import Ember from 'ember';

export default Ember.Controller.extend({

    actions: {
        addNew: function() {
            //console.log(this.store);
            var uj = this.store.createRecord('step', {
                description: this.newStepDescription,
                difficulty: this.newStepDifficulty,
            });
            uj.save().then(function() {
                this.model.get('steps').pushObject(uj);
                this.model.save();
                this.newStepDifficulty.set("");
                this.newStepDescription.set("");
            }).catch(function() {});
        },
        delete: function(id) {
            this.store.find('step', id).then(function(e) {
                e.destroyRecord();
            });
        }
    }
});
