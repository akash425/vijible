const College = require('../models/College');

// Get Enrollment Trend
exports.getEnrollmentTrend = async (req, res) => {
  try {
    const trend = await College.aggregate([
      { $project: { _id: 0, name: 1, studentsEnrolled: 1 } },
      { $sort: { studentsEnrolled: -1 } },
    ]);
    res.json(trend);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
