import { Link } from "react-router-dom";
import "./CategoryCard.css";
import { Button } from "@mui/material";

const CategoryCard = (props) => {
  const Scroll = () => {
    let element = document.getElementById("form_sec");
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      className="category__card__card"
      data-aos="flip-left"
      data-aos-duration="1000"
    >
      <div className="category__image">
        <div className="category__name">
          <span>{props.data.name}</span>
        </div>
        <ul className="category__desc">
          {props.data.desc.map((i) => (
            <li>{i}</li>
          ))}
        </ul>
      </div>
      <div className="category__card__detail">
        <div className="category__card__action">
          <Link to="/services">
            <Button
              onClick={() => Scroll()}
              variant="outlined"
              sx={[
                {
                  "&:hover": {
                    backgroundColor: "none",
                    borderColor: "#FFE26E",
                    color: "#FFE26E",
                  },
                  borderRadius: "20px",
                  borderColor: "#FFE26E",
                  backgroundColor: "#FFE26E",
                  color: "#000",
                  fontWeight: "700",
                },
              ]}
            >
              Know More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
