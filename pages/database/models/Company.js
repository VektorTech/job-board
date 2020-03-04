import Sequelize from 'sequelize';
import sequelize from '../database';

export default sequelize.define('company', {
    id: {
      type: Sequelize.STRING(20),
      primaryKey: true,
    },
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
    description: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    website: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    phone: {
      type: Sequelize.STRING(25)
    },
    address: {
      type: Sequelize.STRING(200)
    },
    logo: {
      type: Sequelize.BLOB
    },
    job_repo: {
      type: Sequelize.STRING,
      get() {
        return this.getDataValue('job_repo').split(';')
      },
      set(val) {
        this.setDataValue('job_repo', val.join(';'));
      }
    }
}, {});