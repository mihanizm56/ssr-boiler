import React from 'react';
import styles from './index.scss';

export const Page = React.memo(() => {
  return (
    <div className={styles.page}>
      <p>Page 2 </p>
    </div>
  );
});
