import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | catalogue', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:catalogue');
    assert.ok(route);
  });
});
