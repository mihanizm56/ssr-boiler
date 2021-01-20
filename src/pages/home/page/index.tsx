import React from 'react';
import { Text } from '@/_components/text';
import s from './index.scss';

export const Page = React.memo(() => {
  return (
    <div className={s.root}>
      Home
      <div>
        <Text color="black" size="h1" text="Какой то текст" />
      </div>
      <div>
        <Text color="black" size="h2" text="Какой то текст" />
      </div>
      <div>
        <Text color="black" size="h3" text="Какой то текст" />
      </div>
    </div>
  );
});
