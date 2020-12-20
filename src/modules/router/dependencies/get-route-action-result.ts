import { Router } from 'router5';
import { getRoute } from '../_utils';
import { IActionResult } from '../_types';

export const getRouteActionResult = (
  router: Router,
): ((name: string) => IActionResult | null) => (
  name: string,
): IActionResult | null => {
  const { routes } = router.getDependencies();
  const route = getRoute(name, routes);
  return route.actionResult || null;
};
