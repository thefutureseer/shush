const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { makeExecutableSchema } = require('graphql-tools');
const mongoose = require('mongoose');
require('dotenv').config();
const fs = require('fs');

const resolvers = require('./resolve/resolvers');

const app = express();

const port = process.env.PORT || 3000;

// Load type definitions from schema file
const typeDefs = fs.readFileSync('./models/typedefs/typedefs.graphql', 'utf8');

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
  graphiql: true,
  // GraphQL Playground
  // Uncomment the following line to enable GraphQL Playground
  // To access it, navigate to http://localhost:{PORT}/graphql
  // playground: true,
}));

app.get('/', (req, res) => {
  res.send('hello spirit');
})

// Altair GraphQL Client
// Uncomment the following lines to enable Altair GraphQL Client
// To access it, navigate to http://localhost:{PORT}/altair
const { altairExpress } = require('altair-express-middleware');
app.use('/altair', altairExpress({ endpointURL: '/graphql' }));

// Start server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// Note that either GraphQL Playground or 
// Altair GraphQL Client can be used at a time. 
// If you uncomment the playground property, 
// you should comment out the lines for 
// Altair GraphQL Client, and vice versa.










// const express = require('express');
// const { graphqlHTTP } = require('express-graphql');
// const { makeExecutableSchema } = require('graphql-tools');
// const mongoose = require('mongoose');
// require('dotenv').config();
// const fs = require('fs');

// const resolvers = require('./resolve/resolvers');

// const app = express();

// const port = process.env.PORT || 3000;

// // Load type definitions from schema file
// const typeDefs = fs.readFileSync('./models/typedefs/typedefs.graphql', 'utf8');

// // Connect to MongoDB database
// mongoose.connect(process.env.DB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => console.log('Connected to database'));


// // Create executable schema with type definitions and resolvers
// const schema = makeExecutableSchema({ typeDefs, resolvers });

// // Create GraphQL route with schema and GraphiQL interface
// app.use('/graphql', graphqlHTTP({
//   schema: schema,
//   graphiql: true
// }));

// app.get('/', (req, res) => {
//   res.send('hello spirit');
// })

// // Start server
// app.listen(port, () => {
//   console.log(`Server started on port ${port}`);
// });