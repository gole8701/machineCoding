import React from 'react'
import LiveChat from './LiveChat'
import VideoStreamingLeft from './videoStreamingLeft'
import styles from "./styles.module.css";

function LiveStreamChat() {
  return (
    <div className={styles.liveStreaming}>
      <VideoStreamingLeft/>
      <LiveChat/>
    </div>
  )
}

export default LiveStreamChat