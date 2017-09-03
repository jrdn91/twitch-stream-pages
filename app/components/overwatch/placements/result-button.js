import Ember from 'ember';

export default Ember.Component.extend({
  classNames: 'result-button',
  classNameBindings: ['result.winStateClass']
});
