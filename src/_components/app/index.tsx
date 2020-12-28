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
import { Page as ErrorPage } from '@/pages/error/page';

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
  static getDerivedStateFromError(error: Error): { error: Error } {
    return { error };
  }

  state = {
    error: null,
  };

  render() {
    const { store, cookies, i18n, router } = this.props;
    const { error } = this.state;

    const { routerId } = router.getDependencies();

    return (
      <ReduxProvider store={store}>
        <CookiesContext.Provider value={cookies}>
          <I18nextProvider i18n={i18n}>
            <RouterProvider key={routerId} router={router}>
              {error ? (
                <ErrorPage />
              ) : (
                <RouteNode nodeName="">{({ content }) => content}</RouteNode>
              )}
            </RouterProvider>
          </I18nextProvider>
        </CookiesContext.Provider>
      </ReduxProvider>
    );
  }
}
