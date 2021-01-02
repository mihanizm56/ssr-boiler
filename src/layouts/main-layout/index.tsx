import React, { Props } from 'react';
import { ConnectedLink } from 'react-router5';
import { lazyLoader } from '@/_utils/lazy-loader';
import s from './index.scss';

export const MainLayout = React.memo(({ children }: Props<any>) => (
  <div className={s.root}>
    <nav>
      <ConnectedLink onMouseEnter={() => lazyLoader('home')} routeName="home">
        Home
      </ConnectedLink>
      <br />
      <ConnectedLink onMouseEnter={() => lazyLoader('page1')} routeName="page1">
        Page 1
      </ConnectedLink>
      <br />
      <ConnectedLink onMouseEnter={() => lazyLoader('page2')} routeName="page2">
        Page 2
      </ConnectedLink>
      <br />
      <ConnectedLink
        onMouseEnter={() => lazyLoader('test-page')}
        routeName="pokemon-page"
      >
        Pokemon Page
      </ConnectedLink>
    </nav>
    <div className={s.content}>{children}</div>
  </div>
));
