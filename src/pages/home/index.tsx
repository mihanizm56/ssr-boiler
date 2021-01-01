import React from 'react';
import { RouteNode } from '@wildberries/service-router';
import { MainLayout } from '@/layouts/main-layout';
import { TranslationLayout } from '@/layouts/translation-layout';
import { Page } from './page';

const pageNode = 'home';

const action = async () => ({
  title: 'home:title',
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
