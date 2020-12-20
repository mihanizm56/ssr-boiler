import React, { Props } from 'react';
import { Link } from '@/_components/link';
import s from './index.scss';

export const MainLayout = React.memo(({ children }: Props<any>) => (
  <div className={s.root}>
    <nav>
      <Link routeName="home">Home</Link>
      <br />
      <Link routeName="page1">Page 1</Link>
      <br />
      <Link routeName="page2">Page 2</Link>
    </nav>
    <div className={s.content}>{children}</div>
  </div>
));
