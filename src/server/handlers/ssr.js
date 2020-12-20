import * as React from 'react';
import ReactDOM from 'react-dom/server';
import { cloneRouter } from 'router5';
import { configureRouter } from '@/modules/router';
import { getChunks } from '@/modules/router/dependencies/server/get-chunks';
import { getI18nResources } from '@/modules/router/dependencies/server/get-i18n-resources';
import { configureRedux } from '@/modules/redux';
import { configureCookies } from '@/modules/cookies';
import { configureApi } from '@/modules/api';
import { Html } from '@/_components/html';
import { App } from '@/_components/app';
// Файл chunk-manifest.json генерируется при сборке и позволяет мапить чанки для сервера и клиента по роутам
import chunks from './chunk-manifest.json'; // eslint-disable-line import/no-unresolved
// Базовый объект роутера
const baseRouter = configureRouter();
baseRouter.setDependencies({
    getChunks: getChunks(baseRouter),
    getI18nResources: getI18nResources(baseRouter),
});
export const ssr = async (req, res, next) => {
    try {
        // Конфигрурирование cookies
        const cookies = configureCookies(req, res);
        // Конфигрурирование api
        const api = configureApi(req);
        // Конфигрурирование redux
        const redux = configureRedux({}, {
            cookies,
            api,
        });
        // Стартовые экшены для каждого запроса
        // await startActions(store);
        // ru – i18n локаль по умолчанию
        const locale = 'ru';
        // Клонирование базового роутера для обработки запроса
        const router = cloneRouter(baseRouter, baseRouter.getDependencies());
        router.setDependencies({
            redux,
            cookies,
            i18n: {
                locale,
                instance: req.i18n,
            },
        });
        // Обработка пути с router5
        const route = await new Promise((resolve, reject) => {
            router.start(req.originalUrl, (error, state) => {
                if (error && error.actionResult && error.actionResult.redirect) {
                    // Обработка редиректа
                    const { redirect } = error.actionResult;
                    let redirectUrl = redirect.url;
                    if (redirect.route && redirect.route.name) {
                        redirectUrl = router.buildPath(redirect.route.name, redirect.route.params || {});
                    }
                    res.redirect(redirect.status || 302, redirectUrl);
                }
                else if (error) {
                    reject(new Error(error.code));
                }
                else {
                    resolve(state);
                }
            });
        });
        const DI = router.getDependencies();
        // Результат выполнения экшена текущего роута
        const routeActionResult = DI.getRouteActionResult(route.name);
        // Загрузка чанков и локализации для текущего роута
        const routeResources = {
            chunks: DI.getChunks(route.name),
            i18nResources: DI.getI18nResources(route.name),
        };
        // Чанки скриптов и стилей для текущего роута
        const scripts = new Set();
        const styles = new Set();
        const addChunk = (chunk) => {
            if (chunks[chunk]) {
                chunks[chunk].forEach((asset) => {
                    if (asset.match(/\.js$/g)) {
                        scripts.add(asset);
                    }
                    else if (asset.match(/\.css$/g)) {
                        styles.add(asset);
                    }
                });
            }
            else if (__DEV__) {
                throw new Error(`Chunk with name '${chunk}' cannot be found`);
            }
        };
        addChunk('client');
        if (routeResources.chunks) {
            routeResources.chunks.forEach(addChunk);
        }
        // Данные для отрисовки html страницы
        const data = {
            title: routeActionResult.title || req.i18n.t('common:siteTitle'),
            description: routeActionResult.description,
            keywords: routeActionResult.keywords,
            canonical: routeActionResult.canonical,
            ogDescription: routeActionResult.ogDescription,
            ogUrl: routeActionResult.ogUrl,
            ogImage: routeActionResult.ogImage,
            styles: Array.from(styles),
            scripts: Array.from(scripts),
            ssrData: {
                state: redux.getState(),
                i18nData: { locale, resources: routeResources.i18nResources },
            },
            children: ReactDOM.renderToString(React.createElement(App, { router: router, redux: redux, i18n: req.i18n, cookies: cookies })),
        };
        const html = ReactDOM.renderToStaticMarkup(React.createElement(Html, Object.assign({}, data)));
        res.status(routeActionResult.status || 200);
        res.send(`<!doctype html>${html}`);
    }
    catch (err) {
        next(err);
    }
};
//# sourceMappingURL=ssr.js.map