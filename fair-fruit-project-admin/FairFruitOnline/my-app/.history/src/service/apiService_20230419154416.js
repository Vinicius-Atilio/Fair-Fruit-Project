import axios from 'axios';

class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: '/api',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const proxyOptions = {
        target: 'http://localhost:8080',
        changeOrigin: true,
      };
  
      this.client.interceptors.request.use((config) => {
        // Only use proxy for requests to specific endpoints
        if (config.url.startsWith('/products') ||
            config.url.startsWith('/users') ||
            config.url.startsWith('/clients')) {
          config.baseURL = ''; // Remove /api prefix for proxied requests
          config.url = config.url.slice(4); // Remove /api prefix for proxied requests
          config.proxy = proxyOptions;
        }
        return config;
      });
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
