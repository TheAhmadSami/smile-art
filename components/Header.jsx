import React from 'react'
import { FacebookFeed, InstagramFeed } from '.';

//styles
import styles from "@sa/styles/components/Header.module.scss";

const Header = () => {
  return (
    <section id="header">
      <div className="menu">
        <a href="http://www.smileart-eg.com" className="main-logo">
          <img src="_code_/media/logo.png" alt="" />
        </a>
        <div className="_menu_">
          <div className="menu-item">
            <a href="#header" className="active">
              Home
            </a>
          </div>
          <div className="menu-item sub-menu">
            <a className="submenu-toggle" href>
              About&nbsp;Us
            </a>
            <div className="_sub-menu_">
              <p>
                <span>
                  <a href id="about" className="_km_">
                    About Us
                  </a>
                </span>
                <span>
                  <a href id="mission" className="_km_">
                    Our Mission
                  </a>
                </span>
                <span>
                  <a href id="vision" className="_km_">
                    Our Vision
                  </a>
                </span>
                <span>
                  <a href id="values" className="_km_">
                    Values
                  </a>
                </span>
              </p>
            </div>
          </div>
          <div className="menu-item">
            <a href="#partners">Partners</a>
          </div>
          <div className="menu-item">
            <a href="#services">Services</a>
          </div>
          <div className="menu-item sub-menu">
            <a className="submenu-toggle" href="#products">
              Products
            </a>
            <div className="_sub-menu_">
              <p>
                <span>
                  <a company="image-access">image access</a>
                </span>
                <span>
                  <a company="scantron">scantron</a>
                </span>
                <span>
                  <a company="addmen">addmen</a>
                </span>
                <span>
                  <a company="avision">avision</a>
                </span>
                <span>
                  <a company="xerox">xerox</a>
                </span>
                <span>
                  <a company="fujitsu">fujitsu</a>
                </span>
                <span>
                  <a company="agi">agi</a>
                </span>
                <span>
                  <a company="indus">indus</a>
                </span>
                <span>
                  <a company="crowley">crowley</a>
                </span>
                <span>
                  <a company="datawin">datawin</a>
                </span>
              </p>
            </div>
          </div>
          <div className="menu-item logo">
            <a href="http://www.smileart-eg.com">
              <img src="_code_/media/logo.png" alt="" />
            </a>
          </div>
          <div className="menu-item">
            <a href="#clients">Clients</a>
          </div>
          <div className="menu-item">
            <a href="#awards">Awards</a>
          </div>
          <div className="menu-item">
            <a href="#projects">Projects</a>
          </div>
          <div className="menu-item">
            <a href="#news">News</a>
          </div>
          <div className="menu-item">
            <a href="#contact">Contact&nbsp;Us</a>
          </div>
        </div>
        <div className="menu-toggle">
          <i />
        </div>
      </div>

      <div className="header-content">
        <p className="header-title">
          Smile Art Modern Systems,
          <br />a leading company since 1986
        </p>
        <p className="header-desc">
          Smile Art was founded to provide local and regional market with
          software and hardware solutions in fields of imaging solution,
          archiving, microfilms, education, item banking, printing and scanning.
        </p>
        <div className="header-buttons">
          <button id="know_more_btn">
            <i className="fas fa-info-circle" /> Know More
          </button>
          <button id="ceo_voice_btn">
            <i className="fas fa-user-tie" /> Voice of CEO
          </button>
        </div>
      </div>

      <div id={styles.feedsContainer}>
        <FacebookFeed />
        <InstagramFeed />
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
      <div id="play_video">
        <i className="fas fa-play" />
      </div>
      <div id="close_video">
        <i className="fas fa-times" />
      </div>
    </section>
  );
}

export default Header