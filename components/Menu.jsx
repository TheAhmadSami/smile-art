/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { FacebookFeed, InstagramFeed } from ".";

//styles
import styles from "@sa/styles/components/Header.module.scss";
import assets from "@sa/assets";
import { useTranslation } from "react-i18next";
import { changeLang } from "@sa/utils/changeLanguage";
import { useSelector } from "react-redux";

const Header = () => {
  const { t } = useTranslation();

  const [scroll, setScroll] = useState(false);
  const [toggle, setToggle] = useState(false);
  const lang = useSelector(state => state.lang.value);

  const handleScroll = (e) => {
    if (e.target.documentElement.scrollTop > 150) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`${scroll ? "menu scroll" : "menu"} ${toggle ? "active" : ""}`}
    >
      <a href="http://www.smileart-eg.com" className="main-logo">
        <img src={assets.logo.src} alt="" />
      </a>
      <div className="_menu_">
        <div className="menu-item">
          <a href="#header" className="active">
            {t("home")}
          </a>
        </div>

        <div className="menu-item">
          <a href="#feed">{t("who_we_are")}</a>
        </div>

        <div className="menu-item">
          <a href="#products">{t("team")}</a>
        </div>
        <div className="menu-item">
          <a href="#services">{t("services")}</a>
        </div>
        <div className="menu-item logo">
          <a href="http://www.smileart-eg.com">
            <img src={assets.logo.src} alt="" />
          </a>
        </div>
        <div className="menu-item">
          <a href="#gallery">{t("gallery")}</a>
        </div>
        <div className="menu-item">
          <a href="#contact">{t("contact_us")}</a>
        </div>
        <div className="menu-item out">
          <a
            href="https://docs.google.com/forms/d/19YeOpGYfoy3AA-SSL_epFJCStcp6_QgtIB-TYL6Gjz8/prefill"
            target="_blank"
            rel="noreferrer"
          >
            {t("book_now")}
          </a>
        </div>

        <div className="menu-item">
          <a href="#clients">
            {lang == "en" ? (
              <span onClick={() => changeLang("ar")}>العربية</span>
            ) : (
              <span onClick={() => changeLang("en")}>English</span>
            )}
          </a>
        </div>
      </div>
      <div className="menu-toggle" onClick={() => setToggle((old) => !old)}>
        <i />
      </div>
    </div>
  );
};

export default Header;
