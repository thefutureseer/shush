const User = require('../../models/mongooseUser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const resolvers = {
  Query: {
    hello: () => {
      console.log('Executing hello resolver');
      return 'Hello world!'},
  },
  Query: {
    users: () => {
      return User.find();
    },
    user: (parent, { id }) => {
      return User.findById(id);
    }
  },
  Mutation: {
    //create new user
    register: async (parent, { name, email, password }) => {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({
        name,
        email,
        password: hashedPassword
      });
      await user.save();
      return user;
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error('Invalid login credentials');
      }
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        throw new Error('Invalid login credentials');
      }
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
      return token;
    },
    updateUser: async (parent, { id, name, email, password }) => {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.findByIdAndUpdate(
        id,
        {
          name,
          email,
          password: hashedPassword
        },
        { new: true }
      );
      return user;
    },
    deleteUser: async (parent, { id }) => {
      const user = await User.findByIdAndDelete(id);
      return user;
    }
  }
};

module.exports = resolvers;