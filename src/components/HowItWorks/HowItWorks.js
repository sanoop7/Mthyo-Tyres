import "./HowItWorks.css";
import cardIconFirst from "../../asset/icons/card-icon-1.png";
import cardIconSecond from "../../asset/icons/card-icon-2.png";
import cardIconThird from "../../asset/icons/card-icon-3.png";

const HowItWorks = () => {
  return (
    <div className="section__container">
      <h3 className="section__tittle">How It Works</h3>
      <div className="section__content">
        <div
          className="section__content_card"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <img
            className="section__card_logo"
            src={cardIconFirst}
            alt="logo"
          ></img>
          <div className="card__tittle">
            <span className="card__tittle_no">01</span>
            &nbsp;Request for your quote
          </div>
          <div className="card__desc">
            Request for a quote for your tyres by simply clicking below and
            filling your requirements & expect a call back instantly.{" "}
          </div>
        </div>
        <div
          className="section__content_card"
          data-aos="fade-right"
          data-aos-duration="1500"
          data-aos-delay="900"
        >
          <img
            className="section__card_logo"
            src={cardIconSecond}
            alt="logo"
          ></img>
          <div className="card__tittle">
            <span className="card__tittle_no">02</span>
            &nbsp;Confirm your prices
          </div>
          <div className="card__desc">
            Our tyre expert team will get in touch with you soon and offer you
            the best suggestions and best available rates for your vehicle
            tyres.{" "}
          </div>
        </div>
        <div
          className="section__content_card"
          data-aos="fade-right"
          data-aos-duration="1500"
          data-aos-delay="1600"
        >
          <img
            className="section__card_logo"
            src={cardIconThird}
            alt="logo"
          ></img>
          <div className="card__tittle">
            <span className="card__tittle_no">03</span>
            &nbsp; Change your tyre
          </div>
          <div className="card__desc">
            Once you confirm your tyres and prices. You can come to our nearest
            tyre change facility and get you tyres changed instantly.{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
