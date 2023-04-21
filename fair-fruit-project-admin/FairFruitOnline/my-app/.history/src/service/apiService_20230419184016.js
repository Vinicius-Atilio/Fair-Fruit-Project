import axios from 'axios';

class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:8080',
      headers: {
        'Content-Type': 'application/json',
      },
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
