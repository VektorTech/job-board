const Sequelize = require('sequelize');
const sequelize = require('../db_connection');

const User = sequelize.define('user', {
    // attributes
    email: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    password: {
      type: Sequelize.STRING(64),
      allowNull: false
    },
    name: {
      type: Sequelize.STRING(90),
      allowNull: false
    },
    sex: {
      type: Sequelize.STRING(1)
    },
    phone: {
      type: Sequelize.STRING(25)
    },
    address: {
      type: Sequelize.STRING(200)
    },
    avatar: {
      type: Sequelize.BLOB
    },
}, {});    

module.exports = User;