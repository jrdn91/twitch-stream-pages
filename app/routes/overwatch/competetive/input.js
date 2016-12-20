import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findRecord('overwatch/competetive/stat', 1);
  },
  saveRecord: function(){
    this.controller.get('model').save();
  },
  actions: {
    keyUp(){
      Ember.run.debounce(this, this.saveRecord, 1000);
    }
  }
});
