import React, { useState, useEffect, useContext } from 'react';
import { FichaContext } from '../../../contexts/SheetContext/FichaContext';
import styles from './styles.module.css';

export default function campoAtributo(props) {
    //PROBLEMA QUE O MODIFICADOR NAO ESTA SENDO ATUALIZADO
    const { personagemEditado, editaPersonagem } = useContext(FichaContext);
    const [valorAtributo, setValorAtributo] = useState(10);
    const [modificador, setModificador] = useState(Math.floor((valorAtributo - 10) / 2));


    function alteraAtributo(e) {
        setValorAtributo(e.target.value);
    }

    useEffect(() => {
        setModificador(Math.floor((valorAtributo - 10) / 2));
        const atributos = {...personagemEditado.atributos, [props.chave] : valorAtributo}
        editaPersonagem({...personagemEditado, atributos});
    }, [valorAtributo]);

    useEffect(()=> {
        const nomeMod = 'mod' + props.chave
        const modificadores = {...personagemEditado.atributos.modificadores, [nomeMod]: modificador}
        editaPersonagem({...personagemEditado.atributos, modificadores})
    }, [modificador]);

    return (
        <section className={styles.atributo}>

            <label htmlFor="nome">{props.nome}{props.mod && (`(${modificador})`)}: </label>

            <input type={props.tipo} name="nome" className={styles.campo} value={valorAtributo} disabled={props.desativado} onChange={e => alteraAtributo(e)} />

        </section>
    );

}
