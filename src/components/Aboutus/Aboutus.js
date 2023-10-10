import React, { useState, useEffect, useRef } from "react";
// import WishCard from '../Card/aboutus/WishCard';
import "./Aboutus.css";

const Aboutus = () => {
  const [count, setCount] = useState(0);

  const countRef = useRef(null);

  useEffect(() => {
    const targetCount = 12;

    const handleScroll = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const interval = setInterval(() => {
            setCount((prevCount) => {
              const increment = Math.ceil((targetCount - prevCount) / 10);
              return prevCount + increment;
            });
          }, 200);

          // Clean up the interval when the component unmounts or is no longer in the viewport
          return () => {
            clearInterval(interval);
          };
        }
      });
    };

    const observer = new IntersectionObserver(handleScroll, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust the threshold value as needed to control when the animation starts
    });

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    // Clean up the observer when the component unmounts
    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  return (
    <div className="aboutus">
      <div ref={countRef} className="aboutus__header">
        <div className="experiance_container">
          <h1 className="experiance_count">{count}</h1>
          <div>
            <h1 className="experiance_count_plus">+</h1>
            <div className="experiance_text">
              YEARS OF REMARKABLE EXPERIENCE
            </div>
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="experiance_container_text"
        >
          PREMIUM CAR SERVICE MATCHED WITH
          <span className="experiance_container_text_2">
            {" "}
            GREAT WORKMANSHIP.
          </span>
        </div>
      </div>
      <div className="aboutus__text__container">
        <div className="aboutus__eyebrow">ABOUT US</div>
        <div className="aboutus__desc">
          We specialize in providing you with top quality tyres that’ll make
          your vehicle perform to the best of its ability. Our Tyre Shop has a
          wide range of tyre brands for a variety of vehicles. We aim to supply
          our customers with the best prices and always see to it that our
          inventory is well stocked. Let us know what your vehicle needs or if
          you’re not quite sure, come by our store to speak with one of our
          expert team members.
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
