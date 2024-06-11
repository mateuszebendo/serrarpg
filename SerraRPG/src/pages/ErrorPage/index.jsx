import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import pedro from '../../../public/pedro.mp3';

export default function ErrorPage() {
    const [volume, setVolume] = useState(0.1);
    const audioRef = React.createRef();

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
        }
    }, [volume]);

    return (
        <div className={styles.error}>
            <audio ref={audioRef} src={pedro} autoPlay loop />

            <h1>Calma lá, mestre!</h1>
            <p>Foi mal, um erro desconhecido aconteceu :/.</p>
            <img
                src="https://media2.giphy.com/media/Dg4TxjYikCpiGd7tYs/giphy.gif?cid=790b7611kohb0u4rfo04vwo9fgf4zh55b3lkunuqg1f14ocj&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                alt="PEDRO PEDRO PEDRO" className={styles.pedro} />
        </div>
    );
}
