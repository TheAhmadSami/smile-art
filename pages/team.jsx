import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

//components
import { Banner, SectionTitle, CustomCard } from "@sa/components";

//styles
import styles from "@sa/styles/pages/Team.module.scss";
import assets from "@sa/assets";

const Team = () => {
  const { t } = useTranslation();

  const data = [
    {
      id: 1,
      title: "أحمد مجدي",
      image: assets.teamOne.src,
      description: "الزمالة البريطانية في طب الأسنان من جامعة لندن",
    },
    {
      id: 2,
      title: "أحمد مجدي",
      image: assets.teamTwo.src,
      description: "الزمالة البريطانية في طب الأسنان من جامعة لندن",
    },
    {
      id: 3,
      title: "أحمد مجدي",
      image: assets.teamOne.src,
      description: "الزمالة البريطانية في طب الأسنان من جامعة لندن",
    },
    {
      id: 4,
      title: "أحمد مجدي",
      image: assets.teamTwo.src,
      description: "الزمالة البريطانية في طب الأسنان من جامعة لندن",
    },
    {
      id: 5,
      title: "أحمد مجدي",
      image: assets.teamOne.src,
      description: "الزمالة البريطانية في طب الأسنان من جامعة لندن",
    },
    {
      id: 6,
      title: "أحمد مجدي",
      image: assets.teamTwo.src,
      description: "الزمالة البريطانية في طب الأسنان من جامعة لندن",
    },
    {
      id: 7,
      title: "أحمد مجدي",
      image: assets.teamOne.src,
      description: "الزمالة البريطانية في طب الأسنان من جامعة لندن",
    },
    {
      id: 8,
      title: "أحمد مجدي",
      image: assets.teamTwo.src,
      description: "الزمالة البريطانية في طب الأسنان من جامعة لندن",
    },
  ];

  return (
    <div id={styles.team} className="__page">
      <SectionTitle title={t("team")} />
      <Banner
        background="linear-gradient(267.04deg, #5f818c 4.86%, #98b8c0 96.66%);"
        image={assets.teamBanner.src}
        title="فريق عمل سمايل آرت"
        subtitle="فريق متخصص يعما دائما من أجل راحتكم"
      />
      <SectionTitle title="أفراد الفريق" />

      <div className={styles.servicesDetails}>
        {data?.map((service, index) => {
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

export default Team;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
