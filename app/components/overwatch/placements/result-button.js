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
    },
    selectWinState(state){
      this.set('showButtons',false);
      this.sendAction('winStateSelected',{result:this.get('result'),state:state});
    }
  }
});
