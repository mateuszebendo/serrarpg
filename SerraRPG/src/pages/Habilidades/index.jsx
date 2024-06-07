import React from 'react';
import style from "./styles.module.css";
import Navbar from "../../components/Navbar";
import Button from "../../components/Buttons";
import Searchbar from "../../components/SearchBar";
import Card from "../../components/Card"
import { getSpells, getClasses } from "../../services/DndApi/api";
import { useState, useEffect } from 'react';
import { get, set } from 'firebase/database';

export default function Habilidades(){
    const [lista, setList] = useState([]);
    const [itemDesc, setItemDesc] = useState([]);

    async function getSpellsApi() {
        const results = await getSpells();
        setList(results.data.results);
        }

    async function getClassesApi() {
        const results = await getClasses();
        setList(results.data.results);
        }

        console.log(lista);
    return(
        <>
            <Navbar />
            <div className={style.geral}>
                <div className={style.itens}>
                    <h1>Itens</h1>
                    <div className={style.opcoes}>
                    <Searchbar/>
                        <Button title='Habilidade de classe' onClick={getClassesApi}/>
                        <Button title='Magias' onClick={getSpellsApi}/>
                    </div>
                    <br />
                </div>
                <div className={style.descricao}>
                    <Searchbar/>
                    <div className={style.anotacao}>
                    {
                        lista.map((index) => {
                            return <Card key={index} title={index}/>
                        })
                        }
                    </div>
                </div>
            </div>
        </>
    );
}