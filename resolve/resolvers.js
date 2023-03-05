const User = require('../models/mongooseUser');

const resolvers = {
  Mutation: {
    createUser: async (parent, { input }, context, info) => {
      const { name, email, password } = input;

      const user = new User({ name, email, password });
      await user.save();

      return user;
    }
  }
};

module.exports = resolvers;


// const User = require('./models/Userschema');
// const resolvers = require('./models/mutation')

// resolvers = {
//   Mutation: {
//     createUser: async (_, { input }) => {
//       const { name, email, password } = input;
//       const newUser = new User({ name, email, password });
//       await newUser.save();
//       return newUser;
//     },
//   },
// };