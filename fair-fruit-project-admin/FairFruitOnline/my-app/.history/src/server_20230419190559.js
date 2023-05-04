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

app.post('/auth', async (req, res) => {
  try {
    const product = await apiService.post('/api/users/auth', req.body);
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
