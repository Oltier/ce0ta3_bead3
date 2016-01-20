import Ember from 'ember';

export default Ember.Component.extend({
    steps: Ember.Object.create(),

    actions: {
        submit: function submit() {
            console.log(this);
            this.get('onSave')({
                description: this.$('#newStepDescription').val(),
                difficulty: this.$('#newStepDifficulty').val()
            });
        },

        'delete': function _delete(step) {
            step.deleteRecord();
            step.save();
        }
    }

});