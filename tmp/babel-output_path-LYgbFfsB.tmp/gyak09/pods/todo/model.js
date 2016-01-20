import DS from 'ember-data';

var TodoModel = DS.Model.extend({
  date: DS.attr('string'),
  description: DS.attr('string'),
  status: DS.attr('string'),
  steps: DS.hasMany('step', { async: true })
});

export default TodoModel;