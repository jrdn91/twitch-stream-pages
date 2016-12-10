import DS from 'ember-data';

export default DS.Model.extend({
  startingSR: DS.attr('number'),
  currentSR: DS.attr('number'),
  gamesWon: DS.attr('number'),
  gamesLost: DS.attr('number')
});
