import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import styles from '../styles/Home.module.css'

export default function Home() {

  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className="mt-5">
        <h1>{t("home.Home title")}</h1>
        <p>{t("home.Home description")}</p>
      </div>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}