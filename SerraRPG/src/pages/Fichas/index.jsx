import React, { useState, useContext, useEffect } from 'react';
import { FichaContext } from '../../contexts/SheetContext/FichaContext';
import fichaJSON from '../../data/ficha.json'
import Sheet from '../../components/Sheet';
import Button from '../../components/Buttons';
import styles from './styles.module.css';
import Navbar from '../../components/Navbar';

export default function Fichas() {
    const { personagemEditado, salvaPersonagem } = useContext(FichaContext);
    const [ficha, setFicha] = useState(null);

    function criaFicha(){
        salvaPersonagem(fichaJSON);
        // setFicha({personagemEditado})
    }

    function handleSubmit() {
        salvaPersonagem(ficha);
    }

    console.log(personagemEditado)

    return (
        <>
            <Navbar />
            <section className={styles.geral}>
                <div className={styles.itens}>
                    <h1>Minhas Fichas</h1>
                    <div className={styles.opcoes}>
                        <Button title='Criar ficha' onClick={criaFicha}/>
                    </div>
                    <br />
                </div>
                <form className={styles.container} onSubmit={handleSubmit}>
                    {ficha ? 
                    <div>
                    <Sheet tipoFicha="Personagem" imagem="https://cdn.oneesports.gg/cdn-data/2023/05/Anime_OshinoKo_HoshinoAi_Disguise_Wallpaper.jpg" />
                    <button type="submit">Salvar</button>
                    </div>
                     : <h1>Nenhuma ficha encontrada!</h1>}
                     
                </form>
            </section>
        </>
    );
}
