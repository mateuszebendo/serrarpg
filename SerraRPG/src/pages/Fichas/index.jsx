import React from 'react';
import Sheet from '../../components/Sheet';
import styles from './styles.module.css';

export default function Fichas(){

    return(
        <main className={styles.container}>
         <Sheet tipoFicha="Personagem" imagem="https://i.pinimg.com/736x/b5/94/72/b5947232939a057c7a4179cd9feaa2ea.jpg"/>
        </main >
    );
}