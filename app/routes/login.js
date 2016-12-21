import Ember from 'ember';

export default Ember.Route.extend({
  location: Ember.inject.service(),
  model(){
    return {
      email:'',
      password: '',
      error: ''
    };
  },
  actions: {
    signIn: function() {
      var self = this;
      this.get('session').open('firebase', {
        provider: 'password',
        email: this.controller.get('model.email'),
        password: this.controller.get('model.password')
      }).then(function(data) {
        var attemptedTransition = self.get('location.attemptedTransition');
        if(attemptedTransition){
          self.set('location.attemptedTransition',null);
          self.transitionTo(attemptedTransition);
        }else{
          self.transitionTo('index');
        }
      }).catch((reason)=>{
        console.log(reason);
        if(reason.code === "auth/user-not-found"){
          this.controller.set('model.error',reason.message);
        }
      });
    }
  }
});
