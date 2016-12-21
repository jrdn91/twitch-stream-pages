import Ember from 'ember';

export default Ember.Mixin.create({
  location: Ember.inject.service(),
  beforeModel: function(transition) {
    var self = this;
    this.get('session').fetch().catch(function() {
      self.set('location.attemptedTransition',transition);
      self.transitionTo('login');
    });
  },
});
