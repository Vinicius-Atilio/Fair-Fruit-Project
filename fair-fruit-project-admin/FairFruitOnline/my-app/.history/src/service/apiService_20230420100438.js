import axios from 'axios';

class ApiService {
  
  constructor() {
    this.jwtToken = null;
    this.api = axios.create({
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
}

  setAuthorizationHeader(jwtToken) {
    if (jwtToken) {
      console.log(jwtToken);
      this.jwtToken = jwtToken;
      localStorage.setItem('jwtToken', jwtToken);
      this.api.defaults.headers.common['Authorization'] = `Bearer ${jwtToken}`;
    }
    delete this.api.defaults.headers.common['Authorization'];
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
