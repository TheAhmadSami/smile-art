/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousal = ({ children }) => {

  const [slidesCount, setSlidesCount] = useState(1);
  useEffect(() => {}, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesCount,
    responsive: [],
  };
  return <Slider {...settings}>{children}</Slider>;
};

export default Carousal;
