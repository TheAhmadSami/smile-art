/* eslint-disable @next/next/no-img-element */
import React from "react";

//translation
import { useTranslation } from "react-i18next";

//styles
import styles from "@sa/styles/components/SocialContacts.module.scss";
import { useSelector } from "react-redux";

const SocialContacts = () => {
  const { t } = useTranslation();
  const configs = useSelector((state) => state.configs.value);
  const lang = useSelector((state) => state.lang.value);

  const social = [

    {
      icon: "fab fa-facebook-f",
      href: configs?.facebook,
      color: "#1877f2",
    },
    {
      icon: "fab fa-instagram",
      href: configs?.instagram,
      color: "#8a3ab9",
    },
    {
      icon: "fab fa-youtube",
      href: configs?.youtube,
      color: "#ff0000",
    },
    {
      icon: "fab fa-tiktok",
      href: configs?.tiktok,
      color: "#000000",
    },
    {
      icon: "fab fa-snapchat",
      href: configs?.snapchat,
      color: "#fffc00",
      frontColor: "#000",
    },
    {
      icon: "fab fa-twitter",
      href: configs?.twitter,
      color: "#1DA1F2",
    },
  ];

  return (
    <div id={styles.contacts} dir={lang == "en" ? "ltr" : "rtl"}>
      {social.map((item, i) => (
        <a
          key={i}
          href={item?.href}
          className={styles.item}
          style={{ color: item?.frontColor, backgroundColor: item?.color }}
          target="_blank"
          rel="noreferrer"
        >
          <i className={item?.icon}></i>
        </a>
      ))}
    </div>
  );
};

export default SocialContacts;
