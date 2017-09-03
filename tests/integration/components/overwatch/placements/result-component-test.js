import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('overwatch/placements/result-component', 'Integration | Component | overwatch/placements/result component', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{overwatch/placements/result-component}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#overwatch/placements/result-component}}
      template block text
    {{/overwatch/placements/result-component}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
