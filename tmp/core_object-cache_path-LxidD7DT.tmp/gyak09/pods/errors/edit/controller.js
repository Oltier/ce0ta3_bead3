define('gyak09/pods/errors/edit/controller', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Controller.extend({
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

});