import Ember from 'ember';

export default Ember.Mixin.create({
  beforeModel: function() {
    var self = this;
    this.get('session').fetch().catch(function() {
      self.transitionTo('login');
    });
  },
});
