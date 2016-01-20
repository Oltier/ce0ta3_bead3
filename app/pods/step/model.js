import DS from 'ember-data';

const stepModel = DS.Model.extend({
    description: DS.attr('string'),
    difficulty: DS.attr('string'),
});

export default stepModel;