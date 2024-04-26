// Import required modules
const express = require('express');
require("dotenv").config();


// Create an Express application
const app = express();

// Define a route handler for the root path
app.get('/', (req, res) => {
  res.send('Hello, World! This is your Node.js server speaking.');
});

// Define the port to listen on
const PORT = process.env.PORT || 3000; // Default to port 3000 if no PORT environment variable is set

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});