import React from "react";
import styles from "./styles.module.css";

const Header = ({ title, onClick }) => {
  return <>
  <div className={styles.container} onClick={onClick}>
    <button className={styles.btn}>
      {title}
    </button>
  </div>
  </>
}

export default Header;