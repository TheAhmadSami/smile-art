/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { Button, Modal, TextField } from "@mui/material";
import SimpleImageSlider from "react-simple-image-slider";
import { get } from "@sa/utils/axios";
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//translation
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

//components
import { SectionTitle } from "@sa/components";

//styles
import styles from "@sa/styles/components/Clients.module.scss";

const Gallery = ({data, google}) => {
  const { t } = useTranslation();
  
  const [imageModal, setImageModal] = useState(false);
  const [image, setImage] = useState(0);

  const openModal = (index) => {
    setImage(index);
    setImageModal(true);
  };

  const settings = {
    speed: 500,
    autoplay: true,
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 2,
  };

  return (
    <div id={styles.clients} className="__page">
      <Slider {...settings} className="slider2222">
        {data.length > 0 &&
          data?.map((item, index) => {
            return (
              <img
                key={index}
                src={item?.url}
                className={styles.img}
                alt="Smile Art"
                onClick={() => openModal(index)}
              />
            );
          })}
        <a
          className={styles.viewMore}
          href={google ? "https://google.com/" : "https://fb.com/"}
        >
          <p>View More</p>
        </a>
      </Slider>

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
            images={data}
            showBullets={true}
            startIndex={image}
            showNavs={true}
          />
        </div>
      </Modal>
    </div>
  );
};

export default Gallery;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
