const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const apiRoutes = require('./src/routes/api');

const app = express();

// Basic middleware
app.use(cors());
app.use(express.json());

// MongoDB connection (hardcoded for the docker-compose setup)
const MONGO_URI = 'mongodb://root:password123@mongodb:27017/skillwallet?authSource=admin';

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

// Simple health check endpoint used by run.sh
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// API routes
app.use('/api', apiRoutes);

// Basic error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend server listening on port ${PORT}`);
});
