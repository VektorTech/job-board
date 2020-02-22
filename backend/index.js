const express = require("express");
const sequelize = require('./db_connection');

const user = require('./api/user');

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
});

const app = express();

app.get('/', (req, res) => {
    res.send('');
});

app.use(user)

app.listen(5000);