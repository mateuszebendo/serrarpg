import React from "react";
import styles from "./styles.module.css";

export default function({ message }) {
  return <div className={styles.popup}>
    <p>{message}</p>
  </div>
}