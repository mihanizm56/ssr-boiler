import * as React from 'react';
import { RouteNode as Router5RouteNode } from 'react-router5';
/**
 * Wrapped RouteNode from router5
 */
export const RouteNode = ({ nodeName, children }) => (React.createElement(Router5RouteNode, { key: nodeName, nodeName: nodeName }, ({ router, route }) => {
    // В IOS при закрытии Safari с вкладкой сайта и последующем переоткрытии
    // в route на клиенте сначала приходит undefined
    if (!route) {
        return null;
    }
    const DI = router.getDependencies();
    const actionResult = DI.getSegmentActionResult(route.name, nodeName);
    return children({
        router,
        route,
        content: actionResult && actionResult.content,
    });
}));
//# sourceMappingURL=route-node.js.map