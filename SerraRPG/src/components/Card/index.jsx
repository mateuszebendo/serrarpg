import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { FaAnglesDown } from "react-icons/fa6";
import { getAllById } from "../../services/DndApi/api";

const Card = ({ title, requirements, description, nivel}) => {
  const[features, setFeatures] = useState({});

  async function getAllId() {
    const results = await getAllById(title.url);
    setFeatures(results.data);
    }

    console.log(title.url)

    useEffect(() => {
      getAllId()
    }, [])

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
          NÍVEl: {nivel}
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