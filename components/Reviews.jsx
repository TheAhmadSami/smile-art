/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { get, mediaLink } from "@sa/utils/axios";

//translation
import { useTranslation } from "react-i18next";

//components
import { Carousal, SectionTitle } from "@sa/components";

//styles
import styles from "@sa/styles/components/Reviews.module.scss";

const Reviews = () => {
  const { t } = useTranslation();
  const [reviews, setReviews] = useState(false);
  const [imageModal, setImageModal] = useState(false);
  const [image, setImage] = useState("");

  const loadReviews = async () => {
    get("/reviews").then((res) => {
      setReviews(res.data);
    });
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const closeModal = () => {
    setImage(null);
    setModalStatus(false);
  };

  useEffect(() => {
    loadReviews();
  }, []);

  

  return (
    <section id="reviews">
      <p className="section-title light">{t("reviews")}</p>
      <div className="clients-container"></div>
      <div id={styles["reviews"]} className="__page">
        <div className={styles.content}>
          <Carousal>
            {reviews.length > 0 &&
              reviews?.map((item, index) => {
                return (
                  item.type == "image" && (
                    <div key={index}>
                      <img
                        src={`${mediaLink}/reviews/${item?.url}`}
                        className={styles.img}
                        alt="Smile Art"
                        onClick={() => setImageModal(true)}
                      />
                    </div>
                  )
                );
              })}
          </Carousal>
        </div>
        <div className={styles.content}>
          <Carousal>
            {reviews.length > 0 &&
              reviews?.map((item, index) => {
                return (
                  item.type == "video" && (
                    <div key={index}>
                      <div className={styles.video}>
                        <iframe
                          src={item?.url}
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen
                        ></iframe>
                      </div>
                    </div>
                  )
                );
              })}
          </Carousal>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
