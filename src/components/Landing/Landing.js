import "./Landing.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Landing = () => {
  return (
    <div className="landing__container">
      <div className="landing__header__container">
        <div className="landing__header">
          <h3
            className="landing__header__discount"
            data-aos="fade-right"
            data-aos-delay="500"
            data-aos-duration="1000"
          >
            UP TO 15% DISCOUNT
          </h3>
          <h1
            className="landing__header__main"
            data-aos="fade-left"
            data-aos-delay="1000"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
          >
            How Can I Help With Your Car Today
          </h1>
          <Link to="#form_sec" data-aos="flip-left" data-aos-delay="2000">
            <Button
              variant="outlined"
              sx={[
                {
                  width: "190px",
                  height: "50px",
                  borderRadius: "20px",
                  fontWeight: "700",
                  backgroundColor: "none",
                  borderColor: "black",
                  color: "black",
                },
                {
                  "&:hover": {
                    backgroundColor: "black",
                    color: "#FFE26E",
                    borderColor: "black",
                  },
                },
              ]}
            >
              REQUEST QUOTE NOW
            </Button>
          </Link>
        </div>
      </div>
      <div
        data-aos="fade-right"
        data-aos-duration="2000"
        className="landing__image__container"
      ></div>
    </div>
  );
};

export default Landing;
