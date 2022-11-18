import React from 'react'
import styles from "../styles/WorkTimeCard.module.scss";
const WorkTimeCard = () => {
  return (
    <div className={styles.worktimeCard}>
      <p className={styles.title}>أوقات العمل</p>

      <div className={styles.item}>
        <p className={styles.days}>الأحد - الخميس</p>
        <p className={styles.times}>9:00 صباحاً - 10:00 مساءً</p>
      </div>

      <div className={styles.item}>
        <p className={styles.days}>الأحد - الخميس</p>
        <p className={styles.times}>9:00 صباحاً - 10:00 مساءً</p>{" "}
      </div>

      <button>اتصل بنا</button>
    </div>
  );
}

export default WorkTimeCard