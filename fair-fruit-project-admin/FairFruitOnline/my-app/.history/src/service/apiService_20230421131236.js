import axios from 'axios';
import { useState } from 'react';

class ApiService {
  constructor() {
    // this.jwtToken = localStorage.getItem('jwtToken');
    // console.log(this.jwtToken);
    this.api = axios.create({
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
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
    // new ApiService();
    return new ApiService();
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
