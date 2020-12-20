import 'core-js';
import 'regenerator-runtime/runtime';
// eslint-disable-next-line import/no-extraneous-dependencies
import deepForceUpdate from 'react-deep-force-update';
import * as React from 'react';
import ReactDOM from 'react-dom';
import { configureRouter } from '@/modules/router';
import { handleRedirect } from '@/modules/router/plugins/client/handle-redirect';
import { setMeta } from '@/modules/router/plugins/client/set-meta';
import { i18n } from '@/modules/i18n';
import { configureRedux } from '@/modules/redux';
import { configureCookies } from '@/modules/cookies';
import { configureApi } from '@/modules/api';
import { Page as ErrorPage } from '@/pages/error/page';
import { App } from '@/_components/app';
const customWindow = window;
// Применение переводов полученных на сервере
const { i18nData } = customWindow.ssrData;
const locale = (i18nData && i18nData.locale) || 'ru'; // ru – default locale
i18n.changeLanguage(locale);
if (i18nData && i18nData.resources) {
    const translations = Object.keys(i18nData.resources);
    if (translations.length > 0) {
        translations.forEach(translation => {
            i18n.addResourceBundle(i18nData.locale, translation, i18nData.resources[translation], true);
        });
    }
}
// Конфигрурирование cookies
const cookies = configureCookies();
// Конфигрурирование api
const api = configureApi();
// Применение стора вычесленного на сервере
const initialState = (customWindow.ssrData && customWindow.ssrData.state) || {};
// Конфигрурирование redux
const redux = configureRedux(initialState, {
    cookies,
    api,
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
const runApp = (render, callback) => {
    try {
        // startActions(store).then(() => {
        // Router
        const router = configureRouter();
        router.setDependencies({
            redux,
            cookies,
            i18n: {
                locale: i18nData.locale,
                instance: i18n,
            },
        });
        router.usePlugin(handleRedirect);
        router.usePlugin(setMeta);
        router.start(() => {
            render(React.createElement(App, { ref: node => {
                    appInstance = node;
                }, redux: redux, cookies: cookies, i18n: i18n, router: router }), container, () => {
                // store.dispatch(setInitialRender(false));
                if (typeof callback === 'function') {
                    callback();
                }
            });
        });
        // });
    }
    catch (err) {
        ReactDOM.render(React.createElement(ErrorPage, { ref: node => {
                appInstance = node;
            } }), container, () => {
            if (typeof callback === 'function') {
                callback();
            }
        });
    }
};
runApp(ReactDOM.hydrate);
// Автоматический перезапуск приложения
// В режиме Hot Module Replacement
if (module.hot) {
    module.hot.accept('./modules/router', () => {
        const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
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
        }
        else {
            ReactDOM.unmountComponentAtNode(container);
            runApp(ReactDOM.render, () => {
                setScrollPosition();
            });
        }
    });
}
//# sourceMappingURL=client.js.map