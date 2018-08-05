import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  startingSR: DS.attr('number'),
  currentSR: DS.attr('number'),
  gamesWon: DS.attr('number'),
  gamesLost: DS.attr('number'),
  srSpread: Ember.computed('startingSR', 'currentSR', function() {
    const diff = this.get('currentSR') - this.get('startingSR');
    return diff > 0 ? `+${diff}` : `-${diff}`;
  }),

  rankClass: Ember.computed('currentSR',function(){
    var sr = this.get('currentSR');
    if(sr >= 0 && sr <= 1499){
      return 'bronze';
    }else if(sr >= 1500 && sr <= 1999){
      return 'silver';
    }else if(sr >= 2000 && sr <= 2499){
      return 'gold';
    }else if(sr >= 2500 && sr <= 2999){
      return 'platinum';
    }else if(sr >= 3000 && sr <= 3499){
      return 'diamond';
    }else if(sr >= 3500 && sr <= 3999){
      return 'master';
    }else if(sr >= 4000 && sr <= 5000){
      return 'grand-master';
    }
  }),
});
