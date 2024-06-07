import React from "react";
import styles from "./styles.module.css";
import { FaAnglesDown } from "react-icons/fa6";

const Card = ({ title, requirements, description, nivel}) => {
  return <div className={styles.geral}>
    <button className={styles.card}>
      <div className={styles.labelDiv}>
        <label>{title.name}</label>
      </div>
      <div className={styles.anglesDiv}>
        <FaAnglesDown></FaAnglesDown>
      </div>
    </button>
    <div className={styles.description}>
      <ul>
        <li>
          NÍVEL: {nivel}
        </li>
        <li>
          PRÉ-REQUISITOS: {requirements}
        </li>
        <li>
          DESCRIÇÃO: {description}
        </li>
      </ul>
    </div>
  </div>
}

export default Card;