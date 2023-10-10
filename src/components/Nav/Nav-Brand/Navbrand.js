import "./NavBrand.css";
import { Link } from "react-router-dom";
import logo from "../../../asset/icons/logo.png";

const NavBrand = () => {
  return (
    <div href="#home" className="navbrand__container">
      <Link  to="/">
        <img className="brand_logo" src={logo} alt="logo"></img>
      </Link>
    </div>
  );
};

export default NavBrand;
