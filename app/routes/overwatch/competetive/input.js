import Ember from 'ember';
import AuthenticatedRouteMixin from 'stream-pages/mixins/authenticated-route';

export default Ember.Route.extend(AuthenticatedRouteMixin,{
  model() {
    return this.store.findRecord('overwatch/competetive/stat', 1);
  },
  saveRecord: function(){
    this.controller.get('model').save();
    this.controller.set('startingSRObserverFired',0);
  },
  actions: {
    keyUp(){
      Ember.run.debounce(this, this.saveRecord, 1000);
    }
  }
});
