import { Link } from "react-router-dom";
import style from "./Card.module.css";
import PropTypes from "prop-types";

function Card(props) {
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

Card.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
