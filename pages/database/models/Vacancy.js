import Sequelize from 'sequelize';
import sequelize from '../database';
import Company from './Company';

const Vacancy = sequelize.define('vacancy', {
    id: {
      type: Sequelize.STRING(20),
      primaryKey: true
    },
    title: {
      type: Sequelize.STRING(100),
      allowNull: false,
      validate: {
        min: 10
      }
    },
    category: {
      type: Sequelize.STRING(25),
      allowNull: false,
      validate: {
        isIn: [[
          "aviation", 
          "arts", 
          "business", 
          "law enforcement", 
          "media", 
          "medical", 
          "service industry", 
          "teaching", 
          "technology", 
          "other"]]
      }
    },
    tags: {
      type: Sequelize.TEXT,
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
      validate: {
        isAfter: new Date().toISOString().split('T')[0]
      },
      get(){
        return new Date(this.getDataValue('start')).toDateString();
      }
    }
}, {});

Vacancy.belongsTo(Company);
Company.hasMany(Vacancy);

export default Vacancy;