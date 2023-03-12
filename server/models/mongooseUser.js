const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

//pre middleware to log the data being saved
userSchema.pre('save', function (next) {
  console.log(`Saving user data: ${JSON.stringify(this.toJSON())}`);
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;

