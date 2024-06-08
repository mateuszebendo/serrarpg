import React from 'react';
import style from "./styles.module.css";
import Navbar from "../../components/Navbar";
import Button from "../../components/Buttons";
import Searchbar from "../../components/SearchBar";
import Card from "../../components/Card"
import { getSpells, getClasses } from "../../services/DndApi/api";
import { useState, useEffect } from 'react';
import { get, set } from 'firebase/database';
import SearchBar from '../../components/SearchBar';

export default function Habilidades(){
    const [lista, setList] = useState([]);
    const[search, setSearch] = useState('');
    const[filteredList, setFilteredList] = useState([]);

    async function getSpellsApi() {
        const results = await getSpells();
        setList(results.data.results);
        setFilteredList(results.data.results);
        }

    async function getClassesApi() {
        const results = await getClasses();
        setList(results.data.results);
        setFilteredList(results.data.results);
        }

        function pesquisa() {
            const filtered = lista.filter(e => e.name.toLowerCase().includes(search.toLowerCase()));
            setFilteredList(filtered);
        }

        useEffect(() => {
            pesquisa()
        },[search])

    return(
        <>
            <Navbar />
            <div className={style.geral}>
                <div className={style.itens}>
                    <h1>Habilidades</h1>
                    <div className={style.opcoes}>
                        <Button title='Habilidade de classe' onClick={getClassesApi}/>
                        <Button title='Magias' onClick={getSpellsApi}/>
                    </div>
                    <br />
                </div>
                <div className={style.descricao}>
                    <SearchBar onChange={e => setSearch(e.target.value)}/>
                    <div className={style.anotacao}>
                    {
                    filteredList.length > 0 ?
                        filteredList.map((index) => {
                            return <Card key={index} title={index}/>
                        })
                     : <p>Escolha uma opção</p>
                    }
                    </div>
                </div>
            </div>
        </>
    );
}