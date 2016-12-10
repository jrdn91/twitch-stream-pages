import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    this.store.push({
      data: [{
        id: 1,
        type: 'overwatch/competetive/stat',
        attributes: {
          startingSR: 2301,
        }
      }]
    });
    return this.store.findRecord('overwatch/competetive/stat', 1);
  }
});
