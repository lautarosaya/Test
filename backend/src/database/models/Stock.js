const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Stock = sequelize.define(
    "Stock",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      idProducto: DataTypes.INTEGER,
      cantidad: DataTypes.INTEGER,
    },
    {
      tableName: "stock",
      timestamps: false,
    }
  );

  /*  Stock.associate = (models) => {
    Stock.hasMany(models.Producto, {
      as: "producto",
      foreignKey: "idProducto",
    });
  }; */

  return Stock;
};
