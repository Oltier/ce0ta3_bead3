define('gyak09/pods/errors/list/controller', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Controller.extend({
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

});