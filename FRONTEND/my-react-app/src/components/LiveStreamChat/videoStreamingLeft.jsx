import React from "react";
import styles from "./styles.module.css";

function VideoStreamingLeft() {
  return (
    <div className={styles.videoStreaming}>
      <iframe
        width="1200"
        height="700"
        src="https://www.youtube.com/embed/CRCNYKyJDUs?si=Dns4wnDZNTJ1GzXF"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}

export default VideoStreamingLeft;
