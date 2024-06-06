import React from "react";
import { useState } from "react";
import styles from "./styles.module.css";

const Button = ({ title }) => {
    /*const [estilo,setEstilo] = useState(true);
    function trocarStyle(){
        setEstilo(!estilo);
    }*/    

    return <button className={styles.butt}>
        {title}
    </button>
}
export default Button;