const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Producto = sequelize.define(
    "Producto",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      idTipoProducto: DataTypes.INTEGER,
      nombre: DataTypes.STRING,
      precio: DataTypes.INTEGER,
    },
    {
      tableName: "producto",
      timestamps: false,
    }
  );

  Producto.associate = (models) => {
    Producto.belongsTo(models.TipoProducto, {
      as: "tipoProducto",
      foreignKey: "idTipoProducto",
    });
  };

  return Producto;
};
