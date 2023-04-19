import React from "react";
import { useTranslation } from "react-i18next";

//styles
import styles from "@sa/styles/components/ArticleCard.module.scss";
import { useSelector } from "react-redux";

const ArticleCard = ({article}) => {
  const { t } = useTranslation();
  const lang = useSelector((state) => state.lang.value);

  return (
    <div className={styles.articleCard}>
      <p className={styles.title}>
        {lang == "en" ? article?.titleEn : article?.titleAr}
      </p>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{
          __html: lang == "en" ? article?.contentEn : article?.contentAr,
        }}
      >
      </div>
    </div>
  );
};

export default ArticleCard;
