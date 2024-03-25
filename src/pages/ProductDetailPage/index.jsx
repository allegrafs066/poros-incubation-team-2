import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api";
import MainLayout from "../../layouts/MainLayout";
import GlobalContext from "../../context/GlobalContext";

function PostDetailPage() {
  const params = useParams();
  const [product, setProduct] = useState();

  const { cartProducts, setCartProducts } = useContext(GlobalContext);

  useEffect(() => {
    const getProductDetail = async () => {
      try {
        const response = await api.get(`products/${params.id}`);
        setProduct(response.data);
      } catch (e) {
        console.log(e);
      }
    };

    getProductDetail();
  }, [params.id]);

  const isInCart = () => {
    return cartProducts.some((item) => item.id === product.id);
  };

  const addToCard = () => {
    setCartProducts((prev) => [...prev, product]);
  };

  return (
    <MainLayout>
      {product && (
        <div>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <button onClick={addToCard} disabled={isInCart()}>
            Add to Cart
          </button>
        </div>
      )}
    </MainLayout>
  );
}

export default PostDetailPage;
