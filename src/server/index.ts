/* eslint-disable no-console */

import 'core-js';
import 'regenerator-runtime/runtime';
import './server-set-env';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import i18nextExpressMiddleware from 'i18next-express-middleware';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { i18n } from '@/modules/i18n';
import { ssr } from './handlers/ssr';
import { errors } from './handlers/errors';

const PORT = env.PORT || 3000;

process.on('unhandledRejection', (reason, p) => {
  console.error('Unhandled Rejection at:', p, 'reason:', reason);
  process.exit(1);
});

const app = express();

// Проксирование внешних сервисов api для разработки на localhost
if (process.env.NODE_ENV === 'development') {
  createProxyMiddleware('/api', {
    target: 'http://localhost:8080',
    changeOrigin: true,
    // Удаляем домен из кук которые устанавливаются через прокси
    // cookieDomainRewrite: '',
  });
}

// Путь до статики
app.use('/static', express.static(path.resolve(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// i18n
app.use(
  i18nextExpressMiddleware.handle(i18n, {
    removeLngFromUrl: false,
  }),
);

// Обработка запросов ssr
app.get('*', ssr);

// Обработка ошибок при ssr
app.use(errors);

// Запуск сервера
if (!module.hot) {
  app.listen(PORT, () => {
    console.info(`The server is running at port ${PORT}`);
  });
}

// Автоматический перезапуск сервера при изменениях в файлах
// В режиме Hot Module Replacement
if (module.hot) {
  (app as any).hot = module.hot;
  module.hot.decline();
}

export default app;
