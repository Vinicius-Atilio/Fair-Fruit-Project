import axios from 'axios';

export default function ConfigAxios(params) {

    var api = axios.create({
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': this.jwtToken ? `Bearer ${this.jwtToken}` : '',
    }
    });
  
    async function get(endpoint, params = {}) {
      const response = await this.api.get(endpoint, { 
        params });
      return response.data;
    }
  
    async function put(endpoint, data = {}) {
      const response = await this.api.put(endpoint, data);
      return response.data;
    }
  
    async function delet(endpoint, params = {}) {
      const response = await this.api.delete(endpoint, { params });
      return response.data;
    }
    
}
