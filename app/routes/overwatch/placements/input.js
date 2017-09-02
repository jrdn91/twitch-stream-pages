import Ember from 'ember';
import AuthenticatedRouteMixin from 'stream-pages/mixins/authenticated-route';

export default Ember.Route.extend(AuthenticatedRouteMixin,{
  model() {
    return this.store.findAll('overwatch/placements/result');
  },
  actions: {
    win(){
      let result = this.store.createRecord('overwatch/placements/result');
      result.set('win',true);
      result.save().then(()=>{
        this.toast.success('Result Saved');
      });
    },
    loss(){
      let result = this.store.createRecord('overwatch/placements/result');
      result.set('win',false);
      result.save().then(()=>{
        this.toast.success('Result Saved');
      });
    },
    remove(result){
      result.destroyRecord();
    }
  }
});
