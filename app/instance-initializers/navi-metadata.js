import Route from '@ember/routing/route';

export function initialize(appInstance) {
  const metadataService = appInstance.lookup('service:bardMetadata');
  const userService = appInstance.lookup('service:user');

  if(!appInstance.factoryFor('route:application')) {
    appInstance.register('route:application', Route.extend({}));
  }

  const applicationRoute = appInstance.factoryFor('route:application').class;

  applicationRoute.reopen({
    model() {
      const metadata = metadataService.loadMetadata();
      const user = userService.findOrRegister();
      const model = this._super(...arguments);
      return metadata
        .then(() => user)
        .then(() => model);
    }
  })
}

export default {
  initialize,
  after: 'ember-data'
};
