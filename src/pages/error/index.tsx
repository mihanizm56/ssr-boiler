import React from 'react';
import { RouteNode } from '@wildberries/service-router';
import { Page } from './page';

const pageNode = 'error';

const action = async () => ({
  title: 'error.title',
  Content: () => <RouteNode nodeName={pageNode}>{() => <Page />}</RouteNode>,
});

export default action;
