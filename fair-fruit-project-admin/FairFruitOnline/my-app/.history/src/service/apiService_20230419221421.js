import { HttpClientBuilder, HttpClientInterceptors } from 'httpclient.js';

class ApiService {
  constructor() {
    this.httpClient = HttpClientBuilder.create()
      .baseUrl('http://localhost:8080')
      .defaultHeader('Content-Type', 'application/json')
      .addInterceptor(HttpClientInterceptors.request((config) => {
        // Add any necessary request interceptors here
        return config;
      }))
      .addInterceptor(HttpClientInterceptors.response((response) => {
        // Add any necessary response interceptors here
        return response;
      }))
      .build();
  }

  async get(endpoint, params = {}) {
    const response = await this.httpClient.get(endpoint, { params });
    return response.data;
  }

  async post(endpoint, data = {}) {
    const response = await this.httpClient.post(endpoint, data);
    return response.data;
  }

  async put(endpoint, data = {}) {
    const response = await this.httpClient.put(endpoint, data);
    return response.data;
  }

  async delete(endpoint, params = {}) {
    const response = await this.httpClient.delete(endpoint, { params });
    return response.data;
  }
}

export default new ApiService();
