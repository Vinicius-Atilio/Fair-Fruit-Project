import { HttpClientBuilder, HttpClientInterceptors } from 'httpclient.js';

class ApiService {

  constructor() {
    this.api = HttpClientBuilder.create()
      .baseUrl('http://localhost:8080')
      .addInterceptor(HttpClientInterceptors.request((config) => {
        config.headers['Content-Type'] = 'application/json';
        config.headers['Access-Control-Allow-Origin'] = '*';
        return config;
      }))
      .build();
  }

  async get(endpoint, params = {}) {
    const response = await this.api.get(endpoint, { params });
    return response.data;
  }

  async post(endpoint, data = {}) {
    console.log("ApiService: post");
    console.log(endpoint);
    console.log(data);
    const response = await this.api.post(endpoint, data);
    console.log(response);
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
