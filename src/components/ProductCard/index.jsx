import { Link } from "react-router-dom";
import style from "./ProductCard.module.css";

function ProductCard(props) {
  const { image, title, price, id } = props.data;

  return (
    <Link to={`/product/${id}`} className={style.card}>
      <div className={style.gambarkontainer}>
        <img src={image} className={style.gambar} />
      </div>
      <div className={style.deskripsi}>
        <h2 className={style.judul}>{title}</h2>
        <p className={style.harga}>${price}</p>
      </div>
    </Link>
  );

  
}

export default ProductCard;