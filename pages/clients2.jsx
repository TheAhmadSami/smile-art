import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

//components
import { ClientCard, SectionTitle } from "@sa/components";

//data
import clientData from "@sa/fakers/clients";

//styles
import styles from "@sa/styles/pages/Client.module.scss";

const Clients = () => {
  const { t } = useTranslation();

  return (
    <div id={styles.client} className="__page">
      <SectionTitle title={t("clients")} />
      <div className={styles.servicesDetails}>
        {clientData?.map((client, index) => {
          return (
            <ClientCard
              key={index}
              title={client.title}
              description={client.description}
              image={client.Image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Clients;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
