import "./ItemCard.css";
import { Link } from "react-router-dom";

const ItemCard = (props) => {
  return (
    <div className="product__card__card" data-aos="flip-right">
      <div className="product__card">
        <div className="product__image">
          <img src={props.item.img} alt="item" className="product__img" />
        </div>
        <div className="product__card__detail">
          <div className="product__name">
            <Link to={`/services/${props.item.name}`}>{props.item.name}</Link>
          </div>
          <div className="product__description">
            <span>{props.item.desc}</span>
          </div>
          <div className="product__price">
            <span className="know_more_btn">Know More</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
