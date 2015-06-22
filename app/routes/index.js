import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    select: function(item) {
      this.render('item-detail', {
        into: 'index',
        controller: 'item-detail',
        model: item,
        outlet: 'detail'
      });
    }
  },

  model: function(params) {
    this.store.createRecord('item', { name: 'new teletubby' });
    return this.store.findAll('item');
  }
});
