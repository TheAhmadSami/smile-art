import React, { useState } from "react";
import { Menu } from ".";

//styles
import styles from "@sa/styles/components/Header.module.scss";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const Header = ({ small }) => {
  const [t] = useTranslation();
  const lang = useSelector((state) => state.lang.value);
  const configs = useSelector((state) => state.configs.value);
  const [drMagdy, showDrMagdy] = useState(false);

  return (
    <section id="header">
      <Menu small={small}/>

      <div className="header-content">
        <p className="header-title">
          {lang == "ar" ? configs?.titleAr : configs?.titleEn}
        </p>
        <p className="header-desc">
          {lang == "en" ? configs?.aboutEn : configs?.aboutAr}
        </p>
        <div className="header-buttons">
          <a href="#contact">
            <i className="fas fa-info-circle" /> {t("contact_us")}
          </a>
          <a onClick={() => showDrMagdy(true)}>
            <i className="fas fa-user-tie" />
            {t("about_dr_magdy")}
          </a>
        </div>
      </div>

      <div id="ceo-voice" className={`_ceo-voice_ ${drMagdy && "active"}`}>
        <div className="_ceo-voice_">
          <div className="close" onClick={() => showDrMagdy(false)}>
            <i className="fas fa-times"></i>
          </div>
          <div
            className="image"
            style={{ backgroundImage: "url(dr-magdy.jpeg)" }}
          ></div>
          <p className="text" dir={lang == "ar" ? "rtl" : "ltr"}>
            {lang == "ar" ? configs?.wordAr : configs?.wordEn}
            <span>{t("dr_magdy")}</span>
          </p>
        </div>
      </div>

      <div className="header-video">
        <video
          className="sample-video"
          src="videos/video.mp4"
          muted
          loop
          autoPlay
        />
        <div className="original-video">
          <div id="player" />
        </div>
      </div>

      <a
        id="play_video"
        href={configs?.youtubeVideo}
        target="_blank"
        rel="noreferrer"
        dir={lang == "en" ? "ltr" : "rtl"}
      >
        <i className="fas fa-play" />
      </a>
      <div id="close_video">
        <i className="fas fa-times" />
      </div>
    </section>
  );
};

export default Header;
