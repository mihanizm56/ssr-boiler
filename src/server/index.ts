/* eslint-disable no-console */

import 'core-js';
import 'regenerator-runtime/runtime';
import './server-set-env';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import i18nextExpressMiddleware from 'i18next-express-middleware';
import { i18n } from '@/modules/i18n';
import { setupProxy } from './proxy';
import { ssr } from './handlers/ssr';
import { errors } from './handlers/errors';
import { initJSBrotliMiddleware } from './middlewares/brotli';

const PORT = env.PORT || 3000;
const isProduction = !process.argv.includes('--develop');

process.on('unhandledRejection', (reason, p) => {
  console.error('Unhandled Rejection at:', p, 'reason:', reason);
  process.exit(1);
});

const app = express();

if (isProduction) {
  // перехватываем js и css файлы
  // и проставляем заголовки для браузера чтобы брал файлы с расширением .br
  initJSBrotliMiddleware(app);
} else {
  // Проксирование внешних сервисов api для разработки
  setupProxy();
}

// Путь до статики
app.use(
  '/static',
  express.static(path.resolve(__dirname, 'public'), {
    maxAge: isProduction ? '30d' : '1ms',
  }),
);

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
