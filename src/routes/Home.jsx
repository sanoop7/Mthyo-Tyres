import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Landing from "../components/Landing/Landing";
import Form from "../components/Form/Form";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import FeaturedItems from "../components/Featured/Items/FetauredItems";
import FeaturedCategories from "../components/Featured/Categories/FeaturedCategories";
import { TabTitle } from "../utils/General";
import Aboutus from "../components/Aboutus/Aboutus";

const Home = () => {
  const [featuredItems, setFeaturedItems] = useState();
  TabTitle("Home - Shema");

  useEffect(() => {
    axios
      .get("https://shema-backend.vercel.app/api/items")
      .then((res) => setFeaturedItems(res.data))
      .catch((err) => console.log(err));

    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <Landing />
      <Aboutus />
      <HowItWorks />
      <Form />
      <FeaturedCategories />
    </Fragment>
  );
};

export default Home;
