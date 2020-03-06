import Sequelize from 'sequelize';
import sequelize from '../database';

export default sequelize.define('vacancy', {
    id: {
      type: Sequelize.STRING(20),
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    salary: {
      type: Sequelize.INTEGER,
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    location: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    time: {
      type: Sequelize.STRING(4),
      allowNull: false
    },
    start: {
      type: Sequelize.DATE,
    },
    company_name: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    company: {
      type: Sequelize.STRING,
      allowNull: false
    }
}, {});