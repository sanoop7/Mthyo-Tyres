import { NavLink } from "react-router-dom";
import "./NavLinks.css";

const NavLinks = () => {
  return (
    <nav className="nav__bottom__container">
      <div className="bottom__container">
        <ul className="nav">
          <li className="nav-link">
            <NavLink className="active_nav" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink className="active_nav" to="/tyres">
              Tyres
            </NavLink>{" "}
          </li>
          <li className="nav-link">
            <NavLink className="active_nav" to="/services">
              Services
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink className="active_nav" to="/about">
              About Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavLinks;
