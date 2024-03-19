import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";

function NavBar() {
  const { cartProducts } = useContext(GlobalContext);

  return (
    <nav className={style.navContainer}>
      <Link to={"/"}>
        <h1>MyStore</h1>
      </Link>
      <Link to={"/cart"} className={style.cart}>
        Cart
        {cartProducts.length > 0 && (
          <div className={style.cartIndicator}>{cartProducts.length}</div>
        )}
      </Link>
    </nav>
  );
}

export default NavBar;
