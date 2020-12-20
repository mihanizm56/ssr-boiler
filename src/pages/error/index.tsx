import * as React from 'react';
import { RouteNode } from '@/modules/router/_components/route-node';
import { Page } from './page';

const pageNode = 'error';

const action = async ({ i18n }) => ({
  title: i18n.instance.t('error.title'),
  content: <RouteNode nodeName={pageNode}>{() => <Page />}</RouteNode>,
});

export default action;
