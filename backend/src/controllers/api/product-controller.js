const { Producto } = require("../../database/models");
const { TipoProducto } = require("../../database/models");

module.exports = {
  add: (req, res) => {
    TipoProducto.create({
      descripcion: req.body.descripcion,
    }).then((Tipoproducto) => {
      Producto.create({
        idTipoProducto: Tipoproducto.id,
        nombre: req.body.nombre,
        precio: req.body.precio,
      }).then((producto) => {
        res.json(producto);
      });
    });
  },

  modify: (req, res) => {
    Producto.update(
      {
        nombre: req.body.nombre,
        precio: req.body.precio,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )
      .then((producto) => {
        TipoProducto.update(
          {
            descripcion: req.body.descripcion,
          },
          {
            where: {
              id: req.params.id,
            },
          }
        ).then((tipoProducto) => {
          res.json({ message: "Producto editado" });
        });
      })
      .catch((err) => {
        res.json(err);
      });
    //res.json({ message: "Producto editado" });
  },

  remove: (req, res) => {
    Producto.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((producto) => {
        res.json({ message: "Producto eliminado" });
      })
      .catch((err) => {
        res.json(err);
      });
  },
};
