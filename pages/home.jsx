import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

//components
import { Banner, SectionTitle } from "@sa/components";

//styles
import styles from "@sa/styles/pages/Home.module.scss";
import assets from "@sa/assets";

const Home = () => {
  const { t } = useTranslation();
  const mystyle = "linear-gradient(267.04deg, #5F818C, #98B8C0)";

  return (
    <div id={styles.home} className="__page">
      <SectionTitle title={t("home")} />
      <Banner
      title2={t('offers')}
      background="#5F818C"
        image={assets.teamBanner.src}
        title={t("home_banner_title")}
        subtitle={t("home_banner_subtitle")}
      />
    </div>
  );
};

export default Home;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
