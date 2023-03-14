const jwt = require('jsonwebtoken');
const User = require('../models/mongooseUser');

const authenticate = req => {
  // Get JWT from request headers
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    return null;
  }

  try {
    // Verify JWT and extract user ID
    const { userId } = jwt.verify(token, process.env.JWT_SECRET);
    // Find user in MongoDB and return
    return User.findById(userId);
  } catch (error) {
    console.error(error);
    return null;
  }
};

module.exports = { authenticate };