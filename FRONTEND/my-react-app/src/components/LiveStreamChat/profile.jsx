import React from 'react'
import styles from "./styles.module.css";

function Profile({name, photo, message}) {
  return (
    <div className={styles.profile}>
        <img src={photo} alt= 'profile'/>
        <p>
        <span>{name}</span>
        <span>{message}</span>
        </p>
    </div>
  )
}

export default Profile