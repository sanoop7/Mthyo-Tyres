import Navbottom from "../Nav/Nav-Links/NavLinks";
import Navtop from "../Nav/Container/Container";
import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [hideHeader, setHideHeader] = useState(false);

  const handleScroll = () => {
    const isScrollingDown =
      window.scrollY > (window.lastScrollY > 200 ? window.lastScrollY : 200);
    window.lastScrollY = window.scrollY;

    if (isScrollingDown) {
      setHideHeader(true);
    } else {
      setHideHeader(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`header__container ${hideHeader && "hide__header"}`}>
      <Navtop />
      <Navbottom />
    </div>
  );
};

export default Header;
