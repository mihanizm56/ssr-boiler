import { Middleware, Router } from 'router5';
import { runInjectorConfig } from '@wildberries/redux-core-modules';
import { getActivatedRoutes } from '../_utils';
import { IAdvancedRoute } from '../_types';

export const SSRReduxPrefetchMiddleware = (
  router: Router,
): Middleware => async (toState, fromState) => {
  const { routes, store } = router.getDependencies();

  const activatedRoutes = getActivatedRoutes(toState, fromState, routes);

  await Promise.all(
    await activatedRoutes.map(async (routeData: IAdvancedRoute) => {
        const storeInjectConfig = routeData?.actionResult?.storeInjectConfig; // eslint-disable-line

      if (storeInjectConfig && store) {
        runInjectorConfig({ store, storeInjectConfig });
      }
    }),
  );
};
