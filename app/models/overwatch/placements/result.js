import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  win_state: DS.attr('number'),
  timestamp: DS.attr('number',{
    defaultValue(){
      return Date.now();
    }
  }),

  winStateClass: Ember.computed('win_state',function(){
    if(this.get('win_state') === 1){
      return 'win';
    }else if(this.get('win_state') === 2){
      return 'loss';
    }
  })
});
