import { getRoute } from '../_utils';
export const getSegmentActionResult = (router) => (name, nodeName = '') => {
    const { routes } = router.getDependencies();
    if (name === nodeName)
        return null;
    const segments = name.split('.');
    const nodeSegments = nodeName.split('.');
    const depth = nodeName === '' ? 1 : nodeSegments.length + 1;
    const segment = segments.slice(0, depth).join('.');
    const route = getRoute(segment, routes);
    return route.actionResult || null;
};
//# sourceMappingURL=get-segment-action-result.js.map