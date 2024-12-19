require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const collegeRoutes = require('./routes/college');

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


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
