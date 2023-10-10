import ItemCard from "../../Card/ItemCard/ItemCard";
import "./ServicesCategory.css";

const ServicesCategory = (props) => {
  return (
    <div className="services__category__container">
      <div className="services__category__header">
        <div className="services__category__header__big">
          <div className="services__category__head">
            <h2>WORLD-CLASS SERVICES</h2>
          </div>
          <div className="services__category__header__line"></div>
        </div>
      </div>
      <div className="services__category__card__container">
        <div className="services__category__product__card">
          {props.items.map((data) => (
            <ItemCard item={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesCategory;
