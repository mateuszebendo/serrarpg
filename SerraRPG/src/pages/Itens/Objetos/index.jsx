import React from "react";
import styles from "./styles.module.css"

const Objetos = ({ name }) =>{
    return <div className={styles.objetos}>
        {name.name}
    </div>
}

export default Objetos;