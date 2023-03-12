const db = require('./database');

module.exports = async function startServer(app, port) {
  await db;
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
};