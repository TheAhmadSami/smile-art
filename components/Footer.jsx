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
      <p className="copyrights">{t("footer")}</p>
      <div className="developer">
        <p>
          {t('developed_by')}
          <i className="fas fa-heart" /> 
        </p>
        <a
          href="http://linkedin.com/in/theahmadsami"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#fff", textDecoration: "underline" }}
        >
          {t("ahmed_sami")}
        </a>
      </div>
    </section>
  );
};

export default Footer;