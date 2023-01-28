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
} from "@sa/components";
import { useDispatch } from "react-redux";
import { setLang } from "@sa/redux/lang";

const Main = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  const getFacebookreviews = () => {
    // Your Access token
    const ACCESS_TOKEN =
      "EAALZCmXSEIxMBADnbPC2tHZCazbbUzcgGoZAzXF2TdZCY2LH0N8mpC9J00AYW6MWxit4c8Kc7V1FG72DLMlamcisoJCGr7bHqEN3ZCTErubfMdOedN4hkPOGlKMZBcImzUt9GeSWVRndKaosVJlsBCt7q9imlZCYzfHHz0o02oZCbbTMxE3xzZCCSA2WwMcuJdUljA4XtwJ97lfgvzZC5BSKXE";

    // page id
    const pageId = "SmileArtDrmagdy";

    // Fetch reviews for the specified page
    fetch(
      `https://graph.facebook.com/${pageId}/ratings?access_token=${ACCESS_TOKEN}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
      });
  };

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

  useEffect(() => {
    getFacebookreviews();
    getLang();
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
