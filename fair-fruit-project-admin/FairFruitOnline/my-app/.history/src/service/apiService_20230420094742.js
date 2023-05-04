import axios from 'axios';

class ApiService {
  
  constructor() {
    this.jwtToken = null;
    this.setAuthorizationHeader();
    this.api = axios.create({
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': '',
      }
    });
}

  setAuthorizationHeader(jwtToken) {
    if (jwtToken) {
      this.jwtToken = jwtToken;
      return this.api = axios.create({
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Authorization': `Bearer ${this.jwtToken}`,
        }});
    }
    return {};
  }

  async get(endpoint, params = {}) {
    const response = await this.api.get(endpoint, { 
      params });
    return response.data;
  }

  async post(endpoint, data = {}) {
    const response = await this.api.post(endpoint, data);
    const jwtToken = response.data.token;
    this.setAuthorizationHeader(jwtToken);
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
