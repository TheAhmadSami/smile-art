import React from 'react'
import { Menu } from '.';

//styles
import styles from "@sa/styles/components/Header.module.scss";
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const Header = () => {
  const [t] = useTranslation();
  const lang = useSelector((state) => state.lang.value);
  const configs = useSelector((state) => state.configs.value);


  return (
    <section id="header">
      <Menu />

      <div className="header-content">
        <p className="header-title">
          {t('title')}
        </p>
        <p className="header-desc">
          {lang == "en" ? configs?.aboutEn : configs?.aboutAr}
        </p>
        <div className="header-buttons">
          <a href="#contact">
            <i className="fas fa-info-circle" /> {t("contact_us")}
          </a>
          <a id="ceo_voice_btn">
            <i className="fas fa-user-tie" />
            {t("dr_magdy_word")}
          </a>
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
        dir={lang == 'en' ? 'ltr' : 'rtl'}
      >
        <i className="fas fa-play" />
      </a>
      <div id="close_video">
        <i className="fas fa-times" />
      </div>
    </section>
  );
};

export default Header