import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        deleteError: function deleteError(error) {
            //console.log(error);
            error.deleteRecord();
            error.save();
        }
    }
});