import Application from '@ember/application';

import { initialize } from 'goodbricks/instance-initializers/navi-metadata';
import { module, test } from 'qunit';
import { run } from '@ember/runloop';

module('Unit | Instance Initializer | navi-metadata', function(hooks) {
  hooks.beforeEach(function() {
    this.TestApplication = Application.extend();
    this.TestApplication.instanceInitializer({
      name: 'initializer under test',
      initialize
    });
    this.application = this.TestApplication.create({ autoboot: false });
    this.instance = this.application.buildInstance();
  });
  hooks.afterEach(function() {
    run(this.instance, 'destroy');
    run(this.application, 'destroy');
  });

  // Replace this with your real tests.
  test('it works', async function(assert) {
    await this.instance.boot();

    assert.ok(true);
  });
});
