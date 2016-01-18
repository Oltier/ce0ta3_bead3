import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        submit: function submit() {
            this.get('onSave')({
                location: this.$('#helyszin').val(),
                description: this.$('#leiras').val()
            });
        }
    }
});