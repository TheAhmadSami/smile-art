import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import {
  SocialContacts,
  Footer,
  Contact,
  ArticleArea,
  ArticleHeader,
  ArticlesCategories,
} from "@sa/components";
import { domain, mediaLink } from "@sa/utils/axios";
import { useDispatch, useSelector } from "react-redux";
import { setLang } from "@sa/redux/lang";
import { get } from "@sa/utils/axios";
import { setConfigs } from "@sa/redux/configs";

const ReactQuill =
  typeof window === "object" ? require("react-quill") : () => false;
import "react-quill/dist/quill.snow.css";

import styles from "@sa/styles/components/Article.module.scss";

const Article = ({ configs }) => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  dispatch(setConfigs(configs));
  const lang = useSelector((state) => state.lang.value);
  const [article, setArticle] = useState(null);
  const [categoryId, setCategoryId] = useState(0);
  const [categories, setCategories] = useState([]);

  const getLang = () => {
    let lang = localStorage.getItem("lang");
    if (lang) {
      switch (lang) {
        case "ar":
          document.querySelector("html").setAttribute("dir", "rtl");
          i18n.changeLanguage("ar");
          break;
        case "en":
          document.querySelector("html").setAttribute("dir", "ltr");
          i18n.changeLanguage("en");
          break;
      }
    } else {
      localStorage.setItem("lang", "en");
    }
    dispatch(setLang(lang ? lang : "en"));
  };

  const getCategories = () => {
    get("/category").then((res) => {
      setCategories(res?.data);
    });
  };

  const getArticle = () => {
    const url = window.location.href;
    const articleId = url.split("/").pop();
    get(`/article/${articleId}`).then((res) => {
      setCategoryId(res?.data?.categoryId);
      setArticle(res?.data);
    });
  };

  useEffect(() => {
    getLang();
    getArticle();
    getCategories();
  }, []);

  const modules = {
    toolbar: false,
    clipboard: {
      matchVisual: false,
    },
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
    "align",
    "direction",
    "color",
  ];

  return (
    <div className="body-content">
      <SocialContacts />
      <ArticleHeader
        small
        gold
        title={lang == "ar" ? article?.titleAr : article?.titleEn}
        cover={configs?.articleImage ?? `${mediaLink}/article-image.jpg`}
        date={article?.createdAt}
      />
      <div className={styles.articleContainer}>
        <ArticlesCategories />
        <div className={styles.articleArea}>
          <ReactQuill
            value={lang == "en" ? article?.contentEn : article?.contentAr}
            readOnly={true}
            modules={modules}
            formats={formats}
          />

          <p className={styles.relatedArticles}>{t("related_articles")}</p>

          <div className={styles.relatedArticlesContainer}>
            {categories?.length > 0 &&
              categories?.map((category, index) => {
                return (
                  category?.id == categoryId &&
                  category?.articles?.map((article, i) => (
                    <a
                      href={`${domain}/article/${article?.id}`}
                      key={i}
                      className={styles.articleItem}
                    >
                      {lang == "ar" ? article?.titleAr : article?.titleEn}
                    </a>
                  ))
                );
              })}
          </div>
        </div>
      </div>

      <Contact />
      <Footer />
    </div>
  );
};

export default Article;

export const getServerSideProps = async (context) => {
  let configs = await get("/configs").then((res) => res?.data);

  return {
    props: {
      configs: configs?.[0],
    },
  };
};
