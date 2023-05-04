import axios from 'axios';

class ApiService {
  
  constructor(jwtToken) {
    console.log(jwtToken);
    this.jwtToken = jwtToken;
    this.api = axios.create({
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': this.jwtToken ? `Bearer ${this.jwtToken}` : '',
      }
    });
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
    ApiService(jwtToken);
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

  setAuthorizationHeader(jwtToken) {
    if (jwtToken) {
      this.jwtToken = jwtToken;
      this.api.defaults.headers.common['Authorization'] = `Bearer ${jwtToken}`;
    }
  }
}

export default new ApiService();
