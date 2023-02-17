/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import moment from "moment";
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//styles
import styles from "@sa/styles/components/FacebookReviews.module.scss";
import assets from "@sa/assets";
import { get } from "@sa/utils/axios";
import axios from "axios";

const FacebookReviews = () => {
  const { t } = useTranslation();
  const [reviews, setReviews] = useState([]);

  const fetchReviews = async () => {
    const apiKey = "AIzaSyCaHA4Ji_C6V4iz7Kj_FdHylkLq5jN1aoo";
    const placeId = "ChIJVZrRYRUWWBQR2MTP9Ykil24";
    // axios({
    //   method: "GET",
    //   url: `https://maps.googleapis.com/maps/api/place/details/json?key=${apiKey}&placeid=${placeId}`,
    //   headers: {
    //     "Access-Control-Allow-Origin": "*",
    //   },
    // }).then((res) => {
    //   console.log(res?.data);
    // });
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const settings = {
    speed: 500,
    autoplay: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div id={styles.facebookReviews}>
      <Slider {...settings} className="slider2222">
        {reviews?.map((review, i) => (
          <div key={i} className={styles.review}>
            <div className={styles.header}>
              <div className={styles.info}>
                <img className={styles.image} src={assets.empty.src} alt="" />
                <div>
                  <p className={styles.title}>{t("unknkown")}</p>
                  <p className={styles.date}>
                    {moment(review?.created_time).format(
                      "DD MMM, YYYY - hh:mm"
                    )}
                  </p>
                </div>
              </div>
              <img
                src={assets.googleLogo.src}
                alt="smileart facebook logo"
                className={styles.logo}
              />
            </div>
            <div className={styles.reviewText}>{review?.review_text}</div>
            <a
              href="https://www.facebook.com/SmileArtDrmagdy/reviews"
              className={styles.readMore}
            >
              {t("read_more")}
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FacebookReviews;
