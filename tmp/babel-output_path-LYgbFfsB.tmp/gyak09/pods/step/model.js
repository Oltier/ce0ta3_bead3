import DS from 'ember-data';

var stepModel = DS.Model.extend({
    description: DS.attr('string'),
    difficulty: DS.attr('string')
});

export default stepModel;