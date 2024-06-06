import React from 'react';
import Navbar from '../../components/Navbar';
import  Login  from '../../components/Login';
import { Outlet } from 'react-router-dom';
import styles from './styles.module.css';

export default function Home(){
    return(
        <>
        <Navbar/>
        <Outlet />
        <div className={styles.bodyContainer}>
            <div className={styles.bodyContent}>
                <Login />
                <div className={styles.textContent}>
                    <h1 className={styles.title}>SERRA RPG</h1>
                    <p className={styles.subtitle}>O Serra RPG está pronto para recebê-lo em um mundo de fantasia sem limites. Pegue sua espada, arme-se com magia e esteja preparado para enfrentar o desconhecido. Sua jornada começa agora!</p>
            </div>
        </div>
        </div>
        </>
    );
}