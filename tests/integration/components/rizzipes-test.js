import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-quickstart/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | rizzipes', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Rizzipes />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <Rizzipes>
        template block text
      </Rizzipes>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
