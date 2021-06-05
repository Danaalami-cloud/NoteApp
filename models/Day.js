const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Day extends Model {}


Day.init(
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
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Day',
  }
);

module.exports = Day;
