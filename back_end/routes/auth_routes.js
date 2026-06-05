const express = require('express');
const router = express.Router();
const { new_user, login_user } = require('../controllers/authcontroller.js');
router.post('/register', new_user);
router.post('/login', login_user);
module.exports = router;