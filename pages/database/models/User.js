import Sequelize from 'sequelize';
import sequelize from '../database';

export default sequelize.define('user', {
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
      type: Sequelize.STRING(64),
      allowNull: false
    },
    name: {
      type: Sequelize.STRING(90),
      allowNull: false,
      validate: {
        min: 7
      }
    },
    sex: {
      type: Sequelize.STRING(1),
      allowNull: false,
      validate: {
        isIn: [["f", "F", 'm', "M"]]
      }
    },
    phone: {
      type: Sequelize.STRING(25),
      validate: {
        isMobilePhone: true
      }
    },
    address: {
      type: Sequelize.STRING(200)
    },
    avatar: {
      type: Sequelize.BLOB('long')
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