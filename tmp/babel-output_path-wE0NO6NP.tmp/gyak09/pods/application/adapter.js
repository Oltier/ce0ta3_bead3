import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    host: 'https://rest-api-oltier.c9users.io',
    namespace: ''
});