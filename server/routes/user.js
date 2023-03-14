const express = require('express');
const router = express.Router();
const User = require('../models/mongooseUser');

// GET /api/users - Retrieves a list of users
router.get('/', async (req, res, next) => {
  try {
    // Retrieve list of users from database or other data source
    const users = await User.find();
    // Respond with list of users
    res.json(users);
  } catch (err) {
    // Handle errors
    next(err);
  }
});

router.post('/register', (req, res) => {
  // Register new user in MongoDB
});

router.post('/login', (req, res) => {
  // Authenticate user and return JWT
});

module.exports = router;