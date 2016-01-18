import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    showModal: function showModal(name, controller, model) {
      this.render(name, {
        into: 'application',
        outlet: 'modal',
        controller: controller,
        model: model
      });
    },
    removeModal: function removeModal() {
      this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'application'
      });
    }
  }
});