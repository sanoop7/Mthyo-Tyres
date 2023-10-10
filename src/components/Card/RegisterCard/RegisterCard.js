import { Link } from "react-router-dom";
import "./RegisterCard.css";

const RegisterCard = () => {
  return (
    <div className="register__card__container">
      <div className="register__card">
        <div className="register__inputs">
          <div className="register__inputs_sec_1">
            <div className="fname__input__container reg__input__container">
              <label className="fname__label input__label">First name</label>
              <input type="text" className="fname__input register__input" />
            </div>
            <div className="lname__input__container reg__input__container">
              <label className="lname__label input__label">Last name</label>
              <input type="text" className="lname__input register__input" />
            </div>
            <div className="email__input__container reg__input__container">
              <label className="email__label input__label">Email</label>
              <input
                type="email"
                className="email__input register__input"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="phone__input__container reg__input__container">
              <label className="phone__label input__label">Phone</label>
              <input type="tel" className="phone__input register__input" />
            </div>
          </div>
          <div className="register__inputs_sec_1">
            <div className="register__button__container">
              <button className="register__button">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterCard;
