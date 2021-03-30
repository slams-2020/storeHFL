import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | AbstractRoute', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:abstract-route');
    assert.ok(route);
  });
});
