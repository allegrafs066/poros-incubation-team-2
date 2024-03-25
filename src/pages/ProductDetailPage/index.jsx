import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api";
import MainLayout from "../../layouts/MainLayout";
import GlobalContext from "../../context/GlobalContext";
import style from "./ProductDetail.module.css";
import ProductCard from "../../components/ProductCard";


function ProductDetailPage() {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const { cartProducts, setCartProducts } = useContext(GlobalContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch product detail
        const productResponse = await api.get(`products/${params.id}`);
        setProduct(productResponse.data);

        // Fetch product recommendations
        const recommendationResponse = await api.get("products"); // Adjust the API endpoint for recommendations
        setRecommendations(recommendationResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [params.id]);

  const isInCart = () => {
    return product && cartProducts.some((item) => item.id === product.id);
  };

  const addToCart = () => {
    if (product) {
      setCartProducts((prev) => [...prev, product]);
    }
  };

  return (
    <MainLayout>
      {product && (
        <div className={style.container}>
          <div className={style.product}>
            <div className={style.imageContainer}>
              <img src={product.image} alt={product.title} className={style.image} />
            </div>
            <h1>{product.title}</h1>
            <p>${product.price}</p>
            <p>{product.description}</p>
            <button onClick={addToCart} disabled={isInCart()} className={style.button}>
              {isInCart() ? "Already in Cart" : "Add to Cart"}
            </button>
          </div>
        </div>
      )}

      <div className={style.recommendationsContainer}>
        <h2>Recommended Products</h2>
        <div className={style.recommendations}>
          {recommendations.map((recommendation) => (
            <ProductCard key={recommendation.id} data={recommendation} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}

export default ProductDetailPage;
