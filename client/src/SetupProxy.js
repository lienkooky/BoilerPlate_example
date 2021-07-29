const { createProxyMiddleware } = require('http-proxy-middleware');
// CORS "concurrently --save" => client와 server를 같이 실행해준다.

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
    })
  );
};
