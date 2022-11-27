import React from "react";

//styles
import styles from "@sa/styles/components/FacebookFeed.module.scss";

const FacebookFeed = () => {
  return (
    <div id={styles.facebookFeed}>
      <div className={styles.row}>
        <div className={styles.row2}>
          <i className="fab fa-facebook"></i>
          <h1 className={styles.title}>فيسبوك فييد</h1>
        </div>
        <h6 className={styles.subtitle}>عرض المزيد</h6>
      </div>
    </div>
  );
};

export default FacebookFeed;
