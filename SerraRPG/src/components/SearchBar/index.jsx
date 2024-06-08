import React from "react";
import styles from "./styles.module.css";
import { IoIosSearch } from "react-icons/io";

export default function({ onChange }) {
  return <>
  <div className={styles.inputContainer}>
    <IoIosSearch/>
    <input className={styles.input} onChange={onChange}/>
  </div>
  </>
}