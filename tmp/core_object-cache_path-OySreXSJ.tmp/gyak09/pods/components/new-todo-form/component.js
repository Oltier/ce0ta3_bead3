define('gyak09/pods/components/new-todo-form/component', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Component.extend({
        todos: Ember['default'].Object.create(),

        actions: {
            submit: function submit() {
                if (!this.validate()) {
                    return;
                }

                this.get('onSave')({
                    date: this.$('#date').val(),
                    status: this.$('input[name=state]:checked', '#myForm').val(),
                    description: this.$('#leiras').val()
                });
            }
        },

        validate: function validate() {
            var date = this.$('#date').val();
            var description = this.$('#leiras').val();

            this.set('todos.date', date === '' ? 'Határidő kötelező' : '');
            this.set('todos.description', description === '' ? 'Leírás kötelező' : '');

            return this.get('todos.date') === '' && this.get('todos.description') === '';
        }
    });

});