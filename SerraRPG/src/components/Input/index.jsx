import React, { useState } from "react";
import styles from "./styles.module.css";

function Input({label, tipo}) {
    const [valor, setValor] = useState();

    return (
        <div className={styles.inputContainer}>
            <label className={styles.nameInput} for="input">{label}</label>
            <input className={styles.inputContent}
                name="input"
                type={tipo}
                onChange={(e) => setValor(e.target.value)}
            />
        </div>
    );
}

export default Input;
