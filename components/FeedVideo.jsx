import React from "react";

//styles
import styles from "@sa/styles/components/FeedVideo.module.scss";

const FeedVideo = ({ embedId }) => {
  return (
    <div id={styles["main-video"]}>
      <iframe
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};

export default FeedVideo;
