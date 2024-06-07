import React from 'react'
import Button from '../../components/Buttons';
import style from './styles.module.css'
import Card from '../../components/Card'
import Navbar from '../../components/Navbar'
import { getArmor,getWeapons,getRules,getRulesById } from "../../services/DndApi/api";
import { useState, useEffect } from 'react';
import { get, set } from 'firebase/database';

export default function Itens() {
    const [lista, setList] = useState([]);
    const [itemDesc, setItemDesc] = useState([]);

    async function getWeaponApi() {
        
        const results = await getWeapons();
        setList(results.data.equipment);
        }

    async function getArmorApi() {
        
        const results = await getArmor();
        setList(results.data.equipment);
        }
    async function getRulesApi() {
        
        const results = await getRules();
        console.log(results)
        setList(results.data.results);
        }
    async function getRulesApiById() {
        
        const results = await getRulesById();
        console.log(results)
        setItemDesc(results.data.results);
        }
    
    
    return (
        <>
            <Navbar />
            <div className={style.geral}>
                <div className={style.itens}>
                    <h1>Itens</h1>
                    <div className={style.opcoes}>
                        <Button title='Armas' onClick={getWeaponApi}/>
                        <Button title='Armaduras' onClick={getArmorApi}/>
                        <Button title='Regras' onClick={getRulesApi}/>
                    </div>
                    <br />
                </div>
                <div className={style.descricao}>
                    <h1>Descrição</h1>
                    <div className={style.anotacao}>
                        {
                        lista.map((name , index) => {
                            return <Card key={index} title={name} description={itemDesc}/>
                        })
                        }
                    </div>
                </div>
            </div>
        </>
    );
}