import * as React from 'react';
import { RouteNode } from '@/modules/router/_components/route-node';
import { MainLayout } from '@/layouts/main-layout';
import { Page } from './page';

const pageNode = 'page1';

const action = async ({ i18n }) => ({
  title: i18n.instance.t('page1:title'),
  content: (
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
  ),
});

export default action;
