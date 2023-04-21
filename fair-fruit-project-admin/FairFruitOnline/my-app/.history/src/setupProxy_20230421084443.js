const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware('/api/products',
        {
            target: 'http://localhost:8080',
            changeOrigin: true
        })
    );
    app.use(
        '/api',
        createProxyMiddleware('/api/users',
        {
            target: 'http://localhost:8080',
            changeOrigin: true
        })
    );
    app.use(
        '/api',
        createProxyMiddleware('/api/clients',
        {
            target: 'http://localhost:8080',
            changeOrigin: true
        })
    )
}