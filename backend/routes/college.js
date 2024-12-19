const express = require('express');
const router = express.Router();
const { getProfile, updateProfile, getAnalytics, uploadLogo } = require('../controllers/collegeController');

// Profile Routes
router.get('/profile/:id', getProfile);
router.put('/profile/:id', updateProfile);

// Analytics Route
router.get('/analytics/:id', getAnalytics);

// Upload Route
router.post('/upload/:id', uploadLogo);

module.exports = router;
