import axios from 'axios';

class ApiService {
  
  constructor() {
    this.jwtToken = null;
    this.api = axios.create({
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': `Bearer ${this.jwtToken}`
      }
    });
}

  getAuthorizationHeader() {
    if (this.jwtToken) {
      return { Authorization: `Bearer ${this.jwtToken}` };
    }
    return {};
  }

  setAuthorizationHeader(jwtToken) {
    if (this.jwtToken) {
      return { Authorization: `Bearer ${jwtToken}` };
    }
    return {};
  }

  async get(endpoint, params = {}) {
    const response = await this.api.get(endpoint, { 
      params,
      headers: this.getAuthorizationHeader() 
    });
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
