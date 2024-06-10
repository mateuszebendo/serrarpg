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
        setList(results.data.equipment);
        setFilteredList(results.data.equipment);
        setCardType("weapons");
    }
    async function getMagicItemsApi() {

        const results = await getMagicItems();
        setList(results.data.results);
        setFilteredList(results.data.results);
        setCardType("magic");
    }

    async function getArmorApi() {

        const results = await getArmor();
        setList(results.data.equipment);
        setFilteredList(results.data.equipment);
        setCardType("armor");
        }
    async function getRulesApi() {

        const results = await getRules();
        console.log(results)
        setList(results.data.results);
        setFilteredList(results.data.results);
        setCardType("rules");
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
                                    return cardType == "weapons" ? <Card key={index} title={index} firstLine={"Alcance: "} secondLine={"Dano: "} thirdLine={"Peso: "} /> : cardType == "armor" ? <Card key={index} title={index} firstLine={"Tipo: "} secondLine={"Classe: "} thirdLine={"Peso: "} /> : cardType == "magic" ? <Card key={index} title={index} firstLine={"Categoria: "} secondLine={"Raridade: "} thirdLine={"Descrição: "} /> : <Card key={index} title={index} firstLine={"Descrição: "} />
                                })
                                : <p>Escolha uma opção</p>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}