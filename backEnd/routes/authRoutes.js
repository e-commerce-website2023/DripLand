const express = require('express');
const router = express.Router();
const { signup, signin, logout, userProfile } = require('../controllers/userController.js');
const { isAuthenticated } = require('../middleware/auth');

//auth routes
// /api/signup
router.post('/signup', signup);
// /api/signin
router.post('/signin', signin);
// /api/logout
router.get('/logout', logout);
// /api/me
router.get('/me', isAuthenticated, userProfile);

router.route('/hhh').post();

module.exports = router;