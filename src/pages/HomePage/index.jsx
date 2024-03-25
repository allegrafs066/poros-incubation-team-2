import { useEffect, useState } from "react";
import style from "./HomePage.module.css";
import api from "../../api";
import ProductCard from "../../components/ProductCard";
import MainLayout from "../../layouts/MainLayout";
import BrandingImage from "../../components/BrandingImage";

function HomePage() {
  const [products, settingProduk] = useState([]);
  const [searchKeyword, settingKataKunci] = useState("");
  const [sortOrder, settingPengurutanOrder] = useState("asc");
  const [originalProducts, settingProdukOriginal] = useState([]);

  useEffect(() => {
    const Produk_Fetch = async () => {
      try {
        const response = await api.get("/products");
        settingProduk(response.data);
        settingProdukOriginal(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    Produk_Fetch();
  }, []);

  const Penangan_Sorting = (order) => {
    const sortedProducts = [...products].sort((a, b) => {
      if (order === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

    settingProduk(sortedProducts);
    settingPengurutanOrder(order);
  };

  const handleSearch = () => {
    const filteredProducts = originalProducts.filter((product) =>
      product.title.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    settingProduk(filteredProducts);
  };

  const Penanganan_Reset = () => {
    settingKataKunci("");
    settingProduk(originalProducts);
  };

  return (
    <MainLayout>
      <BrandingImage />
      <div className={style.bannerCaption}><h1>Check out what we have in store!</h1></div>
      <body className={style.badan}>
      <div className={style.tempat}>
        <div className={style.urut}>
          <div className={style.kotak}>
            <h2>Pencarian</h2>
            <div className={style.kotakcari}>
              <label htmlFor="searchKeyword">Cari Kata Kunci:</label>
              <input className={style.pencarian}
                type="text"
                id="searchKeyword"
                value={searchKeyword}
                onChange={(e) => settingKataKunci(e.target.value)}
              />
              <div className={style.tombol}>
              <div onClick={handleSearch} className={style.cari}>Cari</div>
              <div onClick={Penanganan_Reset} className={style.reset}>Reset</div>
              </div>
              
            </div>
            <label>Pengelompokkan Harga:</label>
            <div className={style.kelompok}>
              <div>
              <input className= {style.tombol1}
                type="radio"
                id="asc"
                name="sortOrder"
                value="asc"
                checked={sortOrder === "asc"}
                onChange={() => Penangan_Sorting("asc")}
              />
              <label className= {style.ter} htmlFor="asc">Terkecil</label>
              </div>

              <div>
              <input
                type="radio"
                id="desc"
                name="sortOrder"
                value="desc"
                checked={sortOrder === "desc"}
                onChange={() => Penangan_Sorting("desc")}
              />
              <label className= {style.ter} htmlFor="desc">Terbesar</label>
              </div>
              
            </div>
          </div>
        </div>
        <main className={style.gridContainer}>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} data={product} />
            ))}
        </main>
      </div>
      </body>
      
    </MainLayout>
  );
}

export default HomePage;
