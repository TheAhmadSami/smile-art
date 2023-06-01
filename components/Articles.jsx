import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { get } from "@sa/utils/axios";
import { Modal } from "@mui/material";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//components
import { ArticleCard, Gallery } from "@sa/components";

//styles
import styles from "@sa/styles/components/Articles.module.scss";
import { useSelector } from "react-redux";
import onClick from "../node_modules/swiper/core/events/onClick";

const Articles = () => {
  const { t } = useTranslation();
  const lang = useSelector((state) => state.lang.value);
  const [services, setServices] = useState([]);
  const [activeService, setActiveService] = useState([]);
  const [modalStatus, setModalStatus] = useState(false);
  const [categories, setCategories] = useState([]);
  const [articles, setArticles] = useState([]);
  const [categoryId, setCategoryId] = useState(0);

  const settings = {
    speed: 500,
    slidesToShow: 2,
  };

  const mystyle = "linear-gradient(267.04deg, #5F818C, #98B8C0)";

  const getArticles = () => {
    get("/article").then((res) => {
      setArticles(res?.data);
    });
  };

  const getCategories = () => {
    get("/category").then((res) => {
      setCategories(res?.data);
    });
  };

  const getCategoryArticles = () => {
    get(`/article/category/articles/${categoryId}`).then((res) => {
      setArticles(res?.data);
    });
  };

  useEffect(() => {
    if (categoryId == 0) {
      getArticles();
    } else {
      getCategoryArticles();
    }
  }, [categoryId]);

  useEffect(() => {
    getArticles();
    getCategories();
  }, []);

  return (
    <section id="articles">
      <p className="section-title light">{t("articles")}</p>
      <div className={styles.articlesDetails}>
        <p
          className={`${styles.categoryCard} ${
            categoryId == 0 && styles.active
          }`}
          onClick={() => setCategoryId(0)}
        >
          {lang == "ar" ? "جميع الأقسام" : "All Categories"}
        </p>
        {categories?.length > 0 &&
          categories?.map((category, index) => {
            return (
              <p
                key={index}
                className={styles.categoryCard}
                onClick={() => setCategoryId(category?.id)}
              >
                {lang == "ar" ? category?.nameAr : category?.nameEn}
              </p>
            );
          })}
        <div id="feeds">
          {/* <p className="section-title light">{t("facebook_reviews")}</p> */}
          {articles?.length > 0 &&
            articles?.map((article, index) => {
              return <ArticleCard key={index} article={article} />;
            })}
        </div>
      </div>

      <Modal
        open={modalStatus}
        onClose={() => setModalStatus(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="serviceModal">
          <div
            className={styles.closeService}
            onClick={() => setModalStatus(false)}
          >
            <i className="fas fa-times"></i>
          </div>

          <div className={styles.serviceContent}>
            <div
              className={styles.img}
              style={{ backgroundImage: `url(${activeService?.image})` }}
            ></div>
            <div className={styles.info}>
              <div className={styles["title"]}>
                {lang == "en" ? activeService?.titleEn : activeService?.titleAr}
              </div>
              <div className={styles["desc"]}>
                {lang == "en"
                  ? activeService?.subtitleEn
                  : activeService?.subtitleAr}
              </div>
            </div>
          </div>
          <Gallery />
        </div>
      </Modal>
    </section>
  );
};

export default Articles;
