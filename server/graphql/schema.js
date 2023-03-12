const { makeExecutableSchema } = require('graphql-tools');
const typeDefs = require('./schemas/typeDefs.gql');
const resolvers = require('./resolvers/resolvers');

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
// console.log(schema);
module.exports = schema;