const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const schema = require('./graphql/schema.js');
const userRoutes = require('./routes/user');
const { authenticate } = require('./utils/auth');
// const db = require('./config/database');
const cors = require('cors');

// Set up Express app
const app = express();

// Middleware parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//cors for cross origin
app.use(cors())

const port = process.env.PORT || 5000;

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
};

startServer();

// Serve React app
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
};

// Set up Express routes
app.use('/api/users', userRoutes);
// app.use('/', (req, res) => {
//   res.send("hello holy spirit");
// })

// start server
startServer = require('./config/server');
startServer(app, port);