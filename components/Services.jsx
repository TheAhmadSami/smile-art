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
import { useSelector } from "react-redux";

const Services = () => {
  const { t } = useTranslation();
  const [services, setServices] = useState([]);
  const lang = useSelector((state) => state.lang.value);

  const settings = {
    speed: 500,
    slidesToShow: 2,
  };

  const mystyle = "linear-gradient(267.04deg, #5F818C, #98B8C0)";

  const loadServices = () => {
    get("/services").then((res) => {
      setServices(res.data);
    });
  };

  useEffect(() => {
    loadServices();
  }, []);

  return (
    <section id="services">
      <p className="section-title">
        <span>Our</span> Services
      </p>
      <div className={styles.servicesDetails}>
        {services.length > 0 &&
          services?.map((service, index) => {
            return (
              <CustomCard
                key={index}
                image={service?.image}
                title={lang == 'en' ? service?.titleEn : service?.titleAr}
                description={lang == 'en' ? service?.subtitleEn : service?.subtitleAr}
              />
            );
          })}
      </div>
    </section>
  );
};

export default Services;