import React from 'react'
import Button from '../../components/Buttons';
import style from './styles.module.css'
//import { getArmor } from "../../services/DndApi/api";
import { useState, useEffect } from 'react';
import { get, set } from 'firebase/database';

export default function Itens() {
    /*const [armorList, setArmorList] = useState({});

    useEffect(()=>{
        getArmorApi();
    },[]);

    async function getArmorApi() {
        try {
            const result = await getArmor();
            setArmorList(result.data.result);
        }catch {
            console.log('deu erro')
        }
        console.log(armorList)
    }*/
    
    return (
        <>
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
                        Coloca oq quer aqui
                        Coloca oq quer aqui
                        Coloca oq quer aqui
                        Coloca oq quer aqui
                    </div>
                </div>
            </div>
        </>
    );
}