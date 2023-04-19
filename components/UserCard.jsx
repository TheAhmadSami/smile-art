/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";

//styles
import styles from "@sa/styles/components/CustomCard.module.scss";
import { useSelector } from "react-redux";

const UserCard = ({image }) => {
  return (
    <div className={styles["team-card"]}>
      <img src={image} className={styles.img} alt='Smile Art' />
    </div>
  );
};

export default UserCard;
