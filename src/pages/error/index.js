import * as React from 'react';
import { RouteNode } from '@/modules/router/_components/route-node';
import { Page } from './page';
const pageNode = 'error';
const action = async ({ i18n }) => ({
    title: i18n.instance.t('error.title'),
    content: React.createElement(RouteNode, { nodeName: pageNode }, () => React.createElement(Page, null)),
});
export default action;
//# sourceMappingURL=index.js.map