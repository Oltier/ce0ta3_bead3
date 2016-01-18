define('gyak09/pods/components/new-error-form/component', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Component.extend({
        actions: {
            submit: function submit() {
                this.get('onSave')({
                    location: this.$('#helyszin').val(),
                    description: this.$('#leiras').val()
                });
            }
        }
    });

});