const { Producto } = require("../database/models");
const { TipoProducto } = require("../database/models");

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
    TipoProducto.update(
      {
        descripcion: req.body.descripcion,
      },
      {
        where: {
          id: req.body.idTipoProducto,
        },
      }
    )
      .then((Tipoproducto) => {
        Producto.update(
          {
            idTipoProducto: Tipoproducto.id,
            nombre: req.body.nombre,
            precio: req.body.precio,
          },
          {
            where: {
              id: req.body.id,
            },
          }
        ).then((producto) => {
          res.json(producto);
        });
      })
      .catch((error) => {
        res
          .status(500)
          .json({ error: "Error al guardar el tipo de producto modificado" });
      });
  },

  remove: (req, res) => {
    res.json("remove");
  },
};
