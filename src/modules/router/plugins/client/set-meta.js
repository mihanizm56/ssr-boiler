import { updateMeta, updateLink, updateCustomMeta } from '@/_utils/dom';
export const setMeta = (router, { getRouteActionResult, i18n }) => ({
    onTransitionSuccess: (toState) => {
        const routeActionResult = getRouteActionResult(toState.name);
        const title = routeActionResult.title ||
            (i18n && i18n.instance && i18n.instance.t('common:siteTitle')) ||
            'Wildberries';
        document.title = title;
        updateCustomMeta('og:image', routeActionResult.ogImage);
        updateCustomMeta('og:url', routeActionResult.ogUrl);
        updateCustomMeta('og:description', routeActionResult.ogDescription);
        updateCustomMeta('og:title', title);
        updateLink('canonical', routeActionResult.canonical);
        updateMeta('keywords', routeActionResult.keywords);
        updateMeta('description', routeActionResult.description);
    },
});
//# sourceMappingURL=set-meta.js.map