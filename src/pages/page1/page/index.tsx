import * as React from 'react';
import s from './index.scss';

export const Page = React.memo(() => {
  return <div className={s.root}>Page 1</div>;
});
