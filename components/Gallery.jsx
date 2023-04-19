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

const Gallery = ({hideTitle}) => {
  const { t } = useTranslation();
  const [gallery, setGallery] = useState(false);
  const [imageModal, setImageModal] = useState(false);
  const [image, setImage] = useState("");

  const loadGallery = async () => {
    get("/gallery").then((res) => {
      setGallery(res.data);
    });
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const addToGallery = () => {
    let data = new FormData();
    data.append("image", image);

    post("/gallery", data).then((res) => {
      closeModal();
      loadGallery();
    });
  };

  const closeModal = () => {
    setImage(null);
    setModalStatus(false);
  };

  useEffect(() => {
    loadGallery();
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
    <section id="gallery">
      {hideTitle && <p className="section-title light">{t("gallery")}</p>}
      <div id={styles["gallery"]} className="__page">
        <div className={styles.content}>
          {gallery.length > 0 &&
            gallery?.map((item, index) => {
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
              width={windowWidth > 500 ? 500 : windowWidth}
              height={windowWidth > 500 ? 500 : windowWidth}
              images={gallery}
              showBullets={true}
              showNavs={true}
            />
          </div>
        </Modal>
      </div>
    </section>
  );
};

export default Gallery;
