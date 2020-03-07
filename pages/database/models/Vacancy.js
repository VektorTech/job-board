import Sequelize from 'sequelize';
import sequelize from '../database';
import Company from './Company';

const Vacancy = sequelize.define('vacancy', {
    id: {
      type: Sequelize.STRING(20),
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    category: {
      type: Sequelize.STRING(25),
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
    }
}, {});

Vacancy.belongsTo(Company);
Company.hasMany(Vacancy);

export default Vacancy;