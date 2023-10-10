import { useEffect, useState } from "react";
import ServicesCategory from "./Container/ServicesCategory";
import "./Services.css";
import ReactLoading from "react-loading";
import Banner from "../Banner/Banner";
import MyBackgroundImage from "../../asset/img/service-banner.jpg";
import ServiceMaintenance from "../../asset/img/Service-Maintenance.png";
import MechanicalRepair from "../../asset/img/mechanical.png";
import AutoElectricalRepair from "../../asset/img/auto-electrical-repair.png";
import ACServices from "../../asset/img/Ac-Service.png";
import BodyRepair from "../../asset/img/body-repair.png";
import Retrofits from "../../asset/img/retrofits.png";

const Services = () => {
  const [menItems, setMenItems] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setMenItems([
        {
          name: "Service and Maintenance",
          img: ServiceMaintenance,
          desc: "We cover everything from basic oil change to complex engine repair.",
        },
        {
          name: "Mechanical Repair",
          img: MechanicalRepair,
          desc: "Our services are held to the same standards as the main dealerships.",
        },
        {
          name: "Auto Electrical Repair",
          img: AutoElectricalRepair,
          desc: "The electrical system of your car is a complex network.",
        },
        {
          name: "A/C Services",
          img: ACServices,
          desc: "It’s the best practice to get the air conditioning system checked.",
        },
        {
          name: "Body Repair",
          img: BodyRepair,
          desc: "Our state-of-the-art facility for painting and body repair backed our team.",
        },
        {
          name: "Retrofits",
          img: Retrofits,
          desc: "Stuck with hesitation to switch to a new car? Having intimacy with your old car.",
        },
      ]);
      setLoading(false);
      window.scrollTo(0, 0);
    }, 2000);
  }, []);

  return (
    <div className="services__contianer">
      {loading && (
        <ReactLoading
          type="balls"
          color="#FFE26E"
          height={100}
          width={100}
          className="container h-100 w-10 justify-self-center align-self-center m-auto"
        />
      )}

      {menItems && (
        <>
          <Banner
            path={MyBackgroundImage}
            tittle={"SERVICES"}
            alignment={"left"}
          />
          <ServicesCategory name="Men" key="men" items={menItems} />
        </>
      )}
      {console.log(menItems)}
    </div>
  );
};

export default Services;
