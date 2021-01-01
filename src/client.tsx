import 'core-js';
import 'regenerator-runtime/runtime';
import deepForceUpdate from 'react-deep-force-update';
import React from 'react';
import ReactDOM from 'react-dom';
import { ABORT_REQUEST_EVENT_NAME } from '@mihanizm56/fetch-api';
import { createAppStore } from '@wildberries/redux-core-modules';
// import {
//   notificationsState,
//   NOTIFICATIONS_REDUCER_NAME,
//   setModalAction,
// } from '@wildberries/notifications';
import i18next from 'i18next';
import { geti18NextSync, i18nextRequest } from '@wildberries/i18next-utils';
import { configureRouter } from '@wildberries/service-router';
import { GlobalStateType } from '@/_types';
import { configureCookies } from '@/_utils/cookies';
import { Page as ErrorPage } from '@/pages/error/page';
import { App } from '@/_components/app';
import {
  getLocaleFromCookies,
  getI18nextRequestEndpoint,
} from '@/_constants/i18next';
import { handleRedirect } from './_utils/router/plugins/client/handle-redirect';
import { setMeta } from './_utils/router/plugins/client/set-meta';
import { actionHandler } from './_utils/router/middlewares/action-handler';
import routes from './pages/routes';
import { i18nextLoader } from './_utils/router/middlewares/i18next-loader';

const customWindow = window as IWindow;

const initI18Next = ({ locale, translations }: any) => {
  try {
    const namespacesData = translations ? Object.keys(translations) : [];

    geti18NextSync({ locale });

    i18next.changeLanguage(locale);

    if (i18nData && i18nData.translations && namespacesData.length) {
      namespacesData.forEach((namespace) => {
        i18next.addResourceBundle(
          locale,
          namespace,
          i18nData.translations[namespace],
        );
      });
    }
  } catch (error) {
    console.error('error then initialize i18next', error);
  }
};

// Применение переводов полученных на сервере
const { i18nData } = customWindow.ssrData;

const currentLocale = (i18nData && i18nData.locale) || 'ru'; // ru – default locale

initI18Next({ locale: currentLocale, translations: i18nData.translations });

// Конфигурирование cookies
const cookies = configureCookies();

// Применение стора вычесленного на сервере
const initialState: GlobalStateType =
  (customWindow.ssrData && customWindow.ssrData.reduxInitialState) || {};

const store = createAppStore({
  initialState,
  eventNameToCancelRequests: ABORT_REQUEST_EVENT_NAME,
  isSSR: true,
  // rootReducers: {
  //   [NOTIFICATIONS_REDUCER_NAME]: notificationsState,
  // },
  // dependencies: { setModalAction },
});

// Удаление ssrData из памяти
delete customWindow.ssrData;

// Отключение браузерного восстановления скрола при переходах между страницами
/* eslint-disable no-restricted-globals */
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
/* eslint-enable no-restricted-globals */

// Container element
const container = document.getElementById('app');

// Экземпляр приложения
let appInstance;

const runApp = (render: ReactDOM.Renderer, callback?: () => void) => {
  try {
    // startActions(store).then(() => {
    // Router
    const router = configureRouter({
      setMetaPlugin: setMeta,
      customActionHandler: actionHandler,
      routes,
      defaultRoute: 'home',
      enablei18nMiddleware: true,
      customi18nPlugin: i18nextLoader,
    });
    router.setDependencies({
      store,
      cookies,
      i18nextConfig: {
        getLocale: getLocaleFromCookies.bind(null, cookies),
        i18next,
        i18nextRequest: (options) => i18nextRequest(options),
        createEndpoint: ({ locale, namespace }) =>
          getI18nextRequestEndpoint({ locale, namespace }),
        formatterResponseData: (data: { translate: Record<string, any> }) =>
          data.translate,
      },
    });

    // eslint-disable-next-line
    // @ts-ignore
    router.usePlugin(handleRedirect);

    router.start(() => {
      render(
        <App
          ref={(node) => {
            appInstance = node;
          }}
          cookies={cookies}
          router={router}
          store={store}
        />,
        container,
        () => {
          // store.dispatch(setInitialRender(false));
          if (typeof callback === 'function') {
            callback();
          }
        },
      );
    });
    // });
  } catch (err) {
    ReactDOM.render(
      <ErrorPage
        ref={(node) => {
          appInstance = node;
        }}
      />,
      container,
      () => {
        if (typeof callback === 'function') {
          callback();
        }
      },
    );
  }
};

runApp(ReactDOM.hydrate);

// Автоматический перезапуск приложения
// В режиме Hot Module Replacement
// TODO FIX
if (module.hot) {
  module.hot.accept('./pages/routes.ts', () => {
    const scrollPosition =
      document.documentElement.scrollTop || document.body.scrollTop;
    const setScrollPosition = () => {
      setTimeout(() => {
        // eslint-disable-next-line no-multi-assign
        document.documentElement.scrollTop = document.body.scrollTop = scrollPosition;
      }, 1);
    };

    if (appInstance && appInstance.updater.isMounted(appInstance)) {
      runApp(ReactDOM.render, () => {
        deepForceUpdate(appInstance);
        setScrollPosition();
      });
    } else {
      ReactDOM.unmountComponentAtNode(container);
      runApp(ReactDOM.render, () => {
        setScrollPosition();
      });
    }
  });
}
