import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Card from '../../components/Card';
import { getMonsterList } from "../../services/DndApi/api";
import styles from './styles.module.css';
import Button from '../../components/Buttons';
import SearchBar from '../../components/SearchBar';
import LazyLoad from 'react-lazyload';

export default function Monstros() {
    const [search, setSearch] = useState('');
    const [cardType, setCardType] = useState('');
    const [lista, setList] = useState([]);
    const [monsterImageUrl, setMonsterImageUrl] = useState('');
    const [filteredList, setFilteredList] = useState([]);

    useEffect(() => {
        pesquisa();
    }, [search]);

    useEffect(() => {
        setMonsterImageUrl('');
    }, [filteredList]);

    useEffect(() => {
        console.log("URL da imagem atualizada:", monsterImageUrl);
    }, [monsterImageUrl]);

    useEffect(() => {
        console.log("Lista filtrada atualizada:", filteredList);
    }, [filteredList]);

    function pesquisa() {
        const filtered = lista.filter(e => e.name.toLowerCase().includes(search.toLowerCase()));
        setFilteredList(filtered);
    }

    async function getMonsterApi() {
        const results = await getMonsterList();
        setCardType("monsters");
        setList(results.data.results);
        setFilteredList(results.data.results);
    }

    function handleOpenImage(monster) {
        const monsterName = monster.name.toLowerCase().replace(/\s+/g, '-');
        const url = `https://www.dnd5eapi.co/api/images/monsters/${monsterName}.png`;
        setMonsterImageUrl(url);
        console.log(url);
    }

    return (
        <>
            <Navbar />
            <div className={styles.monsterContainer}>
                <div className={styles.monsterContent}>
                    <h1>Monstro</h1>
                    <div className={styles.monsterImageNButton}>
                        {monsterImageUrl ? (
                            <LazyLoad>
                                < img className={styles.monsterImage} src={monsterImageUrl} alt="imagem da Api" />
                            </LazyLoad>
                        ) : (
                            <Button title='Lista de monstros' onClick={getMonsterApi} />
                        )}
                    </div>
                </div>
                <div className={styles.descricao}>
                    <h1>Descrição</h1>
                    <SearchBar onChange={e => setSearch(e.target.value)} />
                    <div className={styles.anotacao}>
                        {filteredList.length > 0 ? (
                            filteredList.map((monster, index) => (
                                <Card
                                    key={index}
                                    title={monster}
                                    cardType={cardType}
                                    firstLine={`Pontos de vida:`}
                                    secondLine={`Tipo:`}
                                    thirdLine={`Tamanho:`}
                                    onClick={() => handleOpenImage(monster)}
                                />
                            ))
                        ) : (
                            <p>Escolha uma opção</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
