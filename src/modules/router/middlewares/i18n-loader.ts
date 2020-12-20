import { Router, Middleware, State } from 'router5';
import { loadNamespaces } from '@/modules/i18n/_utils';
import { getRoute, getActivatedRoutes } from '../_utils';

export const i18nLoader = (router: Router): Middleware => (
  toState: State,
  fromState: State,
): Promise<any> => {
  const { routes, i18n } = router.getDependencies();
  const activatedRoutes = getActivatedRoutes(toState, fromState, routes);

  if (activatedRoutes.length === 0) {
    return Promise.resolve();
  }

  const namespaces = activatedRoutes
    .map((route): string[] => route.translations || [])
    .reduce((a, b): string[] => a.concat(b));

  return new Promise((resolve, reject) => {
    loadNamespaces({
      namespaces,
      locale: i18n.locale,
      instance: i18n.instance,
    })
      .then(res => {
        if (__SERVER__) {
          const route = getRoute(toState.name, routes);
          Object.assign(route, { i18nResources: res });
        }
        resolve(res);
      })
      .catch(reject);
  });
};
