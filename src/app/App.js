import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../routes/Home";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ManageAccount from "../components/Account/ManageAccount/ManageAccount";
import MyAccount from "../components/Account/MyAccount/MyAccount";
import Services from "../components/Services/Services";
import ItemView from "../routes/ItemView";
import CategoryView from "../routes/CategoryView";
import SearchView from "../routes/Search";
import CartItemsProvider from "../Context/CartItemsProvider";
import Login from "../components/Authentication/Login/Login";
import Register from "../components/Authentication/Register/Register";
import Aboutus from "../components/Aboutus/Aboutus";
import WishItemsProvider from "../Context/WishItemsProvider";
import DrawerNav from "../components/Nav/DrawerNav/DrawerNav";
import Checkout from "../components/Checkout/Checkout";
import SearchProvider from "../Context/SearchProvider";
import Aos from "aos";
import About from "../components/About/About";
import ShareBtn from "../components/ShareBtn/ShareBtn";

function App() {
  Aos.init();

  return (
    <CartItemsProvider>
      <WishItemsProvider>
        <SearchProvider>
          <Router>
            <Header />
            <ShareBtn />
            <Routes>
              <Route index element={<Home />} />

              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/wishlist" element={<Aboutus />} />
              <Route path="/tyres" element={<SearchView />} />
            </Routes>
            <Footer />
            <Routes>
              <Route path="/admin" element={<Aboutus />} />
            </Routes>
          </Router>
        </SearchProvider>
      </WishItemsProvider>
    </CartItemsProvider>
  );
}

export default App;
