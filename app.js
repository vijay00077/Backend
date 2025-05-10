// Import the express module
const express = require('express');

// Create an express application
const app = express();

// Define the port to listen on
const PORT = 3000;

const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();
const itemRoutes = require('./routes/itemRoutes');


// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database Connection
connectDB();

app.use(express.json());


// Define a route for the root path ('/')
app.get('/vijay', (req, res) => {
  res.send('Hello Vijay!');
});

app.use('/Gyan', itemRoutes);


// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});