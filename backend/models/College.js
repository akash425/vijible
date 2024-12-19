const mongoose = require('mongoose');

const CollegeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  logo: { type: String }, // URL or uploaded file path
  analytics: {
    studentsEnrolled: Number,
    placementRate: Number,
  },
});

module.exports = mongoose.model('College', CollegeSchema);
