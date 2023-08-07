/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { FacebookFeed, InstagramFeed } from ".";

//styles
import styles from "@sa/styles/components/Header.module.scss";
import assets from "@sa/assets";
import { useTranslation } from "react-i18next";
import { changeLang } from "@sa/utils/changeLanguage";
import { useDispatch, useSelector } from "react-redux";
import { setReservation } from "@sa/redux/reservation";

const ArticleMenu = ({ small }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.lang.value);
  const [scroll, setScroll] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [menuItems, setMenuItems] = useState([
    {
      label: "home",
      href: `/`,
    },
    {
      label: "reviews",
      href: "/#reviews",
    },
    {
      label: "team",
      href: "/#team",
    },
    {
      label: "logo",
      href: "",
      isLogo: true,
    },
    {
      label: "services",
      href: "/#services",
    },
    {
      label: "gallery",
      href: "/#gallery",
    },
    {
      label: "contact_us",
      href: "#contact",
    },
  ]);

  const handleScroll = (e) => {
    if (e.target.documentElement.scrollTop > 150) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const goTo = (itemId) => {
    setToggle(false);
    location.href = itemId;
  };

  return (
    <div
      className={`${small ? "menu scroll" : "menu"} ${toggle ? "active" : ""}`}
    >
      <a href="http://www.smileart-eg.com" className="main-logo">
        <img src={assets.logo.src} alt="" />
      </a>

      <div
        className="book-now"
        onClick={() => {
          dispatch(setReservation(true));
        }}
      >
        {t("book_now")}
      </div>

      <div className="_menu_">
        {menuItems.map((item, index) => {
          return item?.isLogo ? (
            <div className="menu-item logo">
              <a href="http://www.smileart-eg.com">
                <img src={assets.logo.src} alt="" />
              </a>
            </div>
          ) : (
            <div key={index} className="menu-item">
              <a
                onClick={() => goTo(item?.href)}
                target={item?.isOut && "_blank"}
                rel={item?.isOut && "noreferrer"}
              >
                {t(item?.label)}
              </a>
            </div>
          );
        })}

        <div className="lang-toggle">
          <p
            className={lang == "en" && "active"}
            onClick={() => changeLang("en")}
          >
            EN
          </p>
          <p
            style={{ fontFamily: "Arial", fontSize: "16px" }}
            className={lang == "ar" && "active"}
            onClick={() => changeLang("ar")}
          >
            ع
          </p>
        </div>
      </div>
      <div className="menu-toggle" onClick={() => setToggle((old) => !old)}>
        <i />
      </div>
    </div>
  );
};

export default ArticleMenu;
