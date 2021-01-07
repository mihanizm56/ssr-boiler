/* eslint-disable no-console */

import 'core-js';
import 'regenerator-runtime/runtime';
import path from 'path';
import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import { setServerEnvs as setServerGlobalEnvs } from './_utils/collect-envs/set-server-envs';
import { setupProxy } from './proxy';
import { ssr, errors } from './middlewares';
import { initProcessListeners } from './_utils/init-process-listeners';

initProcessListeners();

const isProduction = !process.argv.includes('--develop');

if (isProduction) {
  dotenv.config();
} else {
  dotenv.config({ path: path.join(__dirname, '..', '.env') });
}

setServerGlobalEnvs();

const PORT = env.PORT || 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (!isProduction) {
  setupProxy(app);
}

// юзаем просто раздачу статики в режиме разработки
// в продакшене юзаем добавление заголовков для brotli и gzip сжатия
if (!isProduction) {
  app.use(
    '/static',
    express.static(path.resolve(__dirname, 'public'), {
      maxAge: '1ms',
    }),
  );
}

// Обработка запросов ssr
app.get('*', ssr());

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
