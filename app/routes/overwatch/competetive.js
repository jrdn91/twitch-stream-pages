import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      startingSR: 2301,
      currentSR: 2500,
      gamesWon: 10,
      gamesLost: 4
    };
  }
});
