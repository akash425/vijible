require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const collegeRoutes = require('./routes/college');
const userRoutes = require('./routes/userRoutes');

const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(bodyParser.json());

// Routes
app.use('/api/college', collegeRoutes);

app.get('/profile', (req, res) => {
  res.send('Profile Page');
});

app.get('/analytics', (req, res) => {
  res.send('Analytics Page');
});

app.post('/upload', (req, res) => {
  // Handle file upload
  res.send('File Uploaded');
});

app.use('/user', userRoutes);

app.get('/', (req, res) => {
  res.send("Backend working");
});


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {})
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
