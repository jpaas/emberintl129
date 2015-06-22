import DS from 'ember-data';

var Item = DS.Model.extend({
  createdAt: DS.attr('date'),
  name: DS.attr()
});

Item.reopenClass({
  FIXTURES: [
    { id: 1, name: 'dipsy', createdAt: new Date() },
    { id: 2, name: 'lala', createdAt: new Date() },
    { id: 3, name: 'tinkywinky', createdAt: new Date() },
    { id: 4, name: 'po', createdAt: new Date() }
  ]
});

export default Item;


