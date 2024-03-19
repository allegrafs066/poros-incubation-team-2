import { useContext } from "react";
import MainLayout from "../../layouts/MainLayout";
import GlobalContext from "../../context/GlobalContext";

function CartPage() {
  const { cartProducts } = useContext(GlobalContext);

  return (
    <MainLayout>
      <main>
        {cartProducts.map((product) => {
          return <div key={product.id}>{product.title}</div>;
        })}
      </main>
    </MainLayout>
  );
}

export default CartPage;
