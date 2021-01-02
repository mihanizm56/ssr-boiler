/* eslint-disable no-console */

import 'core-js';
import 'regenerator-runtime/runtime';
import './_utils/server-set-env';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import { setupProxy } from './proxy';
import {
  ssr,
  errors,
  brotliMiddleware,
  i18NextMockBackend,
} from './middlewares';

const PORT = env.PORT || 3000;
const BASE_URL = process.env.BASE_URL || '';

const isProduction = !process.argv.includes('--develop');
const baseUrl = isProduction ? BASE_URL : `http://localhost:${PORT}`;

process.on('unhandledRejection', (reason, p) => {
  console.error('Unhandled Rejection at:', p, 'reason:', reason);
  process.exit(1);
});

const app = express();

// перехватываем js и css файлы
// и проставляем заголовки для браузера чтобы брал файлы с расширением .br
brotliMiddleware(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

setupProxy({ isProduction, baseUrl });

// моковый бекенд для i18next
i18NextMockBackend(app);

// Путь до статики
app.use(
  '/static',
  express.static(path.resolve(__dirname, 'public'), {
    maxAge: isProduction ? '30d' : '1ms',
  }),
);

// Обработка запросов ssr
app.get('*', ssr(baseUrl));

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
