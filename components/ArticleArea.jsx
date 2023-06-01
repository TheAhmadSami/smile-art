import React, { useState } from "react";
import { Menu } from ".";

//styles
import styles from "@sa/styles/components/ArticleArea.module.scss";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const ArticleArea = ({ small }) => {
  const [t] = useTranslation();
  const lang = useSelector((state) => state.lang.value);

  return <section id="ArticleArea"></section>;
};

export default ArticleArea;
