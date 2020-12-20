import * as React from 'react';
import { RouteNode } from '@/modules/router/_components/route-node';
import { MainLayout } from '@/layouts/main-layout';
import { Page } from './page';
const pageNode = 'home';
const action = async ({ i18n }) => ({
    title: i18n.instance.t('home:title'),
    content: (React.createElement(MainLayout, null,
        React.createElement(RouteNode, { nodeName: pageNode }, ({ route, content }) => {
            if (route.name === pageNode) {
                return React.createElement(Page, null);
            }
            return content;
        }))),
});
export default action;
//# sourceMappingURL=index.js.map