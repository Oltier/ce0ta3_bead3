import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        modifyError: function modifyError(formData) {
            var _this = this;

            // console.log(formData);
            var error = this.get('model');
            console.log(error);
            error.setProperties(formData);
            return error.save().then(function () {
                _this.transitionToRoute('errors.list');
            });
        }
    }
});