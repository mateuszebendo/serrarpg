import React from 'react'
import Button from '../../components/Buttons';
import style from './styles.module.css'
import Objetos from './Objetos'
import Navbar from '../../components/Navbar'
import { getArmor } from "../../services/DndApi/api";
import { useState, useEffect } from 'react';
import { get, set } from 'firebase/database';

export default function Itens() {
    const [lista, setList] = useState([]);

    useEffect(()=>{
        getArmorApi();
    },[]);

    async function getArmorApi() {
        
        const results = await getArmor();
        setList(results.data.equipment);

    }
    console.log(lista)
    
    return (
        <>
            <Navbar />
            <div className={style.geral}>
                <div className={style.itens}>
                    <h1>Itens</h1>
                    <div className={style.opcoes}>
                        <Button title='Armas' />
                        <Button title='Armaduras' />
                        <Button title='Recursos' />
                    </div>
                    <br />
                </div>
                <div className={style.descricao}>
                    <h1>Descrição</h1>
                    <div className={style.anotacao}>
                        {
                        lista.map((name , index) => {
                            return <Objetos key={index} name={name}/>
                        })
                        }
                    </div>
                </div>
            </div>
        </>
    );
}