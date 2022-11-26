import React from "react";
import Image from "next/image";

//styles
import styles from "@sa/styles/components/Banner.module.scss";
import assets from "@sa/assets";

const Banner = ({
  title,
  subtitle,
  image,
  title2,
  background,
  backgroundImage,
}) => {
  return (
    <div
      className={styles.banner}
      style={{
        background: background,
        backgroundImage: `url('${backgroundImage}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {title2 && <h1 className="title">{title2}</h1>}
      <h1>{title}</h1>
      <h4>{subtitle}</h4>
      {image && (
        <Image src={assets.mainBannerImage} className={styles["img"]} alt="" />
      )}
    </div>
  );
};

export default Banner;
