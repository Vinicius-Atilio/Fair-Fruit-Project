import axios from 'axios';
const { createProxyMiddleware } = require("http-proxy-middleware");

class ApiService {
    constructor() {
        this.baseURL = process.env.REACT_APP_API_URL;
        this.axiosInstance = axios.create({
          baseURL: this.baseURL,
        });
    
        // Call the method to setup the proxy middleware
        this.setupProxy();
      }

setupProxy() {
    // Create the middleware using http-proxy-middleware
    const productsProxy = createProxyMiddleware("/api/products", {
      target: "http://localhost:8080",
      changeOrigin: true,
    });
    const usersProxy = createProxyMiddleware("/api/users", {
      target: "http://localhost:8080",
      changeOrigin: true,
    });
    const clientsProxy = createProxyMiddleware("/api/clients", {
      target: "http://localhost:8080",
      changeOrigin: true,
    });

    // Add the middleware to the axios instance
    this.axiosInstance.interceptors.request.use((config) => {
      if (config.url.includes("/api/products")) {
        config.baseURL = productsProxy.getTarget();
        config.headers.host = productsProxy.getTargetHost();
      } else if (config.url.includes("/api/users")) {
        config.baseURL = usersProxy.getTarget();
        config.headers.host = usersProxy.getTargetHost();
      } else if (config.url.includes("/api/clients")) {
        config.baseURL = clientsProxy.getTarget();
        config.headers.host = clientsProxy.getTargetHost();
      }
      return config;
    });
  }




  async get(endpoint, params = {}) {
    const response = await this.api.get(endpoint, { params });
    return response.data;
  }

  async post(endpoint, data = {}, config) {
    const response = await this.api.post(endpoint, data, config);
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
