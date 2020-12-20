import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { config } from './config';
const commonConfig = {
    ...config,
    interpolation: {
        escapeValue: false,
    },
    // Флаг дебага для отладки
    // debug: true,
    ns: [],
    defaultNS: 'common',
};
if (__SERVER__) {
    // Загрузка файлов локализации на сервере
    // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires
    const backend = require('i18next-fs-backend').default;
    i18n
        .use(backend)
        .use(initReactI18next)
        .init({
        ...commonConfig,
        backend: {
            loadPath: './public/locales/{{lng}}/{{ns}}.json',
        },
    });
}
else {
    // Загрузка файлов локализации на клиенте
    // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires
    const backend = require('i18next-http-backend').default;
    i18n
        .use(backend)
        .use(initReactI18next)
        .init({
        ...commonConfig,
        backend: {
            loadPath: '/static/locales/{{lng}}/{{ns}}.json',
        },
    });
}
export { i18n };
//# sourceMappingURL=index.js.map