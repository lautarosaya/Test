const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const TipoProducto = sequelize.define(
    "TipoProducto",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      descripcion: DataTypes.STRING,
    },
    {
      tableName: "tipoproducto",
      timestamps: false,
    }
  );
  TipoProducto.associate = (models) => {
    TipoProducto.hasMany(models.Producto, {
      as: "Producto",
      foreignKey: "idTipoProducto",
    });
  };

  return TipoProducto;
};
