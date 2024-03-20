import { useContext } from "react";
import MainLayout from "../../layouts/MainLayout";
import GlobalContext from "../../context/GlobalContext";
import style from "./Cart.module.css";

function CartPage() {
  const { cartProducts } = useContext(GlobalContext);

  return (
    <MainLayout>
      <main className={style.cartContainer}>
        {cartProducts.length > 0 ? (
          cartProducts.map((product) => (
            <div key={product.id} className={style.cartItem}>
              <img
                src={product.image}
                alt={product.title}
                className={style.cartItemImage}
              />
              <div className={style.cartItemInfo}>
                <div className={style.cartItemTitle}>{product.title}</div>
                <div className={style.cartItemPrice}>${product.price}</div>
              </div>
            </div>
          ))
        ) : (
          <div className={style.emptyCartMessage}>
            {"Let's go add something in your cart!"}
          </div>
        )}
      </main>
    </MainLayout>
  );
}

export default CartPage;
