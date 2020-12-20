import axios from 'axios';
import axiosRetry from 'axios-retry';
import { devProxies } from '@/server/dev-proxies';
const defaultOptions = {
    withCredentials: true,
};
// Для сервера необходимо явно указывать хост
// localhost должен быть указан всегда чтобы не делать запрос во вне
if (__SERVER__) {
    defaultOptions.baseURL = `http://localhost:${env.PORT}`;
}
export const configureAxios = (options = {}) => {
    const extendedOptions = { ...defaultOptions };
    Object.keys(options).forEach(option => {
        extendedOptions[option] = {
            ...extendedOptions[option],
            ...options[option],
        };
    });
    const instance = axios.create(extendedOptions);
    // После неуспешной попытки запроса, делаются 3 ретрая с динамическим таймаутом
    axiosRetry(instance, {
        retries: 3,
        retryDelay: (retryCount) => {
            return retryCount * 2000;
        },
    });
    // Подмена урлов перед запросами для проксирования
    if (env.ENABLE_PROXY === 'Y') {
        instance.interceptors.request.use(req => {
            devProxies.forEach(item => {
                const [service, localPath] = item;
                if (req.url.includes(service)) {
                    req.url = req.url.replace(service, localPath);
                }
            });
            return req;
        });
    }
    return instance;
};
//# sourceMappingURL=index.js.map