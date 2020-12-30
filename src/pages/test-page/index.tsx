import React from 'react';
import { ReduxStoreLoader } from '@wildberries/redux-core-modules';
import { RouteNode } from '@/modules/router/_components/route-node';
import { Page } from './page';
import { storeInjectConfig } from './store-inject-config';

const pageNode = 'test-page';

const action = async ({ fromState, toState }) => ({
  title: 'test-page.title',
  storeInjectConfig,
  content: (
    <ReduxStoreLoader
      fromState={fromState}
      storeInjectConfig={storeInjectConfig}
      toState={toState}
    >
      <RouteNode nodeName={pageNode}>{() => <Page />}</RouteNode>
    </ReduxStoreLoader>
  ),
});

export default action;
