import { getRoute } from '../_utils';
export const getRouteActionResult = (router) => (name) => {
    const { routes } = router.getDependencies();
    const route = getRoute(name, routes);
    return route.actionResult || null;
};
//# sourceMappingURL=get-route-action-result.js.map