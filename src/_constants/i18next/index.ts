import { LOCALE_COOKIE } from '@/_utils/cookies/_constants';

type ParamsType = {
  locale: string;
  namespace: string;
  baseUrl?: string;
};

export const DEFAULT_LOCALE = 'ru';

export const getI18nextRequestEndpoint = ({
  locale,
  namespace,
  baseUrl,
}: ParamsType) =>
  __SERVER__
    ? `${baseUrl}/I18N/${namespace}/${locale}`
    : `/I18N/${namespace}/${locale}`;

export const getLocaleFromCookies = (cookie) =>
  cookie.get(LOCALE_COOKIE) || DEFAULT_LOCALE;
