const { Producto } = require("../../database/models");

module.exports = {
  showStock: (req, res) => {
    Producto.findAll({ include: ["tipoProducto"] }).then((productos) => {
      res.json(productos);
    });
  },
};
