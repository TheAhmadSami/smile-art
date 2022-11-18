import Link from "next/link";
import React from "react";

import styles from "../styles/Menu.module.scss";
import MenuItem from "./MenuItem";

const Menu = () => {
  const menuItems = [
    {
      label: "home",
      route: "/",
      icon: "fal fa-home-lg-alt",
    },
    {
      label: "services",
      route: "/services",
      icon: "fal fa-hand-holding-medical",
    },
    {
      label: "team",
      route: "/team",
      icon: "fal fa-user-md",
    },
    {
      label: "gallery",
      route: "/gallery",
      icon: "fal fa-images",
    },
    {
      label: "clients",
      route: "/clients",
      icon: "fal fa-users-crown",
    },
    {
      label: "contact",
      route: "/",
      icon: "fal fa-comment-lines",
    },
    {
      label: "booking",
      route: "/booking",
      icon: "fal fa-clock",
    },
  ];

  return (
    <div id={styles.menu}>
      <p>Logo</p>

      <ul>
        {menuItems.map((menuItem, index) => {
          return (
            <MenuItem
              key={index}
              route={menuItem.route}
              label={menuItem.label}
              icon={menuItem.icon}
            />
          );
        })}
      </ul>

   
    </div>
  );
};

export default Menu;
