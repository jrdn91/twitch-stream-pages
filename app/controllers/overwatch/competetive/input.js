import Ember from 'ember';

export default Ember.Controller.extend({
  startingSRObserverFired: 0,
  startingSRObserver: Ember.observer('model.{startingSR}', function() {
    console.log('beep');
    this.incrementProperty('startingSRObserverFired');
    if(this.get('startingSRObserverFired') > 1){
      this.set('model.currentSR',this.get('model.startingSR'));
    }
  }),
});
