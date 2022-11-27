import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

//components
import { SectionTitle, CustomCard } from "@sa/components";

//data
import ServicesData from "@sa/feakers/services";

//styles
import styles from "@sa/styles/pages/Services.module.scss";
import Banner from "@sa/components/Banner";
import assets from "@sa/assets";

const Services = () => {
  const { t } = useTranslation();

  return (
    <div id={styles.Services} className="__page">
      <SectionTitle title={t("services")} />
      <Banner
        backgroundImage={assets.servicesBg.src}
        title={t("services_banner_title")}
        subtitle={t("services_banner_subtitle")}
      />
      <SectionTitle title={t("services_details")} />

      <div className={styles.servicesDetails}>
        {ServicesData?.map((service, index) => {
          return (
            <CustomCard
              key={index}
              title={service.title}
              image={service.image}
              description={service.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Services;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
