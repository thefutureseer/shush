const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { makeExecutableSchema } = require('graphql-tools');
const mongoose = require('mongoose');
require('dotenv').config();
const fs = require('fs');

const resolvers = require('./mutation');

const app = express();

// Load type definitions from schema file
const typeDefs = fs.readFileSync('./models/schema.graphql', 'utf8');

// Connect to MongoDB database
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to database'));


// Create executable schema with type definitions and resolvers
const schema = makeExecutableSchema({ typeDefs, resolvers });

// Create GraphQL route with schema and GraphiQL interface
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));

const port = process.env.PORT || 3000

// Start server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});



// const express = require('express');
// const { graphqlHTTP } = require('express-graphql');

// const app = express();

// app.use('/graphql', graphqlHTTP({
//   schema: schema,
//   graphiql: true
// }));

// app.listen(3000, () => {
//   console.log('Server started on port 3000');
// });
