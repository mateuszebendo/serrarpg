import React, { useState, useEffect } from 'react'
import { getRacas } from '../../services/DndApi/api';
import { getClasses } from '../../services/DndApi/api';
import styles from "./styles.module.css";

export default function Select(props) {

    if (props.tipo == "race") {
        const [lista, setLista] = useState([]);

        async function getApiData() {
            try {
                const results = await getRacas();
                setLista(results.data.results);
            } catch (error) {
                console.error('Erro ao obter dados da API:', error);
            }
        }

        useEffect(() => {
            getApiData();
        }, []);

        return (
            <div className={styles.container}>
                <label htmlFor={props.nome}>{props.nome}:</label>
                <select id={props.nome} name={props.nome} className={styles.campo}>
                    {lista.map(item => (
                        <option key={item.index}>
                            {item.name}
                        </option>
                    ))}
                </select>
            </div>
        );
    } else {
        const [lista, setLista] = useState([]);

        async function getApiData() {
            try {
                const results = await getClasses();
                setLista(results.data.results);
            } catch (error) {
                console.error('Erro ao obter dados da API:', error);
            }
        }

        useEffect(() => {
            getApiData();
        }, []);

        return (
            <div className={styles.container}>
                <label htmlFor={props.nome}>{props.nome}:</label>
                <select id={props.nome} name={props.nome} className={styles.campo}>
                    {lista.map(item => (
                        <option key={item.index}>
                            {item.name}
                        </option>
                    ))}
                </select>
            </div>
        )
    }
}