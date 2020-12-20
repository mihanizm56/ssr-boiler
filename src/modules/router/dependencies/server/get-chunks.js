import { getRoute } from '../../_utils';
export const getChunks = (router) => (name) => {
    const { routes } = router.getDependencies();
    const segments = name.split('.');
    const path = [];
    return segments.reduce((acc, segment) => {
        path.push(segment);
        const route = getRoute(path.join('.'), routes);
        return [...acc, ...(route.chunks || [])];
    }, []);
};
//# sourceMappingURL=get-chunks.js.map