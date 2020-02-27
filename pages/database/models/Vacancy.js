import Sequelize from 'sequelize';
import sequelize from '../database';

export default sequelize.define('vacancy', {
    id: {
      type: Sequelize.STRING(20),
      primaryKey: true,
    },
    email: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    name: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    end_at: {
        type: Sequelize.DATE,
        allowNull: false
    }
}, {});