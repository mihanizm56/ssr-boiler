import { createProxyMiddleware } from 'http-proxy-middleware';
import { Express } from 'express';

export const setupProxy = (app: Express) => {
  app.use(
    '/I18N',
    createProxyMiddleware({
      target: 'http://192.168.0.107:5001',
      changeOrigin: true,
    }),
  );
};
