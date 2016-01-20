define('gyak09/pods/components/todo-detail/component', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Component.extend({
        steps: Ember['default'].Object.create(),

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

});