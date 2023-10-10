import React, { useState, useEffect, useRef } from "react";
// import WishCard from '../Card/about/WishCard';
import "./About.css";
import Banner from "../Banner/Banner";
import MyBackgroundImage from "../../asset/img/about-us-banner.jpg";
import BackgroundImage from "../../asset/img/about-img.png";
import about_img_1 from "../../asset/img/about-img-1.png";
import about_img_2 from "../../asset/img/about-img-2.png";
import about_img_3 from "../../asset/img/about-img-3.png";
import arrow_left from "../../asset/img/arrow-left.png";
import ReactLoading from "react-loading";

const About = () => {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      window.scrollTo(0, 0);
    }, 2000);
  }, []);

  const countRef = useRef(null);
  const achievements = [
    {
      img: about_img_1,
      desc: "GOODRIDE - Channel Partner Submit, 19 May 2016",
    },
    {
      img: about_img_2,
      desc: "Strong bonds & Partnerships with -YOKOHAMA",
    },
    {
      img: about_img_3,
      desc: "MATHYO TYRES is a CEAT partner for passenger cars & SUV tyres ",
    },
  ];

  useEffect(() => {
    const targetCount = 12;
    const tempRef = countRef.current;

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

    if (tempRef) {
      observer.observe(tempRef);
    }

    // Clean up the observer when the component unmounts
    return () => {
      if (tempRef) {
        observer.unobserve(tempRef);
      }
    };
  }, []);

  //carosal
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= achievements.length) {
      newIndex = achievements.length - 1;
    }

    setActiveIndex(newIndex);
  };

  return (
    <div className="about">
      {loading ? (
        <ReactLoading
          type="balls"
          color="#FFE26E"
          height={1000}
          width={100}
          className="container h-100 w-10 justify-self-center align-self-center m-auto"
        />
      ) : (
        <>
          <Banner
            path={MyBackgroundImage}
            tittle={"ABOUT US"}
            alignment={"right"}
          />
          <div className="about_content_sec">
            <div className="about__text__container">
              <div className="about__eyebrow">WHAT WE DO</div>
              <h1 className="about__tittle">
                One-Stop Shop for all Car and Auto Repairs
              </h1>
              <div className="about__desc">
                Our garage stands out not just by its size, but for our passion
                for customer service. We understand that customers always have
                alternatives when it comes to automotive care and we have to
                earn your business and referrals each and every day.
              </div>
            </div>
            <div
              className="about__img__container"
              style={{ backgroundImage: `url(${BackgroundImage})` }}
            ></div>
          </div>
          <div className="about_sec_2">
            <div ref={countRef} className="about__header">
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
            <div className="about__slider_cont">
              {activeIndex >= 1 && (
                <div
                  className="arrow_wrapper arrow_left"
                  onClick={() => {
                    updateIndex(activeIndex - 1);
                  }}
                >
                  <img src={arrow_left} alt="item" className="arrow_icon" />
                </div>
              )}
              {activeIndex < 2 && (
                <div
                  className="arrow_wrapper arrow_right"
                  onClick={() => {
                    updateIndex(activeIndex + 1);
                  }}
                >
                  <img src={arrow_left} alt="item" className="arrow_icon" />
                </div>
              )}
              <div className="about__eyebrow">our achievements</div>
              <div className="about__slider_wrapper">
                {achievements.map((item, index) => (
                  <div
                    key={index}
                    className="about__slider_item"
                    style={{ transform: `translate(-${activeIndex * 100}%)` }}
                  >
                    <div
                      style={{ backgroundImage: `url(${item.img})` }}
                      className="slider__img"
                    ></div>
                    <div className="slider_text">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default About;
