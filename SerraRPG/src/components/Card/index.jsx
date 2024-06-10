import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { FaAnglesDown } from "react-icons/fa6";
import { getAllById } from "../../services/DndApi/api";

const Card = ({ title, firstLine, secondLine, thirdLine }) => {
  // const[features, setFeatures] = useState({});
  let features = {};
  const[firstStats, setFirstStats] = useState('');
  const[secondStats, setSecondStats] = useState('');
  const[thirdStats, setThirdStats] = useState('');

  async function getAllId() {
    const results = await getAllById(title.url);
    // setFeatures(results.data);
    features = results.data;

    if(title.url.includes("spells") && features !== undefined) {
      setFirstStats(JSON.stringify(features.level))
      setSecondStats(JSON.stringify(features.desc))
      setThirdStats(JSON.stringify(features.school.name));
    } else if(title.url.includes("features") && features !== undefined) {
      setFirstStats(JSON.stringify(features.class.name))
      setSecondStats(JSON.stringify(features.level))
      setThirdStats(JSON.stringify(features.desc))
    }
    }

    useEffect(() => {
      getAllId()
    }, [firstLine])

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
          {firstLine} {firstStats}
        </li>
        <li>
          {secondLine} {secondStats}
        </li>
        <li>
          {thirdLine} {thirdStats}
        </li>
      </ul>
    </div>
  </div>
}

export default Card;