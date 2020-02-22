const Sequelize = require('sequelize');
const sequelize = require('../db_connection');

const User = sequelize.define('user', {
    // attributes
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING
      // allowNull defaults to true
    }
}, {});    

module.exports = User;