import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | section/update', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:section/update');
    assert.ok(route);
  });
});
