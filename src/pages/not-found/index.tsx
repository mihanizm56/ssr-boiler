import React from 'react';
import { RouteNode } from '@/modules/router/_components/route-node';
import { MainLayout } from '@/layouts/main-layout';
import { TranslationLayout } from '@/layouts/translation-layout';
import { Page } from './page';

const pageNode = 'not-found';

const action = async () => ({
  title: 'not-found',
  status: 404,
  content: (
    <TranslationLayout>
      <MainLayout>
        <RouteNode nodeName={pageNode}>{() => <Page />}</RouteNode>
      </MainLayout>
    </TranslationLayout>
  ),
});

export default action;
