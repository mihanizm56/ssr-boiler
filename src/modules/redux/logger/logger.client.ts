import { Middleware } from 'redux';
import { createLogger as reduxLogger } from 'redux-logger';

export const createLogger = (): Middleware =>
  reduxLogger({
    collapsed: true,
  });
