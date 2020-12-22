import { createProxyMiddleware } from 'http-proxy-middleware';

export const setupProxy = () => {
  createProxyMiddleware('/api', {
    target: 'http://localhost:8080',
    changeOrigin: true,
    // Удаляем домен из кук которые устанавливаются через прокси
    // cookieDomainRewrite: '',
  });
};
