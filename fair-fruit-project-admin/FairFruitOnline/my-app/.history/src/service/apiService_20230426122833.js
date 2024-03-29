import axios from 'axios';

class ApiService {
  constructor() {
    this.jwtToken = localStorage.getItem('jwtToken');
    console.log(this.jwtToken);
    this.api = axios.create({
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': this.jwtToken ? `Bearer ${this.jwtToken}` : '',
      }
    });
    // localStorage.clear();
  }

  async get(endpoint, params = {}) {
    const response = await this.api.get(endpoint, { 
      params });
    return response.data;
  }

  async auth(endpoint, data = {}) {
    const response = await this.api.post(endpoint, data);
    const jwtToken = response.data.token;
    return jwtToken;
    // return new ApiService();
    // return this.api = new axios.create({
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin': '*',
    //     'Authorization': jwtToken ? `Bearer ${jwtToken}` : '',
    //   }
    // })
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
