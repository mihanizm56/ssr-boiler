import * as React from 'react';
import { ReduxStoreLoader } from '@wildberries/redux-core-modules';
import { RouteNode } from '@/modules/router/_components/route-node';
import { MainLayout } from '@/layouts/main-layout';
import { Page } from './page';
import { storeInjectConfig } from './store-inject-config';

const pageNode = 'page1';

const action = async ({ i18n, fromState, store, toState }) => {
  return {
    title: i18n.instance.t('page1:title'),
    content: (
      <ReduxStoreLoader
        fromState={fromState}
        storeInjectConfig={storeInjectConfig}
        toState={toState}
      >
        <MainLayout>
          <RouteNode nodeName={pageNode}>
            {({ route, content }) => {
              if (route.name === pageNode) {
                return <Page />;
              }

              return content;
            }}
          </RouteNode>
        </MainLayout>
      </ReduxStoreLoader>
    ),
  };
};

export default action;
