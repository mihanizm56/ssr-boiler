import React, { Props } from 'react';
import { ConnectedLink } from 'react-router5';
import s from './index.scss';

export const MainLayout = React.memo(({ children }: Props<any>) => (
  <div className={s.root}>
    <nav>
      <ConnectedLink routeName="home">Home</ConnectedLink>
      <br />
      <ConnectedLink routeName="page1">Page 1</ConnectedLink>
      <br />
      <ConnectedLink routeName="page2">Page 2</ConnectedLink>
      <br />
      <ConnectedLink routeName="test-page">Test Page</ConnectedLink>
    </nav>
    <div className={s.content}>{children}</div>
  </div>
));
