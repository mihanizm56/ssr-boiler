import { getRoute } from '../../_utils';
export const getI18nResources = (router) => (name) => {
    const { routes } = router.getDependencies();
    const route = getRoute(name, routes);
    return route.i18nResources || null;
};
//# sourceMappingURL=get-i18n-resources.js.map