/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/swiper.min.css";

//translation
import { useTranslation } from "react-i18next";

//components
import { SectionTitle } from "@sa/components";

//styles
import styles from "@sa/styles/components/Reviews.module.scss";

const Carousal = ({ children, swiperOptions }) => {

  swiperOptions = swiperOptions ?? {
    spaceBetween: 5,
    navigation: true,
    pagination: { clickable: true },
    autoplay: true,

    breakpoints: {
      1500: {
        slidesPerView: 4,
      },
      1250: {
        slidesPerView: 3,
      },

      825: {
        slidesPerView: 2,
      },
      480: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
  };
  return (
    <Swiper {...swiperOptions}>
      {children}
    </Swiper>
  );
};

export default Carousal;
