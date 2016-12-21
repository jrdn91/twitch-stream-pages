import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    signOut: function() {
      this.get('session').close();
      this.transitionTo('login');
    }
  }
});
