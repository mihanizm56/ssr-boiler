import React, { PropsWithChildren, SyntheticEvent, useCallback } from 'react';
import classNames from 'classnames/bind';
import { withCookies } from '@/_utils/cookies/_components/with-cookies';
import { ICookies } from '@/_utils/cookies/_types';
import { isClient } from '@/_utils/is-client';
import { LOCALE_COOKIE } from '@/_utils/cookies/_constants';
import styles from './index.scss';

const BUTTON_NAME = 'button';

const cn = classNames.bind(styles);

type PropsType = PropsWithChildren<{
  cookies: ICookies;
}>;

export const WrappedComponent = React.memo(
  ({ children, cookies }: PropsType) => {
    const handleChangeLocale = useCallback(
      (event: SyntheticEvent<HTMLButtonElement>) => {
        const locale = event.currentTarget.getAttribute('data-locale');

        cookies.set(LOCALE_COOKIE, locale);

        if (isClient) {
          window.location.reload();
        }
      },
      [cookies],
    );

    return (
      <>
        <div>
          <div>
            <button
              className={cn(BUTTON_NAME)}
              data-locale="ru"
              onClick={handleChangeLocale}
              type="button"
            >
              Ru
            </button>
          </div>
          <div>
            <button
              className={cn(BUTTON_NAME)}
              data-locale="en"
              onClick={handleChangeLocale}
              type="button"
            >
              En
            </button>
          </div>
        </div>

        {children}
      </>
    );
  },
);

export const TranslationLayout = withCookies(WrappedComponent);
