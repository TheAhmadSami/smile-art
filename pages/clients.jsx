import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

//components
import { ClientCard, SectionTitle } from "@sa/components";

//styles
import styles from "@sa/styles/pages/Home.module.scss";

const Clients = () => {
  const { t } = useTranslation();

  return (
    <div className="__page">
      <SectionTitle title={t("clients")} />
      <ClientCard
        title="أحمد مجدي"
        description="هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي"
      />
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
