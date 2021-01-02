import path from 'path';
import dotenv from 'dotenv';
import { availableEnvKeys } from './available-env-keys';

// Установка переменных окружения в process.env для сервера
dotenv.config({
  path: path.resolve(__dirname, `${__DEV__ ? '../' : './'}.env`),
});

// env переменные доступные на сервере
const env = {};
availableEnvKeys.forEach((key) => {
  env[key] = process.env[key];
});

(global as any).env = env;
