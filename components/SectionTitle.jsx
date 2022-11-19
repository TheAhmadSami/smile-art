import React from "react";

//styles
import styles from '@sa/styles/components/SectionTitle.module.scss'

const SectionTitle = ({ title, subTitle }) => {
  return subTitle ? <h1 className={styles.sectionTitle}>{title}</h1> : <h2 className={styles.sectionTitle}>{title}</h2>;
};

export default SectionTitle;
