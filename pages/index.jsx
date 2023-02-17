import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import {
  Header,
  FacebookFeed,
  Services,
  Team,
  Gallery,
  Clients,
  SocialContacts,
  Footer,
  Contact,
  Location,
  InstagramFeed,
  FacebookReviews,
  GoogleReviews,
} from "@sa/components";
import { useDispatch } from "react-redux";
import { setLang } from "@sa/redux/lang";
import { get } from "@sa/utils/axios";
import { setConfigs } from "@sa/redux/configs";

const Main = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const getLang = () => {
    let lang = localStorage.getItem("lang");
    if (lang) {
      switch (lang) {
        case "ar":
          document.querySelector("html").setAttribute("dir", "rtl");
          i18n.changeLanguage("ar");
          break;
        case "en":
          document.querySelector("html").setAttribute("dir", "ltr");
          i18n.changeLanguage("en");
          break;
      }
    }else{
      localStorage.setItem("lang", 'en');
    }
    dispatch(setLang(lang ? lang : 'en'));
    
  };

  const getConfigs = () => {
    get('/configs').then(res => {
      dispatch(setConfigs(res?.data[0]));
    })
  }

  useEffect(() => {
    getLang();
    getConfigs();
  }, []);

  return (
    <div className="body-content">
      <SocialContacts />
      <Header />

      <div id="feeds">
        <FacebookFeed />
        <InstagramFeed />
      </div>

      <FacebookReviews />
      <GoogleReviews />

      <div id="ceo-voice">
        <div className="_ceo-voice_">
          {/* <img src="_code_/media/ceo.jpg" alt="" /> */}
          <p className="text">
            {t("who_we_are_desc")}
            <span>Eng. Magdy El Ghamry</span>
          </p>
        </div>
      </div>

      <Services />
      <Team />
      <Gallery />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
};

export default Main;
