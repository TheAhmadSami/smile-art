import React from "react";


import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";



//styles
import styles from "@sa/styles/components/FacebookFeed.module.scss";

const FacebookFeed = () => {
  const { t } = useTranslation();
  return (
    <div id={styles.facebookFeed}>
      <div className={styles.row}>
        <div className={styles.row2}>
          <i className="fab fa-facebook"></i>
          <h1 className={styles.title}>{t("facebookfeed")}</h1>
        </div>
        <h6 className={styles.subtitle}>{t("view_more")}</h6>
      </div>
    </div>
  );
};

export default FacebookFeed;
