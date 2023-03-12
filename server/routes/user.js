const express = require('express');
const router = express.Router();
const User = require('../models/mongooseUser');

router.get('/', (req, res) => {
  // Get all users from MongoDB
});

router.post('/register', (req, res) => {
  // Register new user in MongoDB
});

router.post('/login', (req, res) => {
  // Authenticate user and return JWT
});

module.exports = router;