import * as React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { RouterProvider } from 'react-router5';
import { CookiesContext } from '@/modules/cookies/_components/cookies-context';
import { RouteNode } from '@/modules/router/_components/route-node';
import { Page as ErrorPage } from '@/pages/error/page';
export class App extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            error: null,
        };
    }
    static getDerivedStateFromError(error) {
        return { error };
    }
    render() {
        const { redux, cookies, i18n, router } = this.props;
        const { error } = this.state;
        const { routerId } = router.getDependencies();
        return (React.createElement(ReduxProvider, { store: redux },
            React.createElement(CookiesContext.Provider, { value: cookies },
                React.createElement(I18nextProvider, { i18n: i18n },
                    React.createElement(RouterProvider, { key: routerId, router: router }, error ? (React.createElement(ErrorPage, null)) : (React.createElement(RouteNode, { nodeName: "" }, ({ content }) => content || React.createElement(ErrorPage, null))))))));
    }
}
//# sourceMappingURL=index.js.map