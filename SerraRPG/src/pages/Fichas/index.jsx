import React, { useState, useContext, useEffect } from 'react';
import { FichaContext } from '../../contexts/SheetContext/FichaContext';
import { AuthContext } from '../../contexts/auth';
import { loadFichas } from '../../contexts/SheetContext/dataBase';
import { v4 as uuid } from 'uuid';
import { registraFichas, atualizaFicha } from '../../contexts/SheetContext/dataBase';
import fichaJSON from '../../data/ficha.json';
import Sheet from '../../components/Sheet';
import Button from '../../components/Buttons';
import styles from './styles.module.css';
import Navbar from '../../components/Navbar';

export default function Fichas() {
    const { personagemEditado, editaPersonagem } = useContext(FichaContext);
    const [personagensAtuais, setPersonagensAtuais] = useState([]);
    const { getStoredUser } = useContext(AuthContext);
    const storedUser = getStoredUser();

    useEffect(() => {
        const fetchData = async () => {
            const storagePersonagens = await loadFichas(storedUser);
            if (storagePersonagens) {
                setPersonagensAtuais(storagePersonagens);
            }
        };

        fetchData().catch(error => console.error('Error fetching data:', error));
    }, []);

    useEffect(() => {
        if (personagemEditado && !personagensAtuais.some(ficha => ficha.fichaId === personagemEditado.fichaId)) {
            setPersonagensAtuais([...personagensAtuais, personagemEditado]);
        }
    }, [personagemEditado, personagensAtuais]);

    function trocaFicha(id) {
        const fichaEscolhida = personagensAtuais.find(ficha => ficha.fichaId === id);
        editaPersonagem(fichaEscolhida);
    }

    function criaFicha() {
        const novoPersonagem = {
            fichaId: uuid(),
            usuario: storedUser.nome,
            userId: storedUser.uid,
            ...fichaJSON
        };
        editaPersonagem(novoPersonagem);
    }

    function atualizarFichas() {
        atualizaFicha(personagensAtuais).then(() => {
            console.log('Fichas salvas com sucesso');
        }).catch(error => {
            console.error('Erro ao salvar fichas:', error);
        });
    }

    function salvaFichas() {
        registraFichas(personagensAtuais).then(() => {
            console.log('Fichas salvas com sucesso');
        }).catch(error => {
            console.error('Erro ao salvar fichas:', error);
        });
    }

    function handleSubmit() {
        let resultadoPesquisa = personagensAtuais.find(ficha => personagemEditado.fichaId === ficha.fichaId);

        if (!resultadoPesquisa) {
            setPersonagensAtuais([...personagensAtuais, personagemEditado]);
        } else {
            setPersonagensAtuais(personagensAtuais.filter(ficha => {
                resultadoPesquisa.fichaId === ficha.fichaId
            }));
        }
    }

    console.log("PERSONAGENS ATUAIS: " + JSON.stringify(personagensAtuais))
    console.log("PERSONAGEM EM CONTEXTO: " + JSON.stringify(personagemEditado))

    return (
        <>
            <Navbar />
            <section className={styles.geral}>
                <div className={styles.fichas}>
                    <div className={styles.itens}>
                        <h1>Minhas Fichas</h1>
                        <div className={styles.opcoes}>
                            {personagensAtuais.length > 0 ? (
                                personagensAtuais.map((ficha) => (
                                    <Button key={ficha.fichaId} id={ficha.fichaId} title={ficha.nome || ficha.fichaId} onClick={() => trocaFicha(ficha.fichaId)} />
                                ))
                            ) : (
                                <h1>Nenhuma ficha encontrada!</h1>
                            )}
                            <Button title='Criar ficha' onClick={criaFicha} />
                        </div>
                        <br />
                    </div>
                    <Button title='Salvar fichas' className={styles.salvarFicha} onClick={salvaFichas} />
                    <Button title='Atualizar fichas' className={styles.salvarFicha} onClick={atualizarFichas} />
                </div>
                <div className={styles.container}>
                    {personagemEditado ? (
                        <div className={styles.campoFicha}>
                            <Sheet tipoFicha="Personagem" />
                            <button onClick={handleSubmit} className={styles.salvar}>Salvar</button>
                        </div>
                    ) : (
                        <figure className={styles.sozinho}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Toothless-dancing-toothless.gif" alt="dragao fofo" />
                            <h1>Nenhuma ficha encontrada...</h1>
                        </figure>
                    )}
                </div>
            </section>
        </>
    );
}
