import DrawerNav from "../DrawerNav/DrawerNav";
import NavBrand from "../Nav-Brand/Navbrand";
import "./Container.css";

const Navtop = () => {
  const Scroll = () => {
    let element = document.getElementById("form_sec");
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
    else {
      window.location.href = "/";
    }
  };

  return (
    <div className="nav__top__container">
      <div className="top__container">
        <NavBrand />
        <div className="top__container_right">
          <div className="header_book_button" onClick={() => Scroll()}>
            BOOK AN APPOINTMENT
          </div>
        </div>
        <div className="drawer">
          <DrawerNav />
        </div>
      </div>
    </div>
  );
};

export default Navtop;
