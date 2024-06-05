import React from 'react';
import styles from './styles.module.css';

export default function ErrorPage () {

    return (
        <div className={styles.error}>
            <h1>Calma lá, mestre!</h1>
            <p>Foi mal, um erro desconhecido aconteceu :/.</p>
        </div>
    );
}