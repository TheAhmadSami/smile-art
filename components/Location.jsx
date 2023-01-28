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

const Location = () => {
  const { t } = useTranslation();


  return (
    <section id="location">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.615331481946!2d31.368697315029614!3d30.105201222654976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458161561d19a55%3A0x6e972289f5cfc4d8!2sSmile%20Art%20-%20Dr.Magdy%20ElGhamry!5e0!3m2!1sen!2seg!4v1673699023320!5m2!1sen!2seg"
        frameBorder={0}
        style={{ border: 0 }}
        allowFullScreen
      />
    </section>
  );
};

export default Location;