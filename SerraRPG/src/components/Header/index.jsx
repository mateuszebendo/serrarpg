import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const Header = ({ title, link, ...rest }) => {
  return (
    <div className={styles.container}>
      <Link to={link} {...rest} className={styles.link}>
        <button className={styles.btn}>{title}</button>
      </Link>
    </div>
  );
};

export default Header;
