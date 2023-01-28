/* eslint-disable @next/next/no-img-element */
import React, {useState, useEffect} from "react";
import { useTranslation } from "react-i18next";
import moment from 'moment';

//styles
import styles from "@sa/styles/components/FacebookReviews.module.scss";
import assets from "@sa/assets";

const FacebookReviews = () => {
  const { t } = useTranslation();
  const [reviews, setReviews] = useState([]);

  const fetchReviews = async () => {
    // Replace {page-id} with the actual ID of the Facebook page
    const vsrr4we5fwcf4rvrww4f = "SmileArtDrmagdy";
    // Replace {access-token} with your actual Facebook Access Token
    const serft5w345wctfw3r4f34rc4 =
      "EAALZCmXSEIxMBADggZCR2ZBjL4Esyv0y7sZC4SqoVzZCAemfnCLC6fNtuGu1HobJgfReWy8SMucjayIkqaNjanMk2XOHkwQ2RAaAByZCqo3uCVINZAhuD1w5detSH7UOUhEdetHd5jdt2qxjtgCjxu5LT0Hs1SDM0BFtnJX8X8ntC8cNwsjAuSVlnkUbkJ6fy3ZCqehBmkUhu9pFE6oeAZAYz";

    const res = await fetch(
      `https://graph.facebook.com/${vsrr4we5fwcf4rvrww4f}/ratings?access_token=${serft5w345wctfw3r4f34rc4}`
    );
    const data = await res.json();
    setReviews(data?.data);
  };

  useEffect(() => {
    fetchReviews();
  }, [])


  return (
    <div id={styles.facebookReviews}>
      {reviews.map((review, i) => (
        <div key={i} className={styles.review}>
          <div className={styles.header}>
            <div className={styles.info}>
              <img className={styles.image} src={assets.empty.src} alt="" />
              <div>
                <p className={styles.title}>{t("unknkown")}</p>
                <p className={styles.date}>{moment(review?.created_time).format('DD MMM, YYYY - hh:mm')}</p>
              </div>
            </div>
            <img src={assets.facebookLogo.src} alt='smileart facebook logo' className={styles.logo} />
          </div>
          <div className={styles.reviewText}>{review?.review_text}</div>
          <a href='https://www.facebook.com/SmileArtDrmagdy/reviews' className={styles.readMore}>{t('read_more')}</a>
        </div>
      ))}
    </div>
  );
};

export default FacebookReviews;
