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
  ArticleCard,
} from "@sa/components";
import { useDispatch } from "react-redux";
import { setLang } from "@sa/redux/lang";
import { get } from "@sa/utils/axios";
import { setConfigs } from "@sa/redux/configs";

const Main = () => {
  const { t, i18n } = useTranslation();
  const [articles, setArticles] = useState([]);
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
    } else {
      localStorage.setItem("lang", "en");
    }
    dispatch(setLang(lang ? lang : "en"));
  };

  const getConfigs = () => {
    get("/configs").then((res) => {
      dispatch(setConfigs(res?.data[0]));
    });
  };

  const getArticles = () => {
    get("/article").then((res) => {
      setArticles(res?.data);
    });
  };

  useEffect(() => {
    getLang();
    getConfigs();
    getArticles();
  }, []);

  return (
    <div className="body-content">
      <SocialContacts />
      <Header />

      <div id="feeds">
        {articles?.length > 0 &&
          articles?.map((article, index) => {
            return <ArticleCard key={index} article={article} />
})}
      </div>

      <div id="reviews">
        <FacebookReviews />
        <GoogleReviews />
      </div>

      <Services />
      <Team />
      <Gallery hideTitle={false} />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
};

export default Main;
