import React from "react";
import Image from "next/image";

//styles
import styles from "@sa/styles/components/ModalImage.module.scss";

function ModalImage({ image, name, onClick }) {
  return (
    <div id={styles.ModalImage} onClick={onClick}>
      <Image
        src={image}
        alt={name}
        width="0"
        height="0"
        sizes="100vw"
        style={{ height: "80%", width: "auto" }}
      />
    </div>
  );
}

export default ModalImage;
