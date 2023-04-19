import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { get } from "@sa/utils/axios";
import Slider from "react-slick";
import { Button, Modal, TextField } from "@mui/material";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//components
import { CustomCard, Gallery } from "@sa/components";

//styles
import styles from "@sa/styles/components/Services.module.scss";
import { useSelector } from "react-redux";

const Services = () => {
  const { t } = useTranslation();
  const [services, setServices] = useState([]);
  const [activeService, setActiveService] = useState([]);
  const [modalStatus, setModalStatus] = useState(false);
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
      <p className="section-title">{t("services")}</p>
      <div className={styles.servicesDetails}>
        {services.length > 0 &&
          services?.map((service, index) => {
            return (
              <CustomCard
                key={index}
                image={service?.image}
                title={lang == "en" ? service?.titleEn : service?.titleAr}
                description={
                  lang == "en" ? service?.subtitleEn : service?.subtitleAr
                }
                link={service?.link}
                onClick={() => {
                  setActiveService(service);
                  setModalStatus(true);
                }}
              />
            );
          })}
      </div>

      <Modal
        open={modalStatus}
        onClose={() => setModalStatus(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="serviceModal">
          {console.log(activeService)}
          <div
            className={styles.closeService}
            onClick={() => setModalStatus(false)}
          >
            <i className="fas fa-times"></i>
          </div>

          <div className={styles.serviceContent}>
            <div
              className={styles.img}
              style={{ backgroundImage: `url(${activeService?.image})` }}
            ></div>
            <div className={styles.info}>
              <div className={styles["title"]}>
                {lang == "en" ? activeService?.titleEn : activeService?.titleAr}
              </div>
              <div className={styles["desc"]}>
                {lang == "en"
                  ? activeService?.subtitleEn
                  : activeService?.subtitleAr}
              </div>
            </div>
          </div>
          <Gallery />
        </div>
      </Modal>
    </section>
  );
};

export default Services;
