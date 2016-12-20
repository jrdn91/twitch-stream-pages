import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    var self = this;
    this.get('session').fetch().catch(function() {
      self.transitionTo('login');
    });
  },
  actions: {
    signOut: function() {
      this.get('session').close();
      this.transitionTo('login');
    }
  }
});
