define('gyak09/pods/components/modal-dialog/component', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Component.extend({
    actions: {
      ok: function ok() {
        this.$('.modal').modal('hide');
        this.sendAction('ok');
      }
    },
    show: (function () {
      this.$('.modal').modal().on('hidden.bs.modal', (function () {
        this.sendAction('close');
      }).bind(this));
    }).on('didInsertElement')
  });

});