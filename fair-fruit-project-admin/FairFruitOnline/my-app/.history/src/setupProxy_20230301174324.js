const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = app => {
    app.use(
        createProxyMiddleware('/api/products',
        {
            target: 'http://localhost:8080',
            changeOrigin: true
        })
    );
    app.use(
        createProxyMiddleware('/api/users',
        {
            target: 'http://localhost:8080',
            changeOrigin: true
        })
    )
}