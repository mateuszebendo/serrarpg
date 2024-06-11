import React from "react";
import { useState } from "react";
import styles from "./styles.module.css";

const Button = ({ title ,onClick, id}) => {
    /*const [estilo,setEstilo] = useState(true);
    function trocarStyle(){
        setEstilo(!estilo);
    }*/    

    return <button className={styles.butt} onClick={() => onClick(id)}>
        {title}
    </button>
}
export default Button;