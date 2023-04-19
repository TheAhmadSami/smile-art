/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { Button, Modal, TextField } from "@mui/material";
import SimpleImageSlider from "react-simple-image-slider";
import { get } from "@sa/utils/axios";

//translation
import { useTranslation } from "react-i18next";

//components
import { SectionTitle } from "@sa/components";

//styles
import styles from "@sa/styles/components/Reviews.module.scss";

const FacebookReviews = () => {
  const { t } = useTranslation();
  const [reviews, setReviews] = useState(false);
  const [imageModal, setImageModal] = useState(false);
  const [image, setImage] = useState("");

  const loadReviews = async () => {
    get("/reviews-google").then((res) => {
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

  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id="reviews">
      <p className="section-title light">{t("google_reviews")}</p>
      <div className="clients-container"></div>
      <div id={styles["reviews"]} className="__page">
        <div className={styles.content}>
          {reviews.length > 0 &&
            reviews?.map((item, index) => {
              return (
                <img
                  key={index}
                  src={item?.url}
                  className={styles.img}
                  alt="Smile Art"
                  onClick={() => setImageModal(true)}
                />
              );
            })}
          <a href="https://smileart-eg.com" className={styles.readMore}>
            {t("read_more")}
          </a>
        </div>

        <Modal
          open={imageModal}
          onClose={() => setImageModal(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="imageSliderContainer">
            <SimpleImageSlider
              width={windowWidth > 580 ? 580 : windowWidth}
              height={windowWidth > 580 ? 500 : windowWidth * 0.9}
              images={reviews}
              showBullets={true}
              showNavs={true}
            />
          </div>
        </Modal>
      </div>
    </section>
  );
};

export default FacebookReviews;
