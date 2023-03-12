const mongoose = require('mongoose');
require('dotenv').config();

const dbUri = process.env.DB_URI;

mongoose.connect(
  dbUri, 
  { 
    useNewUrlParser: true, useUnifiedTopology: true 
  }
  );

const db = mongoose.connection;

// descriptive database connection error
db.on('error', console.error.bind(console, 'connection error:'));
//open up the database
// Log database connection status
db.once('open', function () {
  console.log('Connected to database');
});

// Close database connection when Node process ends
//error says: throw new MongooseError('Connection.prototype.close() no longer accepts a callback');
// process.on('SIGINT', () => {
//   db.close(() => {
//     console.log('Database connection closed');
//     process.exit(0);
//   });
// });
module.exports = db;