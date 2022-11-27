import React from "react";
import Image from "next/image";

//styles
import styles from "@sa/styles/components/ClientCard.module.scss";

const ClientCard = ({ title, description, image }) => {
  return (
    <div className={styles["review-card"]}>
   
      <div className={styles["content"]}>
        <div className={styles["client-name"]}>أحمد مجدي</div>
        <div className={styles["client-review"]}>
          هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
          القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة
          التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي
        </div>
      </div>
      <div className={styles["img"]}></div>
    </div>
  );
};

export default ClientCard;
