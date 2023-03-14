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
import styles from "@sa/styles/components/Gallery.module.scss";

const FacebookReviews = () => {
  const { t } = useTranslation();
  const [reviews, setReviews] = useState(false);
  const [imageModal, setImageModal] = useState(false);
  const [image, setImage] = useState("");

  const loadReviews = async () => {
    get("/feedback-whatsapp").then((res) => {
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
    <section id="gallery">
      <p className="section-title">
        {t('Whatsapp Feedback')}
      </p>
      <div className="clients-container"></div>
      <div id={styles["gallery"]} className="__page">
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
        </div>

        <Modal
          open={imageModal}
          onClose={() => setImageModal(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="imageSliderContainer">
            <SimpleImageSlider
              width={1920 / 2.5}
              height={1080 / 2.5}
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
