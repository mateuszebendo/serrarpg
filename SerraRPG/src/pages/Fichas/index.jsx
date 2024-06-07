import React from 'react';
import Sheet from '../../components/Sheet';
import styles from './styles.module.css';

export default function Fichas(){

    return(
        <div className={styles.container}>
         <Sheet tipoFicha="Personagem"/>
        </div >
    );
}