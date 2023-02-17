/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";

//styles
import styles from "@sa/styles/components/CustomCard.module.scss";
import { useSelector } from "react-redux";

const CustomCard = ({ title, description, image, link }) => {
  const { t } = useTranslation();
  const lang = useSelector((state) => state.lang.value);

  return (
    <div className={styles["team-card"]}>
      <img src={image} className={styles["img"]} alt={title} />
      <div className={styles["title"]}>{title}</div>
      <div className={styles["job"]}>{description}</div>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className={styles.knowMore}
          dir={lang == 'en' ? 'ltr' : 'rtl'}
        >
          {t("know_more")}
        </a>
      )}
    </div>
  );
};

export default CustomCard;
