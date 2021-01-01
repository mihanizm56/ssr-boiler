import React from 'react';
import { ReduxStoreLoader } from '@wildberries/redux-core-modules';
import { RouteNode } from '@wildberries/service-router';
import { MainLayout } from '@/layouts/main-layout';
import { TranslationLayout } from '@/layouts/translation-layout';
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
      <TranslationLayout>
        <MainLayout>
          <RouteNode nodeName={pageNode}>{() => <Page />}</RouteNode>
        </MainLayout>
      </TranslationLayout>
    </ReduxStoreLoader>
  ),
});

export default action;
