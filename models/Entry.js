const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Entry extends Model {}


Entry.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    entry_date: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    water: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    exercise: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    sleep: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    mood: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue:"Notes section"
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
          model: 'user',
          key: 'id'
      }
  }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'entry',
  }
);

module.exports = Entry;
