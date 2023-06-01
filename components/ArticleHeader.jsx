import React, { useState } from "react";
import { ArticleMenu, Menu } from ".";

//styles
import styles from "@sa/styles/components/ArticleHeader.module.scss";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import moment from "moment";

const ArticleHeader = ({ small, title, date }) => {
  const [t] = useTranslation();

  return (
    <section id="article_header">
      <ArticleMenu small={small} />

      <div className="header-content">
        <p className="header-title">{title}</p>
        <p>{moment(date).format("DD-MM-yyyy hh:mm A")}</p>
      </div>
    </section>
  );
};

export default ArticleHeader;
