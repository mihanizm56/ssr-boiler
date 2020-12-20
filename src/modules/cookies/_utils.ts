import { ICookies, CookieValueType } from './_types';

export const setCookieForYear = ({
  cookies,
  key,
  value,
  domain,
}: {
  cookies: ICookies;
  key: string;
  value: CookieValueType;
  domain?: string;
}) => {
  const date = new Date();
  date.setFullYear(date.getFullYear() + 1);
  cookies.set(key, value, {
    expires: date,
    path: '/',
    ...(domain ? { domain } : {}),
  });
};

export const setCookieForMonth = ({
  cookies,
  key,
  value,
  domain,
}: {
  cookies: ICookies;
  key: string;
  value: CookieValueType;
  domain?: string;
}) => {
  const date = new Date();
  date.setMonth(date.getMonth() + 1);
  cookies.set(key, value, {
    expires: date,
    path: '/',
    ...(domain ? { domain } : {}),
  });
};
