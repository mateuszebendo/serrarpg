import React from 'react'
import Button from '../../components/Buttons';
import style from './styles.module.css'
import Card from '../../components/Card'
import Navbar from '../../components/Navbar'
import { getArmor, getWeapons, getRules, getMagicItems } from "../../services/DndApi/api";
import { useState, useEffect } from 'react';
import SearchBar from '../../components/SearchBar';

export default function Itens() {
    const [search, setSearch] = useState('');
    const [cardType, setCardType] = useState("");
    const [lista, setList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);

    async function getWeaponApi() {
        const results = await getWeapons();
        setCardType("weapons");

        setList(results.data.equipment)
        setFilteredList(results.data.equipment)
    }
    async function getMagicItemsApi() {
        const results = await getMagicItems();
        setCardType("magic");

        setList(results.data.results);
        setFilteredList(results.data.results);
    }

    async function getArmorApi() {
        const results = await getArmor();
        setCardType("armor");

        setList(results.data.equipment);
        setFilteredList(results.data.equipment);
    }
    async function getRulesApi() {
        const results = await getRules();
        setCardType("rules");

        setList(results.data.results);
        setFilteredList(results.data.results);
    }

    function pesquisa() {
        const filtered = lista.filter(e => e.name.toLowerCase().includes(search.toLowerCase()));
        setFilteredList(filtered);
    }

    useEffect(() => {
        pesquisa()
    }, [search])
    
    return (
        <>
            <Navbar />
            <div className={style.geral}>
                <div className={style.itens}>
                    <h1>Itens</h1>
                    <div className={style.opcoes}>
                        <Button title='Armas' onClick={getWeaponApi} />
                        <Button title='Armaduras' onClick={getArmorApi} />
                        <Button title='Itens Magicos' onClick={getMagicItemsApi} />
                        <Button title='Regras' onClick={getRulesApi} />
                    </div>
                    <br />
                </div>
                <div className={style.descricao}>
                    <h1>Descrição</h1>
                    <SearchBar onChange={e => setSearch(e.target.value)} />
                    <div className={style.anotacao}>
                        {
                            filteredList.length > 0 ?
                                filteredList.map((index) => {
                                    
                                    switch (cardType) {
                                        case "weapons":
                                            return <Card key={index} title={index} cardType={cardType} firstLine={"Alcance: "} secondLine={"Dano: "} thirdLine={"Peso: "} />
                                        case "armor":
                                            return <Card key={index} title={index} cardType={cardType} firstLine={"Tipo: "} secondLine={"Classe: "} thirdLine={"Peso: "} />
                                        case "magic":
                                            return <Card key={index} title={index} cardType={cardType} firstLine={"Categoria: "} secondLine={"Raridade: "} thirdLine={"Descrição: "} />
                                        case "rules":
                                            return <Card key={index} title={index} cardType={cardType} firstLine={"Descrição: "} />
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