require('dotenv').config();
const app = require('./app');
const { db } = require('./database/config');

db.authenticate()
  .then(() => console.log('database auth'))
  .catch((error) => console.log(error));

db.sync()
  .then(() => console.log('database Synced'))
  .catch((error) => console.log(error));

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`estamos en el puerto: ${port}`);
});
