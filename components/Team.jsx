import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { get } from "@sa/utils/axios";

//components
import { CustomCard } from "@sa/components";

//styles
import styles from "@sa/styles/components/Team.module.scss";
import assets from "@sa/assets";
import { useSelector } from "react-redux";

const Team = () => {
  const { t } = useTranslation();
  const [staff, setStaff] = useState([]);
  const lang = useSelector((state) => state.lang.value);

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
    <section id="products">
      <p className="section-title">
        <span>Our</span> Team
      </p>
      <div id={styles.team} className="__page">
        <div className={styles.teamDetails}>
          {staff.length > 0 &&
            staff?.map((team, index) => {
              return (
                <CustomCard
                  key={index}
                  title={lang == 'en' ? team?.titleEn : team?.titleAr}
                  description={lang == 'en' ? team?.subtitleEn : team?.subtitleAr}
                  image={team?.image}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Team;