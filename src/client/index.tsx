import 'core-js';
import 'regenerator-runtime/runtime';
import deepForceUpdate from 'react-deep-force-update';
import React from 'react';
import ReactDOM, { hydrate, render } from 'react-dom';
import { configureCookies } from '../_utils/cookies';
import { Page as ErrorPage } from '../pages/error/page';
import { App } from '../_components/app';
import { handleRedirect } from '../_utils/router/plugins/client/handle-redirect';
import { setMeta } from '../_utils/router/plugins/client/set-meta';
import { actionHandler } from '../_utils/router/middlewares/action-handler';
import routes from '../pages/routes';
import { configureRouter } from '../_utils/router';

const customWindow = window as IWindow;

// DOM элемент приложения
const container = document.getElementById('app');

// Получение данных с севера через window
// const {} = customWindow.ssrData;

// Конфигурирование cookies
const cookies = configureCookies();

// Конфигурирование router
const router = configureRouter({
  setMetaPlugin: setMeta,
  customActionHandler: actionHandler,
  routes,
  defaultRoute: 'home',
});

router.setDependencies({
  cookies,
});

// eslint-disable-next-line
// @ts-ignore
router.usePlugin(handleRedirect);

// Отключение браузерного восстановления скрола при переходах между страницами
/* eslint-disable no-restricted-globals */
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
/* eslint-enable no-restricted-globals */

// Удаление ssrData из памяти
delete customWindow.ssrData;

// Экземпляр приложения
let appInstance;

const runApp = (renderer: ReactDOM.Renderer, callback?: () => void) => {
  try {
    router.start(() => {
      renderer(
        <App
          ref={node => {
            appInstance = node;
          }}
          cookies={cookies}
          router={router}
        />,
        container,
        () => {
          if (typeof callback === 'function') {
            callback();
          }
        },
      );
    });
    // });
  } catch (err) {
    renderer(
      <ErrorPage
        ref={node => {
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

runApp(hydrate);

// Автоматический перезапуск приложения
// В режиме Hot Module Replacement
if (module.hot) {
  module.hot.accept('../_utils/router/index.ts', () => {
    const scrollPosition =
      document.documentElement.scrollTop || document.body.scrollTop;
    const setScrollPosition = () => {
      setTimeout(() => {
        // eslint-disable-next-line no-multi-assign
        document.documentElement.scrollTop = document.body.scrollTop = scrollPosition;
      }, 1);
    };

    if (appInstance && appInstance.updater.isMounted(appInstance)) {
      runApp(render, () => {
        deepForceUpdate(appInstance);
        setScrollPosition();
      });
    } else {
      ReactDOM.unmountComponentAtNode(container);
      runApp(render, () => {
        setScrollPosition();
      });
    }
  });
}
