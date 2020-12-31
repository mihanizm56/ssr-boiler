import React from 'react';
import { Store as IStore } from 'redux';
import { Provider as ReduxProvider } from 'react-redux';
import { Router as IRouter } from 'router5';
import { RouterProvider } from 'react-router5';
import { ICookies } from '@/_utils/cookies/_types';
import { CookiesContext } from '@/_utils/cookies/_components/cookies-context';
import { RouteNode } from '@/modules/router/_components/route-node';
import { RootComponents } from '../root-components';
import { ErrorBoundary } from '../error-boundary';

interface IProps {
  store: IStore;
  cookies: ICookies;
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
              <RouterProvider key={routerId} router={this.props.router}>
                <RouteNode nodeName="">{({ content }) => content}</RouteNode>
              </RouterProvider>
            </CookiesContext.Provider>
          </ReduxProvider>

          <RootComponents />
        </ErrorBoundary>
      </>
    );
  }
}
