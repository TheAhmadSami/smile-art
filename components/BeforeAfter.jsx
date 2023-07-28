/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { Button, Modal, TextField } from "@mui/material";
import SimpleImageSlider from "react-simple-image-slider";
import { useSelector } from "react-redux";

import { get } from "@sa/utils/axios";

//translation
import { useTranslation } from "react-i18next";

//components
import { SectionTitle } from "@sa/components";

//styles
import styles from "@sa/styles/components/Gallery.module.scss";

const BeforeAfter = ({ hideTitle }) => {
  const { t } = useTranslation();
  const lang = useSelector((state) => state.lang.value);
  const [albums, setAlbums] = useState(false);
  const [imageModal, setImageModal] = useState(false);
  const [activeImages, setActiveImages] = useState(false);
  const [image, setImage] = useState("");

  const loadAlbums = async () => {
    get("/before-after").then((res) => {
      setAlbums(res.data);
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
    loadAlbums();
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

  if (albums?.length > 0) {
    return (
      <section id="gallery">
        <p className="section-title light">{t("before_after")}</p>
        <div id={styles["gallery"]} className="__page">
          <div className={styles.content}>
            {albums.length > 0 &&
              albums?.map((album, index) => {
                if (album?.beforeAfterImages?.length > 0) {
                  return (
                    <div key={index}>
                      <div className={styles.albumTitle}>
                        <p>{lang == "en" ? album?.nameEn : album?.nameAr}</p>
                      </div>
                      <div className={styles.imagesContainer}>
                        {album?.beforeAfterImages?.length > 0 &&
                          album?.beforeAfterImages?.map((image) => (
                            <img
                              key={index}
                              src={image?.url}
                              className={styles.img}
                              alt="Smile Art"
                              onClick={() => {
                                setActiveImages(album?.beforeAfterImages);
                                setTimeout(() => {
                                  setImageModal(true);
                                }, 300);
                              }}
                            />
                          ))}
                      </div>
                    </div>
                  );
                }
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
                images={activeImages}
                showBullets={true}
                showNavs={true}
              />
            </div>
          </Modal>
        </div>
      </section>
    );
  } else {
    return <></>;
  }
};

export default BeforeAfter;
