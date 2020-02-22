const Sequelize = require('sequelize');
const sequelize = require('../db_connection');

const User = sequelize.define('user', {
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
      type: Sequelize.STRING(1),
      allowNull: false
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
    saved_jobs: {
      type: Sequelize.STRING,
      get() {
        return this.getDataValue('saved_jobs').split(';')
      },
      set(val) {
        this.setDataValue('saved_jobs', val.join(';'));
      }
    }
}, {});    

module.exports = User;