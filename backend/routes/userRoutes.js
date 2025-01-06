const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { validateRegister,validateLogin } = require('../middleware/validate');
const { authenticate } = require('../middleware/auth');

// const { authorize } = require('../middleware/rbac');

router.post('/register', validateRegister, userController.register);
router.post('/login', validateLogin, userController.login);
router.post('/logout', authenticate, userController.logout);
router.get('/profile', authenticate, userController.getUserProfile);

module.exports = router;
