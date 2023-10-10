import { Fragment, useEffect } from "react";
import Landing from "../components/Landing/Landing";
import Form from "../components/Form/Form";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import FeaturedCategories from "../components/Featured/Categories/FeaturedCategories";
import { TabTitle } from "../utils/General";
import Aboutus from "../components/Aboutus/Aboutus";

const Home = () => {
  TabTitle("Home - Shema");

  useEffect(() => {
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
