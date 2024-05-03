const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;

// Define a route
app.get('/', (req, res) => {
  res.send('makayna ta 9alwa ach baghi tchoof');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

