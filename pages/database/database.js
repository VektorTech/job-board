const Sequelize = require('sequelize');

const sequelize = new Sequelize('job-board', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb'
});

module.exports = sequelize;