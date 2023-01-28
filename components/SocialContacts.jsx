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
import { useTranslation } from "react-i18next";

//styles
import styles from "@sa/styles/components/SocialContacts.module.scss";

const SocialContacts = () => {
  const { t } = useTranslation();

  const social = [
    {
      icon: "fab fa-facebook-f",
      href: "https://www.facebook.com/SmileArtDrmagdy",
      color: "#1877f2",
    },
    {
      icon: "fab fa-twitter",
      href: "https://www.facebook.com/SmileArtDrmagdy",
      color: "#1DA1F2",
    },
    {
      icon: "fab fa-instagram",
      href: "https://instagram.com/smileart.dentalclinic?igshid=YmMyMTA2M2Y=",
      color: "#8a3ab9",
    },
    {
      icon: "fab fa-tiktok",
      href: "https://www.tiktok.com/@smileartdentalcenter?_t=8Wm02VWbR8o&_r=",
      color: "#000000",
    },
    {
      icon: "fab fa-youtube",
      href: "https://www.youtube.com/@smileart-dr.magdyel-ghamry3339",
      color: "#ff0000",
    },
    {
      icon: "fab fa-snapchat",
      href: "https://www.snapchat.com/add/dentist-magdy",
      color: "#fffc00",
      frontColor: "#000",
    },
    {
      icon: "fab fa-whatsapp",
      href: "https://wa.me/+201140086688?text=Hello",
      color: "#25D366",
    },
    {
      icon: "far fa-phone-alt",
      href: "tel: +201140086688",
      color: "#d3ae55",
    },
  ];

  return (
    <div id={styles.contacts}>
      {social.map((item, i) => (
        <a
          key={i}
          href={item?.href}
          className={styles.item}
          style={{ color: item?.frontColor, backgroundColor: item?.color }}
          target="_blank"
          rel="noreferrer"
        >
          <i className={item?.icon}></i>
        </a>
      ))}
    </div>
  );
};

export default SocialContacts;
