import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import {
  Header,
  Services,
  Team,
  Gallery,
  SocialContacts,
  Footer,
  Contact,
  Reviews,
  Articles,
  Meta,
} from "@sa/components";
import { useDispatch, useSelector } from "react-redux";
import { setLang } from "@sa/redux/lang";
import { get } from "@sa/utils/axios";
import { setConfigs } from "@sa/redux/configs";
import { Fab, Action } from "react-tiny-fab";
import "react-tiny-fab/dist/styles.css";

const Main = ({ configs }) => {
  const { t, i18n } = useTranslation();
  const lang = useSelector((state) => state.lang.value);
  const dispatch = useDispatch();
  dispatch(setConfigs(configs));
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

  const social = [
    {
      icon: "fab fa-whatsapp",
      href: `https://wa.me/${configs?.whatsapp}`,
      name: configs?.whatsapp,
      color: "#25D366",
    },
    {
      icon: "far fa-phone-alt",
      href: `tel: +2${configs?.phone}`,
      name: configs?.phone,
      color: "#d3ae55",
    },
    {
      icon: "fab fa-facebook-messenger",
      href: `http://m.me/smileArtDrMagdy`,
      name: "@smileArtDrMagdy",
      color: "#1877f2",
    },
  ];

  useEffect(() => {
    getLang();
  }, []);

  return (
    <div className="body-content">
      <Meta keywords={configs?.keywords} />
      {typeof window === "object" && (
        <Fab
          mainButtonStyles={{
            background: "linear-gradient(to right, #d2ac52, #e8ce82)",
            zIndex: 9999999,
            left: 0,
            right: "initial",
          }}
          style={{
            left: lang == "ar" ? null : 0,
            right: lang == "en" ? null : 0,
            bottom: 0,
          }}
          icon={
            <i className="fas fa-phone-alt" style={{ color: "var(--dark)" }} />
          }
        >
          {social.map((item, i) => (
            <Action
              key={i}
              text={item?.name}
              style={{
                background: item?.color,
              }}
            >
              <a key={i} href={item?.href} target="_blank" rel="noreferrer">
                <i
                  className={item?.icon}
                  style={{
                    color: item?.frontColor ?? "#fff",
                  }}
                ></i>
              </a>
            </Action>
          ))}
        </Fab>
      )}
      <SocialContacts />
      <Header />
      <Services />
      <Articles />
      <Team />
      <Gallery hideTitle={false} />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
};

export default Main;

export const getServerSideProps = async (context) => {

  let configs = await get("/configs").then((res) => res?.data);

  return {
    props: {
      configs: configs?.[0],
    },
  };
};
