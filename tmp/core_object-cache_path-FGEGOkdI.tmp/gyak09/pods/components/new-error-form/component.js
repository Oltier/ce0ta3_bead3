define('gyak09/pods/components/new-error-form/component', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Component.extend({
        errors: Ember['default'].Object.create(),

        actions: {
            submit: function submit() {
                if (!this.validate()) {
                    return;
                }

                this.get('onSave')({
                    location: this.$('#helyszin').val(),
                    description: this.$('#leiras').val()
                });
            }
        },

        validate: function validate() {
            var location = this.$('#helyszin').val();
            var description = this.$('#leiras').val();

            this.set('errors.location', location === '' ? 'Név kötelező' : '');
            this.set('errors.description', description === '' ? 'Leírás kötelező' : '');

            return this.get('errors.location') === '' && this.get('errors.description') === '';
        }
    });

});