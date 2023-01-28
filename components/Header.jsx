import React from 'react'
import { Menu } from '.';

//styles
import styles from "@sa/styles/components/Header.module.scss";
import { useTranslation } from 'react-i18next';

const Header = () => {

  const [t] = useTranslation();

  return (
    <section id="header">
      <Menu />

      <div className="header-content">
        <p className="header-title">
          Smile Art Clinic,
          <br />a leading dentists since 1999
        </p>
        <p className="header-desc">{t("who_we_are_desc")}</p>
        <div className="header-buttons">
          <a href="#contact">
            <i className="fas fa-info-circle" /> {t("contact_us")}
          </a>
          <a id="ceo_voice_btn">
            <i className="fas fa-user-tie" /> Voice of of Dr. Magdy
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
        href="https://www.youtube.com/channel/UCpsL8K_LKaA1Gz-Q8R6a0qA?sub_confirmation=1"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fas fa-play" />
      </a>
      <div id="close_video">
        <i className="fas fa-times" />
      </div>
    </section>
  );
}

export default Header