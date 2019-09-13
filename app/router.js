import EmberRouter from '@ember/routing/router';
import config from './config/environment';
import { reportRoutes, reportCollectionRoutes, reportPrintRoutes } from 'navi-reports/router';
import { dashboardRoutes, dashboardCollectionRoutes, dashboardPrintRoutes } from 'navi-dashboards/router';
import { directoryRoutes } from 'navi-directory/router';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  directoryRoutes(this);
  reportRoutes(this);
  reportCollectionRoutes(this);
  reportPrintRoutes(this);
  dashboardRoutes(this);
  dashboardCollectionRoutes(this);
  dashboardPrintRoutes(this);
});

export default Router;

