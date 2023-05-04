import axios from 'axios';

class ApiService {
  constructor() {
    this.api = axios.create({
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': `Bearer ${this.jwtToken}`
      }
    });
    this.jwtToken = null;
}

  async get(endpoint, params = {}) {
    const response = await this.api.get(endpoint, { params });
    console.log('response: '+ response);
    return response.data;
  }

  async post(endpoint, data = {}) {
    const response = await this.api.post(endpoint, data);
    this.jwtToken = response.data.token;
    this.setAuthorizationHeader();
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

  setAuthorizationHeader() {
    this.api.defaults.headers.common['Authorization'] = `Bearer ${this.jwtToken}`;
  }
}

export default new ApiService();
