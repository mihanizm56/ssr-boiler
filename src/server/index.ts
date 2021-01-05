/* eslint-disable no-console */

import 'core-js';
import 'regenerator-runtime/runtime';
import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import expressStaticGzip from 'express-static-gzip';
import { setServerEnvs } from './_utils/collect-envs/set-server-envs';
import { setupProxy } from './proxy';
import { ssr, errors } from './middlewares';

dotenv.config();

process.on('unhandledRejection', (reason, p) => {
  console.error('Unhandled Rejection at:', p, 'reason:', reason);
  process.exit(1);
});

process.on('SIGINT', () => {
  console.error('Application terminated with SIGINT');
  process.exit(0);
});

setServerEnvs();

console.log('serverEnvs', env);

const PORT = env.PORT || 3000;

const isProduction = !process.argv.includes('--develop');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (!isProduction) {
  // моковый бекенд для i18next
  // i18NextMockBackend(app);

  setupProxy(app);
}

app.use(
  '/static',
  expressStaticGzip('build/public', {
    enableBrotli: true,
    orderPreference: ['br', 'gz'],
    serveStatic: {
      maxAge: isProduction ? '30d' : '1ms',
    },
  }),
);

// Обработка запросов ssr
app.get('*', ssr(isProduction));

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
