import React, { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { get } from "@sa/utils/axios";

//components
import { Banner, SectionTitle, CustomCard } from "@sa/components";

//data
import TeamData from "@sa/fakers/teams";

//styles
import styles from "@sa/styles/pages/Team.module.scss";
import assets from "@sa/assets";

const Team = () => {
  const { t } = useTranslation();
  const [staff, setStaff] = useState([]);

  const mystyle = "linear-gradient(267.04deg, #5F818C, #98B8C0)";

  const loadStaff = () => {
    get("/staff").then((res) => {
      setStaff(res.data);
    });
  };

  useEffect(() => {
    loadStaff();
  }, []);

  return (
    <div id={styles.team} className="__page">
      <SectionTitle title={t("team")} />
      <Banner
        background="#5F818C"
        image={assets.teamBanner}
        title={t("team_banner_title")}
        subtitle={t("team_banner_subtitle")}
      />

      <SectionTitle title={t("team_members")} />

      <div className={styles.servicesDetails}>
        {staff.length > 0 &&
          staff?.map((team, index) => {
            return (
              <CustomCard
                key={index}
                title={team?.title}
                image={team?.image}
                description={team?.subtitle}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Team;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
