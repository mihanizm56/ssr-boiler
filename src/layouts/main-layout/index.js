import * as React from 'react';
import { Link } from '@/_components/link';
import s from './index.scss';
export const MainLayout = React.memo(({ children }) => (React.createElement("div", { className: s.root },
    React.createElement("nav", null,
        React.createElement(Link, { routeName: "home" }, "Home"),
        React.createElement("br", null),
        React.createElement(Link, { routeName: "page1" }, "Page 1"),
        React.createElement("br", null),
        React.createElement(Link, { routeName: "page2" }, "Page 2")),
    React.createElement("div", { className: s.content }, children))));
//# sourceMappingURL=index.js.map