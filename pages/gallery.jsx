import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

//components
import { SectionTitle } from "@sa/components";

//styles
import styles from "@sa/styles/pages/Gallery.module.scss";
import assets from "@sa/assets";

const Gallery = () => {
  const { t } = useTranslation();

  return (
    <div id={styles["gallery"]} className="__page">
      <SectionTitle title={t("gallery")} />

      <div className={styles.content}>
        <img src={assets.teamOne.src} className={styles["img"]} alt="r" />
        <img src={assets.teamOne.src} className={styles["img"]} alt="r" />
        <img src={assets.teamOne.src} className={styles["img"]} alt="r" />
        <img src={assets.teamOne.src} className={styles["img"]} alt="r" />
        <img src={assets.teamOne.src} className={styles["img"]} alt="r" />
        <img src={assets.teamOne.src} className={styles["img"]} alt="r" />
      </div>
    </div>
  );
};

export default Gallery;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
