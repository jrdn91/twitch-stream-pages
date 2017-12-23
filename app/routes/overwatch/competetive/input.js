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
    startingSRFocus(){
      const input = document.getElementById("starting-sr");
      input.setSelectionRange(0, input.value.length);
    },
    currentSRFocus(){
      const input = document.getElementById("current-sr");
      input.setSelectionRange(0, input.value.length);
    },
    keyUp(){
      Ember.run.debounce(this, this.saveRecord, 1000);
    },
    gameLoss(){
      this.controller.get('model').incrementProperty('gamesLost');
      Ember.run.scheduleOnce('sync',()=>{
        this.saveRecord();
      });
    },
    gameWin(){
      this.controller.get('model').incrementProperty('gamesWon');
      Ember.run.scheduleOnce('sync',()=>{
        this.saveRecord();
      });
    },
    resetGames(){
      this.controller.get('model').setProperties({
        gamesLost: 0,
        gamesWon: 0
      });
      Ember.run.scheduleOnce('sync',()=>{
        this.saveRecord();
      });
    }
  }
});
