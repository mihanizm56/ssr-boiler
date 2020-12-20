import { Response, Request } from 'express';
import Cookie from 'cookie-universal';
import { ICookies } from './_types';

export const configureCookies = (req?: Request, res?: Response): ICookies => {
  let cookies = null;
  if (req && res) {
    cookies = Cookie(req, res);
  } else {
    cookies = Cookie();
  }
  return cookies;
};
