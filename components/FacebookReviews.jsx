/* eslint-disable @next/next/no-img-element */
import React, {useState, useEffect} from "react";
import { useTranslation } from "react-i18next";
import moment from 'moment';
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//styles
import styles from "@sa/styles/components/FacebookReviews.module.scss";
import assets from "@sa/assets";
import { useSelector } from "react-redux";

const FacebookReviews = () => {
  const { t } = useTranslation();
  const lang = useSelector((state) => state.lang.value);
  const [reviews, setReviews] = useState([]);

  const fetchReviews = async () => {
    // Replace {page-id} with the actual ID of the Facebook page
    const vsrr4we5fwcf4rvrww4f = "SmileArtDrmagdy";
    // Replace {access-token} with your actual Facebook Access Token
    const serft5w345wctfw3r4f34rc4 =
      "EAALZCmXSEIxMBACYnWRYVsGjBke67M2Ld3pgmeVAIWCnMvia5YHLBgSwpqj5JPuv8xZC2trLfMBZBFOLseZAQMxrOgNPAZBIuasp8famvaJaElwpkyHIqJWPK5hZAGJt3yKEYGzMHuro2u9IshQNBXboV45HihdcsPPy8ysv9rWsdfoF960CCAs5dOY8JySPEZD";

    const res = await fetch(
      `https://graph.facebook.com/${vsrr4we5fwcf4rvrww4f}/ratings?access_token=${serft5w345wctfw3r4f34rc4}`
    );
    const data = await res.json();
    setReviews(data?.data);
  };

  useEffect(() => {
    fetchReviews();
  }, [])

  const settings = {
    speed: 500,
    autoplay: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <div id={styles.facebookReviews}>
      <Slider {...settings} className="slider2222">
        {reviews?.map((review, i) => (
          <div key={i} className={styles.review} dir={lang == 'en' ? 'ltr' : 'rtl'}>
            <div className={styles.content}>
              <div className={styles.header}>
                <div className={styles.info}>
                  <img className={styles.image} src={assets.empty.src} alt="" />
                  <div>
                    <p className={styles.title}>
                      {lang == "en" ? `Client No. ${i++}` : `عميل رقم ${i++}`}
                    </p>
                    <p className={styles.date}>
                      {moment(review?.created_time).format(
                        "DD MMM, YYYY - hh:mm"
                      )}
                    </p>
                  </div>
                </div>
                <img
                  src={assets.facebookLogo.src}
                  alt="smileart facebook logo"
                  className={styles.logo}
                />
              </div>
              <div className={styles.reviewText}>{review?.review_text}</div>
            </div>
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
