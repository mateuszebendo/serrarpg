import React, { useContext } from 'react';
import Header from '../Header';
import { AuthContext } from '../../contexts/auth';
import styles from './styles.module.css';

export default function Navbar(){
    const{ logout } = useContext(AuthContext);

    async function handleSair() {
        await logout();
    }

    return(
        <div className={styles.navContainer}>
            <nav className={styles.nav}>
                <Header title={"fichas"} link="../fichas"/>
                <Header title={"monstros"} link="../monstros"/>
                <Header title={"itens"} link="../itens"/>
                <Header title={"habilidades"} link="../habilidades"/>
                <Header title={"sair"} onClick={handleSair}/>
            </nav>
        </div>
    );
}