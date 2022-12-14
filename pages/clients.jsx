import React, { useState } from "react";

//translation
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

//components
import { ModalImage, SectionTitle } from "@sa/components";

//data
import galleryData from "@sa/fakers/clients2";

//styles
import styles from "@sa/styles/pages/Client.module.scss";
import Image from "next/image";

const Gallery = () => {
  const { t } = useTranslation();

  const [visible, setVisible] = useState(false);
  const [image, setImage] = useState(null);

  const getImage = (id) => {
    console.log("hi");
    let image = galleryData.filter((el) => el.id === id);
    console.log(image[0]);

    setVisible(true);
    setImage(image[0]);
  };
  return (
    <div id={styles["gallery"]} className="__page">
      <SectionTitle title={t("clients")} />

      <div className={styles.content}>
        {galleryData?.map((image, index) => {
          return (
           
            <Image
              key={index}
              src={image.Image}
              className={styles["img"]}
              alt="r"
              onClick={() => getImage(image.id)}
              width={250}
              height={100}
            />
          );
        })}
      </div>

      {visible && (
        <ModalImage
          onClick={() => setVisible(false)}
          name={image.name}
          image={image.Image}
        />
      )}
    </div>
  );
};

export default Gallery;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
