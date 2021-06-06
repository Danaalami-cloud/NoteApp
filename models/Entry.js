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
    current_date: {
      type: DataTypes.DATE,
      allowNull:false,
      defaultValue: DataTypes.NOW,
    },
    water: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    exercise: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    sleep: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    mood: {
        type: DataTypes.INTEGER,
        allowNull: true
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
