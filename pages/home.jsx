import React, { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { get } from "@sa/utils/axios";

//components
import { Banner, CustomCard, SectionTitle } from "@sa/components";

//styles
import styles from "@sa/styles/pages/Home.module.scss";
import assets from "@sa/assets";

const Home = () => {
  const { t } = useTranslation();
  const [services, setServices] = useState([]);
  const mystyle = "linear-gradient(267.04deg, #5F818C, #98B8C0)";

  const loadServices = () => {
    get("/services").then((res) => {
      setServices(res.data.slice(0, 4));
    });
  };

  useEffect(() => {
    loadServices();
  }, []);

  return (
    <div id={styles.home} className="__page">
      <SectionTitle title={t("home")} />
      <Banner
        title2={t("offers")}
        background="#5F818C"
        image={assets.mainBanner}
        title={t("home_banner_title")}
        subtitle={t("home_banner_subtitle")}
      />

      <SectionTitle subTitle={t('show_more')}/>
      <div className={styles.services}>
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

export default Home;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
