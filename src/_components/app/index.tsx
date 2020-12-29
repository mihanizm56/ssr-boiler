import React from 'react';
import { Store as IStore } from 'redux';
import { Provider as ReduxProvider } from 'react-redux';
import II18n from 'i18next';
import { Router as IRouter } from 'router5';
import { I18nextProvider } from 'react-i18next';
import { RouterProvider } from 'react-router5';
import { ICookies } from '@/modules/cookies/_types';
import { CookiesContext } from '@/modules/cookies/_components/cookies-context';
import { RouteNode } from '@/modules/router/_components/route-node';
import { RootComponents } from '../root-components';
import { ErrorBoundary } from '../error-boundary';

interface IProps {
  store: IStore;
  cookies: ICookies;
  i18n: typeof II18n;
  router: IRouter;
}

interface IState {
  error?: Error;
}

export class App extends React.PureComponent<IProps, IState> {
  render() {
    const { routerId } = this.props.router.getDependencies();

    return (
      <>
        <ErrorBoundary>
          <ReduxProvider store={this.props.store}>
            <CookiesContext.Provider value={this.props.cookies}>
              <I18nextProvider i18n={this.props.i18n}>
                <RouterProvider key={routerId} router={this.props.router}>
                  <RouteNode nodeName="">{({ content }) => content}</RouteNode>
                </RouterProvider>
              </I18nextProvider>
            </CookiesContext.Provider>
          </ReduxProvider>

          <RootComponents />
        </ErrorBoundary>
      </>
    );
  }
}
