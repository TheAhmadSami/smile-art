import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

//components
import { SectionTitle } from "@sa/components";

//styles
import styles from "@sa/styles/pages/Home.module.scss";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div id={styles.home} className="__page">
      <SectionTitle title={t("home")} />
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
