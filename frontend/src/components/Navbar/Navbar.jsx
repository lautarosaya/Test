import { Link } from "react-router-dom";
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/stock">
            <li>Stock</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
