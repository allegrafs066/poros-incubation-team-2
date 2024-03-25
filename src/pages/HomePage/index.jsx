import { useEffect, useState } from "react";
import style from "./HomePage.module.css";
import api from "../../api";
import ProductCard from "../../components/ProductCard";
import MainLayout from "../../layouts/MainLayout";

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("/products");

        setProducts(response.data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchPosts();
  }, []);

  return (
    <MainLayout>
      <main className={style.gridContainer}>
        {products &&
          products.map((product) => {
            return <ProductCard key={product.id} data={product} />;
          })}
      </main>
    </MainLayout>
  );
}

export default HomePage;
