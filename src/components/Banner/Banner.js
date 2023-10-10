import React from "react";
import "./Banner.css";

function Banner({ path, tittle, alignment }) {
  return (
    <div
      className={`banner_container ${alignment === "left" && "left"}`}
      style={{ backgroundImage: `url(${path})` }}
    >
      <h1
        data-aos="fade-right"
        data-aos-duration="1500"
        className={`banner_tittle ${alignment === "left" && "left"}`}
      >
        {tittle}
      </h1>
    </div>
  );
}

export default Banner;
