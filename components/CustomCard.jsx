/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";

//styles
import styles from "@sa/styles/components/CustomCard.module.scss";
import { useSelector } from "react-redux";

const CustomCard = ({ title, description, image, link, onClick, isService}) => {
  const { t } = useTranslation();
  const lang = useSelector((state) => state.lang.value);

  return (
    <div className={styles["team-card"]}>
      {/* <img src={image} className={styles["img"]} alt={title} /> */}
      <div
        className={styles.img}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className={styles["title"]}>{title}</div>
      <div className={styles["desc"]}>{description}</div>
      {isService && (
        <p
          onClick={onClick}
          className={styles.knowMore}
          dir={lang == "en" ? "rtl" : "ltr"}
        >
          {t("know_more")}
        </p>
      )}
    </div>
  );
};

export default CustomCard;
