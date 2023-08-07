import React, { useState } from "react";
import { useTranslation } from "react-i18next";

//styles
import styles from "@sa/styles/components/ArticleCard.module.scss";
import { useSelector } from "react-redux";

const ReactQuill =
  typeof window === "object" ? require("react-quill") : () => false;
import "react-quill/dist/quill.snow.css";

const ArticleCard = ({ article }) => {
  const { t } = useTranslation();
  const lang = useSelector((state) => state.lang.value);
  const [modalStatus, setModalStatus] = useState(false);

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
    <div className={styles.articleCard} style={{ marginBottom: "10px" }}>
      <p className={styles.title}>
        {lang == "en" ? article?.titleEn : article?.titleAr}
      </p>
      <div className={styles.content}>
        <ReactQuill
          value={lang == "en" ? article?.contentEn : article?.contentAr}
          readOnly={true}
          modules={modules}
          formats={formats}
        />
      </div>
      <a
        href={`/article/${article?.id}`}
        target="_blank"
        rel="noreferrer"
        className={styles.knowMore}
      >
        {t("know_more")}
      </a>
    </div>
  );
};

export default ArticleCard;
