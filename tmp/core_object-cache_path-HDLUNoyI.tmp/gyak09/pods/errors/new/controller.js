define('gyak09/pods/errors/new/controller', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Controller.extend({
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

});