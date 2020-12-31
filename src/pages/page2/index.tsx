import React from 'react';
import { RouteNode } from '@/modules/router/_components/route-node';
import { MainLayout } from '@/layouts/main-layout';
import { TranslationLayout } from '@/layouts/translation-layout';
import { Page } from './page';

const pageNode = 'page2';

const action = async () => ({
  title: 'page2:title',
  content: (
    <TranslationLayout>
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
    </TranslationLayout>
  ),
});

export default action;
