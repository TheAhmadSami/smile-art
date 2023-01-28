import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { get } from "@sa/utils/axios";
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//components
import { CustomCard } from "@sa/components";

//styles
import styles from "@sa/styles/components/Services.module.scss";

const Footer = () => {
  const { t } = useTranslation();


  return (
    <section id="footer">
      <p className="copyrights">© 2023 Smile Art Clinic, All Rights Reserved</p>
      <div className="developer">
        <p>
          Developed with <i className="fas fa-heart" /> By :
        </p>
        <a
          href="http://linkedin.com/in/theahmadsami"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#fff", textDecoration: "underline" }}
        >
          Ahmad Sami
        </a>
        {/* <a href="http://ahmedsami.tk" target="_blank"><img src="_code_/media/ahmed-sami-light.svg" alt=""></a> */}
      </div>
    </section>
  );
};

export default Footer;