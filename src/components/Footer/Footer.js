import "./Footer.css";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import logo from "../../asset/icons/logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer__container">
        <div className="footer__items__container">
          <div className="footer__help__container">
            <div className="footer__help__header">
              <img className="brand_logo" src={logo} alt="logo"></img>
            </div>
            {/* <ul className="fotter__help__links">
              <li className="help__link">
                <a href="/"> Shipping</a>
              </li>
              <li className="help__link">
                <a href="/">Refund</a>
              </li>
              <li className="help__link">
                <a href="/">FAQ</a>
              </li>
              <li className="help__link">
                <a href="/">Accessiblity</a>
              </li>
            </ul> */}
          </div>
          <div className="footer__contact__container">
            <div className="footer__contact__header">
              <h1>Contact Us</h1>
            </div>
            <ul className="footer__contacts">
              <li className="footer__contact">
                <LocalPhoneIcon /> <span>+971 55 372 3389</span>
              </li>
              <li className="footer__contact">
                <EmailIcon /> <span>info@mathyotyres.ae</span>
              </li>
              <li className="footer__contact">
                <LocationOnIcon /> <span>Al Quoz Industrial, Area 4</span>
              </li>
            </ul>
          </div>
          <div className="footer__social__link__container">
            <div className="footer__social__link__header">
              <h1>Stay Connected</h1>
            </div>
            <ul className="footer__social__links">
              <li className="social__link">
                <TwitterIcon />
              </li>
              <li className="social__link">
                <InstagramIcon />
              </li>
              <li className="social__link">
                <YouTubeIcon />
              </li>
              <li className="social__link">
                <TelegramIcon />
              </li>
              <li className="social__link">
                <PinterestIcon />
              </li>
            </ul>
          </div>
        </div>
        <div className="fotter__copyright__container">
          <ul className="nav">
            <li className="footer__copyright">©2021 Mathyo Tyres Trading</li>
            <li className="footer__terms__condition">L.L.C.</li>
            <li className="footer__privacy__policy"> All rights reserved.</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
