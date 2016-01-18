define('gyak09/pods/components/error-list/component', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Component.extend({
        actions: {
            deleteError: function deleteError(error) {
                //console.log(error);
                error.deleteRecord();
                error.save();
            }
        }
    });

});