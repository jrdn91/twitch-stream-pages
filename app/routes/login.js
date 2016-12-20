import Ember from 'ember';

export default Ember.Route.extend({
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
        self.transitionTo('index');
      }).catch((reason)=>{
        console.log(reason);
        if(reason.code === "auth/user-not-found"){
          this.controller.set('model.error',reason.message);
        }
      });
    }
  }
});
