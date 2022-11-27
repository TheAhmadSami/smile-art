import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

//components
import { Map, SectionTitle, TextInput } from "@sa/components";

//styles
import styles from "@sa/styles/pages/Contact.module.scss";

const ContactUs = () => {
  const { t } = useTranslation();

  return (
    <div id={styles["contact"]} className="__page">
      <SectionTitle title={t("contact_us")} />

      <div className={styles.row}>
        <TextInput label={t("name")} placeholder={t("placeholder_name")} />
        <TextInput
          label={t("phone_number")}
          placeholder={t("placeholder_phone")}
        />
      </div>

      <div className={styles["text-area"]}>
        <div className={styles["label"]}>{t("message")}</div>
        <textarea
          className={styles["textarea"]}
          type="text"
          placeholder={t("placeholder_message")}
        />
      </div>

      <iframe
        src="https://www.google.com/maps/embed"
        style={{
          width: "100%",
          height: "500px",
        }}
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default ContactUs;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
