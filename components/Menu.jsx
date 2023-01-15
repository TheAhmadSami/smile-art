import React from "react";
import { FacebookFeed, InstagramFeed } from ".";

//styles
import styles from "@sa/styles/components/Header.module.scss";

const Header = () => {
  return (
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

        <div className="menu-item">
          <a href="#feed">About Us</a>
        </div>

        <div className="menu-item">
          <a href="#products">Staff</a>
        </div>
        <div className="menu-item">
          <a href="#services">Services</a>
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
          <a href="#gallery">Gallery</a>
        </div>
        <div className="menu-item">
          <a href="#contact">Contact&nbsp;Us</a>
        </div>
        <div className="menu-item out">
          <a
            href="https://docs.google.com/forms/d/19YeOpGYfoy3AA-SSL_epFJCStcp6_QgtIB-TYL6Gjz8/prefill"
            target="_blank"
            rel="noreferrer"
          >
            Book Now
          </a>
        </div>
      </div>
      <div className="menu-toggle">
        <i />
      </div>
    </div>
  );
};

export default Header;
