import createRouter, { Router } from 'router5';
import loggerPlugin from 'router5-plugin-logger';
import browserPlugin from 'router5-plugin-browser';
import allRoutes from '@/pages/routes';
import { actionHandler } from './middlewares/action-handler';
import { i18nLoader } from './middlewares/i18n-loader';
import { getSegmentActionResult } from './dependencies/get-segment-action-result';
import { getRouteActionResult } from './dependencies/get-route-action-result';
import { cloneRoutes } from './_utils';
import { IAdvancedRoute } from './_types';

export const configureRouter = (): Router => {
  const routes = cloneRoutes(allRoutes as IAdvancedRoute[]);

  const router = createRouter(routes, {
    defaultParams: {},
    allowNotFound: true,
    caseSensitive: true,
    queryParamsMode: 'loose',
    strongMatching: true,
  });

  // Dependencies
  router.setDependencies({
    routerId: +new Date(),
    routes,
    getSegmentActionResult: getSegmentActionResult(router),
    getRouteActionResult: getRouteActionResult(router),
  });

  // Plugins
  router.usePlugin(browserPlugin());
  if (__DEV__ && __CLIENT__) {
    router.usePlugin(loggerPlugin);
  }

  // Middlewares
  router.useMiddleware(i18nLoader);
  router.useMiddleware(actionHandler);

  return router;
};
