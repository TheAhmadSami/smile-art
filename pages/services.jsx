import React, { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { get } from "@sa/utils/axios";

//components
import { SectionTitle, CustomCard, BannerBg } from "@sa/components";

//data
import ServicesData from "@sa/fakers/services";

//styles
import styles from "@sa/styles/pages/Services.module.scss";
import Banner from "@sa/components/Banner";
import assets from "@sa/assets";

const Services = () => {
  const { t } = useTranslation();
  const [services, setServices] = useState([]);

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
    <div id={styles.Services} className="__page">
      <SectionTitle title={t("services")} />
      <BannerBg
        backgroundImage={assets.servicesBg.src}
        title={t("services_banner_title")}
        subtitle={t("services_banner_subtitle")}
      />
      <SectionTitle title={t("services_details")} />

      <div className={styles.servicesDetails}>
        {services.length > 0 &&
          services?.map((service, index) => {
            return (
              <CustomCard
                key={index}
                image={service?.image}
                title={service?.title}
                description={service?.subtitle}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Services;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
