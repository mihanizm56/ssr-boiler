import { home } from './features/home';
export const api1 = (serviceUrl, axios) => {
    return {
        /**
         * Фичи апи
         */
        home: home(axios, serviceUrl),
    };
};
//# sourceMappingURL=index.js.map