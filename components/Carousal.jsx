/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousal = ({ children }) => {
  const [slidesCount, setSlidesCount] = useState(2);

  useEffect(() => {
    function handleResize(window) {
      let windowWidth = window?.target?.innerWidth ?? window?.innerWidth;

      if (windowWidth < 800) {
        setSlidesCount(1);
      } else if (windowWidth > 800 && windowWidth < 1100) {
        setSlidesCount(2);
      } else if (windowWidth > 1100 && windowWidth < 1400) {
        setSlidesCount(3);
      } else if (windowWidth > 1400) {
        setSlidesCount(4);
      }
    }

    handleResize(window);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesCount,
  };
  return <Slider {...settings}>{children}</Slider>;
};

export default Carousal;
