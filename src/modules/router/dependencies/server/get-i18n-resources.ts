import { Router } from 'router5';
import { getRoute } from '../../_utils';

export const getI18nResources = (
  router: Router,
): ((name: string) => Record<string, any>) => (
  name: string,
): Record<string, any> => {
  const { routes } = router.getDependencies();
  const route = getRoute(name, routes);
  return route.i18nResources || null;
};
