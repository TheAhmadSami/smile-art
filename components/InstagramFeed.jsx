import React from "react";
import { useTranslation } from "react-i18next";

//styles
import styles from "@sa/styles/components/InstagramFeed.module.scss";

const InstagramFeed = () => {
  const { t } = useTranslation();
  return (
    <div id={styles.instagramFeed}>
      <div className={styles.row}>
        <div className={styles.row2}>
          <i className="fab fa-instagram"></i>
          <h1 className={styles.title}>{t("instagram_feed")}</h1>
        </div>
      </div>
      {/* <FacebookProvider appId="843984503317267">
        <Page href="https://www.facebook.com/SmileArtDrmagdy" tabs="timeline" />
      </FacebookProvider> */}
    </div>
  );
};

export default InstagramFeed;
