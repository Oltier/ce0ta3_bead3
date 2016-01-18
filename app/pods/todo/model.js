import DS from 'ember-data';

const ErrorModel = DS.Model.extend({
  date: DS.attr('string'),
  description: DS.attr('string'),
  status: DS.attr('string'),
});

ErrorModel.reopenClass({
    FIXTURES: [
        {
            id: 1,
            date: '2021.12.12',
            description: 'Kitakarítani a konyhát!',
            status: 'new',
        },    
        {
            id: 2,
            date: '2012.12.12',
            description: 'Vajat venni!',
            status: 'done',
        },    
        {
            id: 3,
            date: '2015.12.12',
            description: 'Megetetni a cicát!',
            status: 'overdue',
        },    
    ]
});

export default ErrorModel;