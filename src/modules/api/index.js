import { configureAxios } from '@/modules/axios';
import { api1 } from './api1';
import { api2 } from './api2';
export const configureApi = (req) => {
    // Проброс кук с клиента при серверных запросах
    let cookiesForServerRequests = null;
    if (__SERVER__ && req && req.headers) {
        cookiesForServerRequests = req.headers.cookie;
    }
    // Конфигурирование axios для API 1
    const api1Url = env.API_URL_1;
    const axiosApi1 = configureAxios({
        headers: {
            ...(cookiesForServerRequests ? { cookie: cookiesForServerRequests } : {}),
        },
    });
    // Конфигурирование axios для API 2
    const api2Url = env.API_URL_2;
    const axiosApi2 = configureAxios({
        headers: {
            ...(cookiesForServerRequests ? { cookie: cookiesForServerRequests } : {}),
        },
    });
    return {
        api1: api1(api1Url, axiosApi1),
        api2: api2(api2Url, axiosApi2),
    };
};
//# sourceMappingURL=index.js.map