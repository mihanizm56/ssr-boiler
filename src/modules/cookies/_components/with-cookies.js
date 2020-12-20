import * as React from 'react';
import { CookiesContext } from './cookies-context';
export const withCookies = (Component) => (props) => (React.createElement(CookiesContext.Consumer, null, (cookies) => React.createElement(Component, Object.assign({}, props, { cookies: cookies }))));
//# sourceMappingURL=with-cookies.js.map