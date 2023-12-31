const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('diets', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, // especifica un UUID generado automaticamente
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
   
  });
};