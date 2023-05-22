import style from "./Stock.module.css";
import { useState, useEffect } from "react";

const Stock = () => {
  const [stock, setStock] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/stock")
      .then((response) => response.json())
      .then((data) => {
        setStock(data);
      });
  }, []);
  return (
    <div>
      <h1>Stock</h1>
      <table className={style.stockTable}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          {stock.map((producto) => (
            <tr key={producto.id}>
              <td>{producto.nombre}</td>
              <td>${producto.precio}</td>
              <td>{producto.tipoProducto.descripcion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Stock;
