import Ember from 'ember';

export default Ember.Component.extend({
    todos: Ember.Object.create(),
    
    actions: {
        submit() {
            if (!this.validate()) {
                return;
            }
            
            
            this.get('onSave')({
                date: this.$('#date').val(),
                status: this.$('input[name=state]:checked', '#myForm').val(),
                description: this.$('#leiras').val(),
            });
        }
    },
    
    validate() {
        var date = this.$('#date').val();
        var description = this.$('#leiras').val();
        
        this.set('todos.date', date === '' ? 'Határidő kötelező' : '');
        this.set('todos.description', description === '' ? 'Leírás kötelező' : '');
        
        return this.get('todos.date') === '' &&
               this.get('todos.description') === '';
    }
});
