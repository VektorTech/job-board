import Sequelize from 'sequelize';
import sequelize from '../database';

const Company = sequelize.define('company', {
    id: {
      type: Sequelize.STRING(20),
      primaryKey: true,
    },
    email: {
      type: Sequelize.STRING(100),
      allowNull: false,
      validate: {
        isUrl: true
      }
    },
    password: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    name: {
      type: Sequelize.STRING(90),
      allowNull: false
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    website: {
      type: Sequelize.STRING(100),
      allowNull: true,
      validate: {
        isUrl: true
      }
    },
    phone: {
      type: Sequelize.STRING(25),
      allowNull: false,
      validate: {
        len: [10, 25]
      }
    },
    address: {
      type: Sequelize.STRING(200)
    },
    logo: {
      type: Sequelize.TEXT
    }
}, {});

export default Company;