import Ember from 'ember';

export default Ember.Controller.extend({
  points: Ember.computed('model.[]',function(){
    var array = ['','','','','','','','','',''];
    this.get('model').forEach((item,i)=>{
      array[i] = item;
    });
    return array;
  })
});