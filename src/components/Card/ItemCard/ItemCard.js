import "./ItemCard.css";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartItemsContext } from "../../../Context/CartItemsContext";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { WishItemsContext } from "../../../Context/WishItemsContext";

const ItemCard = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const cartItemsContext = useContext(CartItemsContext);
  const wishItemsContext = useContext(WishItemsContext);

  const handleAddToWishList = () => {
    wishItemsContext.addItem(props.item);
  };

  const handleAddToCart = () => {
    cartItemsContext.addItem(props.item, 1);
  };

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
