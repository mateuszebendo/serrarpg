import React, { useContext } from 'react';
import Navbar from '../../components/Navbar';
import { loadFichas } from '../../contexts/SheetContext/dataBase';
import  Login  from '../../components/LoginForm';
import styles from './styles.module.css';
import { AuthContext } from '../../contexts/auth';

export default function Home(){
    const { signed } = useContext(AuthContext);

   if(!signed) {
    return(
        <div className={styles.bodyContainer}>
            <div className={styles.bodyContent}>
                <Login />
                <div className={styles.textContent}>
                    <h1 className={styles.title}>SERRA RPG</h1>
                    <p className={styles.subtitle}>O Serra RPG está pronto para recebê-lo em um mundo de fantasia sem limites. Pegue sua espada, arme-se com magia e esteja preparado para enfrentar o desconhecido. Sua jornada começa agora!</p>
                </div>
            </div>
        </div>
    );
   } else if(signed){
    loadFichas();
    return(
        <>
        <Navbar />
        <div className={styles.bodyContainer}>
            <div className={styles.bodyContent}>
                <div className={styles.textContent}>
                <h1 className={styles.homeTitle}>Bem-vindo(a) a este santuário de lendas e mistérios!</h1>
                    <p className={styles.homesubtitle}>Adentrem um reino onde a imaginação não conhece limites e cada um de vocês é herói de sua própria saga. Este é um lugar onde o desconhecido se torna conhecido, onde desafios se transformam em conquistas e onde a união e o espírito de equipe nos guiam em nossa jornada.</p>
                    <p className={styles.homesubtitle}>Que as suas fichas de personagem estejam sempre a seu favor, que os seus dados rolem com a sorte dos deuses e que as suas histórias sejam contadas por eras a fio. Hoje, vocês não são apenas convidados, mas protagonistas de uma grande aventura.</p>
                </div>
            </div>
        </div>
        </>
    );
   }
}