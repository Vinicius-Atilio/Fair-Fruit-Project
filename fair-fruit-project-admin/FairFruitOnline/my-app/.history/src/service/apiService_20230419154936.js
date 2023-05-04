import axios from 'axios';
const { createProxyMiddleware } = require("http-proxy-middleware")

class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:8080',
      headers: {
        'Content-Type': 'application/json',
      },
    });

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
        );
        app.use(
            createProxyMiddleware('/api/clients',
            {
                target: 'http://localhost:8080',
                changeOrigin: true
            })
        )
    }
  
    }

  



  async get(endpoint, params = {}) {
    const response = await this.api.get(endpoint, { params });
    return response.data;
  }

  async post(endpoint, data = {}) {
    const response = await this.api.post(endpoint, data);
    return response.data;
  }

  async put(endpoint, data = {}) {
    const response = await this.api.put(endpoint, data);
    return response.data;
  }

  async delete(endpoint, params = {}) {
    const response = await this.api.delete(endpoint, { params });
    return response.data;
  }
}

export default new ApiService();
