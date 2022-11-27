import React from "react";

//styles
import styles from "@sa/styles/components/ModalImage.module.scss";

function ModalImage({ image, name, onClick }) {
  return (
    <div id={styles.ModalImage} onClick={onClick}>
      <img src={image} alt={name} />
    </div>
  );
}

export default ModalImage;
