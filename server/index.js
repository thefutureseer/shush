const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const schema = require('./graphql/schema.js');
const userRoutes = require('./routes/user');
const { authenticate } = require('./utils/auth');
// const db = require('./config/database');

// Set up Express app
const app = express();

// Middleware parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

// Set up Apollo server
const server = new ApolloServer({
  schema,
  playground: true,
  context: ({ req }) => ({
    user: authenticate(req)
  })
});

async function startServer() {
  await server.start();
  server.applyMiddleware({ app });
}

startServer();

// Set up Express routes
app.use('/api/users', userRoutes);
// app.use('/', (req, res) => {
//   res.send("hello holy spirit");
// })

// start server
startServer = require('./config/server');
startServer(app, port);