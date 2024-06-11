import React from 'react';
import style from "./styles.module.css";
import Navbar from "../../components/Navbar";
import Button from "../../components/Buttons";
import Card from "../../components/Card"
import { getSpells, getClassesSkills } from "../../services/DndApi/api";
import { useState, useEffect } from 'react';
import SearchBar from '../../components/SearchBar';

export default function Habilidades(){
    const [lista, setList] = useState([]);
    const[search, setSearch] = useState('');
    const[filteredList, setFilteredList] = useState([]);
    const[cardType, setCardType] = useState("");

    async function getSpellsApi() {
        const results = await getSpells();
        setList(results.data.results);
        setFilteredList(results.data.results);
        setCardType("spells")
        }

    async function getClassesApi() {
        const results = await getClassesSkills();
        setList(results.data.results);
        setFilteredList(results.data.results);
        setCardType("classesSkills")
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
                            switch(cardType){
                            case "classesSkills":
                                return <Card key={index} title={index} cardType={cardType} firstLine={"Classe: "} secondLine={"Nível: "} thirdLine={"Descrição: "}/>
                            case "spells":
                                return <Card key={index} title={index} cardType={cardType} firstLine={"Nível: "} secondLine={"Descrição: "} thirdLine={"Tipo de magia: "}/>
                            }
                        })
                    : <p>Escolha uma opção</p>
                    }
                    </div>
                </div>
            </div>
        </>
    );
}