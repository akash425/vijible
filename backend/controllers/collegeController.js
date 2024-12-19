const College = require('../models/College');

// Get College Profile
exports.getProfile = async (req, res) => {
  try {
    const college = await College.findById(req.params.id);
    if (!college) return res.status(404).send('College not found');
    res.json(college);
  } catch (error) {
    res.status(500).send('Server Error');
  }
};

// Update College Profile
exports.updateProfile = async (req, res) => {
  try {
    const updatedCollege = await College.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedCollege);
  } catch (error) {
    res.status(500).send('Server Error');
  }
};

// Get Analytics
exports.getAnalytics = async (req, res) => {
  try {
    const college = await College.findById(req.params.id, 'analytics');
    if (!college) return res.status(404).send('College not found');
    res.json(college.analytics);
  } catch (error) {
    res.status(500).send('Server Error');
  }
};

// Upload Logo
exports.uploadLogo = async (req, res) => {
  try {
    const filePath = `/uploads/${req.file.filename}`;
    const updatedCollege = await College.findByIdAndUpdate(req.params.id, { logo: filePath }, { new: true });
    res.json(updatedCollege);
  } catch (error) {
    res.status(500).send('Server Error');
  }
};
