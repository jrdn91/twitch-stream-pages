import Ember from 'ember';
import AuthenticatedRouteMixin from 'stream-pages/mixins/authenticated-route';

export default Ember.Route.extend(AuthenticatedRouteMixin,{
  model() {
    return this.store.findAll('overwatch/placements/result');
  },
  reset(){
    this.controller.get('model').forEach((record)=>{
      record.set('win_state',0);
      record.save();
    });
    // for(var i = 1; i < 11; i++){
    //   let result = this.store.createRecord('overwatch/placements/result');
    // }
  },
  actions: {
    reset(){
      // make 10 empty objects
      this.reset();
    },
    saveState(data){
      data.result.set('win_state',data.state);
      data.result.save().then(()=>{
        this.toast.success('Result Saved');
      });
    }
  }
});
