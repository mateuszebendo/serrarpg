import React from 'react';
import Header from '../Header';
import styles from './styles.module.css';

export default function Navbar(){
    return(
        <nav className={styles.nav}>
            <Header title={"fichas"} link="fichas"/>
            <Header title={"monstros"} link="monstros"/>
            <Header title={"itens"} link="itens"/>
            <Header title={"habilidades"} link="habilidades"/>
        </nav>
    );
}