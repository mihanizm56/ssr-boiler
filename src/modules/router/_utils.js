import { transitionPath } from 'router5';
import { startsWithSegment } from 'router5-helpers';
export const getRoute = (segment, routes) => {
    for (let i = 0; i < routes.length; i += 1) {
        const route = routes[i];
        if (route.name === segment) {
            return route;
        }
        if (startsWithSegment(segment, route.name) && route.children) {
            const splitSegment = segment.split('.');
            splitSegment.shift();
            if (splitSegment.length > 0) {
                return getRoute(splitSegment.join('.'), route.children);
            }
        }
    }
    throw new Error('route not found');
};
export const getActivatedRoutes = (toState, fromState, routes) => {
    const { toActivate } = transitionPath(toState, fromState);
    if (!toActivate.includes(toState.name)) {
        toActivate.push(toState.name);
    }
    return toActivate.map((segment) => getRoute(segment, routes));
};
export const cloneRoutes = (routes) => routes.map((route) => {
    const newRoute = { ...route };
    if (route.children && route.children.length > 0) {
        newRoute.children = cloneRoutes(route.children);
    }
    return newRoute;
});
//# sourceMappingURL=_utils.js.map