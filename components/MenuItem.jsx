import Link from "next/link";
import React from "react";
import styles from "../styles/MenuItem.module.scss";
const MenuItem = ({ route, label, icon }) => {
  return (
    <Link href={route}>
      <div className={styles.menuItem}>
        <p>{label}</p>
        <i className={icon}></i>
      </div>
    </Link>
  );
};

export default MenuItem;
