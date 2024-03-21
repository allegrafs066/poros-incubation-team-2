import { useContext, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import GlobalContext from "../../context/GlobalContext";
import style from "./Cart.module.css";

function CartPage() {
  const { cartProducts, setCartProducts } = useContext(GlobalContext);

  // State to store quantity for each product
  const [quantities, setQuantities] = useState({});

  // Function to update quantity for a specific product
  const updateQuantity = (productId, quantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: quantity,
    }));
  };

  // Function to delete a product from the cart
  const deleteProduct = (productId) => {
    setCartProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
    // Remove the quantity of the deleted product
    setQuantities((prevQuantities) => {
      const updatedQuantities = { ...prevQuantities };
      delete updatedQuantities[productId];
      return updatedQuantities;
    });
  };

  // Function to calculate the total amount of products in the cart
  const calculateTotal = () => {
    let total = 0;
    cartProducts.forEach((product) => {
      total += product.price * (quantities[product.id] || 0); // Multiply price by quantity
    });
    return total;
  };

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
                <div className={style.counter}>
                  <input
                    type="number"
                    min="0"
                    value={quantities[product.id] || 1}
                    onChange={(e) =>
                      updateQuantity(product.id, parseInt(e.target.value))
                    }
                  />
                  pc(s)
                </div>
                <button onClick={() => deleteProduct(product.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className={style.emptyCartMessage}>
            {"Let's go add something in your cart!"}
          </div>
        )}
        {cartProducts.length > 0 && ( // Display subtotal only if there are items in the cart
          <div className={style.subtotal}>
            Subtotal: ${calculateTotal().toFixed(2)}
          </div>
        )}
      </main>
    </MainLayout>
  );
}

export default CartPage;
