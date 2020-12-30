import { createProxyMiddleware } from 'http-proxy-middleware';

type ParamsType = {
  isProduction: boolean;
  baseUrl: string;
};

export const setupProxy = ({ isProduction, baseUrl }: ParamsType) =>
  isProduction
    ? createProxyMiddleware('/api', {
        target: baseUrl,
        changeOrigin: true,
        // Удаляем домен из кук которые устанавливаются через прокси
        // cookieDomainRewrite: '',
      })
    : createProxyMiddleware('/api', {
        target: baseUrl,
        changeOrigin: true,
        // Удаляем домен из кук которые устанавливаются через прокси
        // cookieDomainRewrite: '',
      });
