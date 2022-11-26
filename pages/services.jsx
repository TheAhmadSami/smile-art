import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

//components
import { SectionTitle, CustomCard } from "@sa/components";

//styles
import styles from "@sa/styles/pages/Services.module.scss";
import Banner from "@sa/components/Banner";
import assets from "@sa/assets";

const Services = () => {
  const { t } = useTranslation();

  const data = [
    {
      id: 1,
      title: "زراعة الأسنان",
      image: assets.serviceOne.src,
      description:
        "يتم وضع الزرعات في عظام الفك الضعيفة ( قليلة الكثافة أو الحجم ) ثم الإنتظار 3 أشهر على الأقل حتى تتم عملية الإلتآم مع الزرعة و يتم بعد ذلك وضع جسور الأسنان المراد تركيبها",
    },
    {
      id: 2,
      title: "CAD/CAM",
      image: assets.serviceTwo.src,
      description:
        "يوفر المركز تكنولوجيا و خدمات الكاد كام في مجال تركيب التيجان و الجسور(الإي ماكس و الزيركون) و كذلك الخدمات التجميلية للأسنان في زيارة واحدة فقط عن طريق أخذ المقاسات و تصوير الفم بالكمبيوتر ",
    },
    {
      id: 3,
      title: "Digital Smile Design",
      image: assets.serviceThree.src,
      description:
        "يمكنك الأن الحصول على الإبتسامة التي تتمناها و تختارها بنفسك . خطوات بسيطة على الكمبيوتر لتكون إبتسامتك جاهزة أمام عينيك قبل صنعها        ",
    },
    {
      id: 4,
      title: "Hollywood Smile إبتسامة المشاهير",
      image: assets.serviceFour.src,
      description:
        "إحصل على إبتسامة الفنانين و المشاهير كما تتمناها بالشكل و درجة اللون البيضاء التي تختارها .        ",
    },
    {
      id: 5,
      title: "زراعة الأسنان",
      image: assets.serviceOne.src,
      description:
        "يتم وضع الزرعات في عظام الفك الضعيفة ( قليلة الكثافة أو الحجم ) ثم الإنتظار 3 أشهر على الأقل حتى تتم عملية الإلتآم مع الزرعة و يتم بعد ذلك وضع جسور الأسنان المراد تركيبها",
    },
    {
      id: 6,
      title: "CAD/CAM",
      image: assets.serviceTwo.src,
      description:
        "يوفر المركز تكنولوجيا و خدمات الكاد كام في مجال تركيب التيجان و الجسور(الإي ماكس و الزيركون) و كذلك الخدمات التجميلية للأسنان في زيارة واحدة فقط عن طريق أخذ المقاسات و تصوير الفم بالكمبيوتر ",
    },
    {
      id: 7,
      title: "Digital Smile Design",
      image: assets.serviceThree.src,
      description:
        "يمكنك الأن الحصول على الإبتسامة التي تتمناها و تختارها بنفسك . خطوات بسيطة على الكمبيوتر لتكون إبتسامتك جاهزة أمام عينيك قبل صنعها        ",
    },
    {
      id: 8,
      title: "Hollywood Smile إبتسامة المشاهير",
      image: assets.serviceFour.src,
      description:
        "إحصل على إبتسامة الفنانين و المشاهير كما تتمناها بالشكل و درجة اللون البيضاء التي تختارها .        ",
    },
  ];

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

export default Services;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
