import Ember from 'ember';

export default Ember.Component.extend({
  classNames: 'result-button',
  classNameBindings: ['result.winStateClass'],

  actions: {
    clickAction(){
      this.set('showButtons',true);
      Ember.run.later(()=>{
        this.set('showButtons',false);
      },5000);
    }
  }
});
