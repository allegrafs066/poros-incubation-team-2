import { Link } from "react-router-dom";
import style from "./ProductCard.module.css";

function ProductCard(props) {
  const { image, title, price, id } = props.data;

  return (
    <Link to={`product/${id}`} className={style.card}>
      <div className={style.imageContainer}>
        <img src={image} className={style.image} />
      </div>
      <div className={style.desc}>
        <h2 className={style.title}>{title}</h2>
        <p className={style.price}>${price}</p>
      </div>
    </Link>
  );
}

export default ProductCard;
