import style from "./Product.module.css";
import { Link } from "react-router-dom";
const Product = () => {
  return (
    <div>
      <h1>ABM Productos</h1>
      <Link to="/create">Agregar</Link>
      <Link to="/delete">Borrar</Link>
      <Link to="/update">Modificar</Link>
    </div>
  );
};
export default Product;
