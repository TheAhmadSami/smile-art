import { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

//components
import { FacebookFeed, FeedVideo, Menu, SocialMedia } from "@sa/components";
import assets from "@sa/assets";
import Link from "next/link";

const MainLayout = ({ children }) => {
  const router = useRouter();
  const { t } = useTranslation();
  const [selectedPill, setSelectedPill] = useState(0);

  const info = [
    {
      title: "who_we_are",
      desc: "who_we_are_desc",
    },
    {
      title: "dr_magdy_word",
      desc: "dr_magdy_word_desc",
    },
  ];

  return (
    <div id="__main">
      <Menu mini={router.pathname == "/" ? true : false} />
      {router.pathname == "/" ? (
        <div id="__video-body">
          <div className="call-us">
            <div className="icon">
              <i className="fas fa-phone-alt"></i>
            </div>
            <div className="info">
              <p>{t("call_us")}</p>
              <p>+20 123 456 789</p>
            </div>
          </div>

          <div className="infoContainer">
            <div className="pillsContainer">
              {info.map((item, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedPill(i)}
                  className={`pill ${selectedPill == i ? "active" : ""}`}
                >
                  {t(item.title)}
                </div>
              ))}
              <Link href={router.locale + "/home"} className="pill">
                {t("more")}
              </Link>
            </div>

            {info.map((item, i) => (
              <div
                key={i}
                className={`content ${selectedPill == i ? "active" : ""}`}
              >
                {item.image && <div className="image"></div>}
                <div className="data">
                  <p className="title">{t(item.title)}</p>
                  <p className="desc">{t(item.desc)}</p>
                </div>
              </div>
            ))}
          </div>

          <SocialMedia />

          <div className="video-container">
            <video
              src="/media/mainVideo.mp4"
              className="video"
              autoPlay
              muted
              loop
            />
          </div>
        </div>
      ) : (
        <div id="__body">
          <div id="__body-content">{children}</div>
          <div id="__feed">
            <FeedVideo />
            <FacebookFeed />
          </div>
        </div>
      )}
    </div>
  );
};

export default MainLayout;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
