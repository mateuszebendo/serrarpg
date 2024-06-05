import React from "react";
import styles from "./styles.module.css";
import {Link} from "react-router-dom";

const Header = ({ title, link }) => {
  return <Link to={link} className={styles.link}>
  <div className={styles.container}>
    <button className={styles.btn}>
      {title}
    </button>
  </div>
  </Link>
}

export default Header;