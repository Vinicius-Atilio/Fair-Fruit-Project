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
    localStorage.removeItem('jwtToken');
  }

  async get(endpoint, params = {}) {
    const response = await this.api.get(endpoint, { 
      params });
    return response.data;
  }

  async auth(endpoint, data = {}) {
    // localStorage.removeItem('jwtToken');
    const response = await this.api.post(endpoint, data);
    const jwtToken = response.data.token;
    localStorage.setItem('jwtToken', jwtToken);
    this.api.defaults.headers.common['Authorization'] = `Bearer ${jwtToken}`;
    return new ApiService();
    // this.jwtToken = jwtToken;
    // new ApiService(jwtToken) (
    //   this.api = axios.create({
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin': '*',
    //     'Authorization': jwtToken ? `Bearer ${jwtToken}` : '',
    //   }
    // }));
    // return new ApiService(jwtToken);
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
