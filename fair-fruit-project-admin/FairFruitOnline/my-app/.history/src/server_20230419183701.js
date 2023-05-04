const express = require('express');
const app = express();

// Import your API service and proxy middleware
const apiService = require('../src/service/apiService.js');
const proxyMiddleware = require('./proxyMiddleware');

// Add the proxy middleware to the Express app
proxyMiddleware(app);

// Define your routes and use the API service to handle requests
app.get('/products', async (req, res) => {
  try {
    const products = await apiService.get('/api/products', req.query);
    res.send(products);
  } catch (error) {
    res.status(error.response.status || 500).send(error.message);
  }
});

app.post('/products', async (req, res) => {
  try {
    const product = await apiService.post('/api/products', req.body);
    res.send(product);
  } catch (error) {
    res.status(error.response.status || 500).send(error.message);
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
