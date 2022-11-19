import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

//components
import { SectionTitle } from "@sa/components";

//styles
import styles from "@sa/styles/pages/Home.module.scss";

const Gallery = () => {
  const { t } = useTranslation();

  return (
    <div className="__page">
      <SectionTitle title={t('home')}/>
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
