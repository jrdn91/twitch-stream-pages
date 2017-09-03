import Ember from 'ember';

export default Ember.Controller.extend({
  pointsSort: ['timestamp'],
  sortedPoints: Ember.computed.sort('model', 'pointsSort')
});