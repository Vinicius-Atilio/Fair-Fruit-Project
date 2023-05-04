import axios from 'axios';


const express = require('express');
const app = express();
const cors = require('cors');
// Import your API service and proxy middleware
const apiService = require('../src/service/apiService.js');
const proxyMiddleware = require('setupProxy.js');

app.use(cors({
  origin: 'http://localhost:3000',
}));


// Add the proxy middleware to the Express app
proxyMiddleware(app);

// Define your routes and use the API service to handle requests


class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:8080',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
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

// app.post('/auth', async (req, res) => {
//   try {
//     const product = await apiService.post('/api/users/auth', req.body);
//     res.send(product);
//   } catch (error) {
//     res.status(error.response.status || 500).send(error.message);
//   }
// });

// // Start the server
// const port = 3000;
// app.listen(port, () => {
//   console.log(`Server is listening on port ${port}`);
// });
