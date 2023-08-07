import React, { useState, useEffect } from "react";
import { Menu } from ".";

//styles
import styles from "@sa/styles/components/ArticlesCategories.module.scss";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { get } from "@sa/utils/axios";

const ArticlesCategories = ({ onClick }) => {
  const [t] = useTranslation();
  const [categories, setCategories] = useState([]);
  const lang = useSelector((state) => state.lang.value);

  const getCategories = () => {
    get("/category").then((res) => {
      setCategories(res?.data);
    });
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className={styles.ArticlesCategories}>
      <h2 className={styles.sectionTitle}>{lang == 'ar' ? 'الأقسام' : 'Categories'}</h2>
      {categories?.length > 0 &&
        categories?.map((category, index) => {
          return (
            <div key={index}>
              <p className={styles.categoryCard} onClick={onClick}>
                {lang == "ar" ? category?.nameAr : category?.nameEn}
              </p>
              {category?.articles?.map((article, i) => (
                <p key={i}>
                  <a
                    href={`/article/${article?.id}`}
                    className={styles.articleItem}
                  >
                    {lang == "ar" ? article?.titleAr : article?.titleEn}
                  </a>
                </p>
              ))}
            </div>
          );
        })}
    </div>
  );
};

export default ArticlesCategories;
