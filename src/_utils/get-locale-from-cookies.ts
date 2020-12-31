const DEFAULT_LOCALE = 'ru';

export const getLocaleFromCookies = (cookie) =>
  cookie.get('locale') || DEFAULT_LOCALE;
