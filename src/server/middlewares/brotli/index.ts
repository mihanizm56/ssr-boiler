/* eslint-disable func-names */

export const brotliMiddleware = (app) => {
  app.get('*.js', function (req, res, next) {
    req.url += '.br';
    res.set('Content-Encoding', 'br');
    res.set('Content-Type', 'text/javascript');
    next();
  });
  app.get('*.css', function (req, res, next) {
    req.url += '.br';
    res.set('Content-Encoding', 'br');
    res.set('Content-Type', 'text/css');
    next();
  });
};
