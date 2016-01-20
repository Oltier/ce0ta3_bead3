define('gyak09/pods/todos/view/controller', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Controller.extend({

        actions: {
            addNew: function addNew() {
                //console.log(this.store);
                var uj = this.store.createRecord('step', {
                    description: this.newStepDescription,
                    difficulty: this.newStepDifficulty
                });
                uj.save().then(function () {
                    this.model.get('steps').pushObject(uj);
                    this.model.save();
                    this.newStepDifficulty.set("");
                    this.newStepDescription.set("");
                })['catch'](function () {});
            },
            'delete': function _delete(id) {
                this.store.find('step', id).then(function (e) {
                    e.destroyRecord();
                });
            }
        }
    });

});