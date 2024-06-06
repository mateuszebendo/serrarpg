import React, { useState } from "react";
import styles from "./styles.module.css";

function Input({label, ...rest}) {

    return (
        <div className={styles.inputContainer}>
            <label className={styles.nameInput}>{label}</label>
            <input className={styles.inputContent}
                name="input"
                {...rest}
            />
        </div>
    );
}

export default Input;
