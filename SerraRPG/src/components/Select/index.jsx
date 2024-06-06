import React, { useState, useEffect } from 'react'
import { getAll } from '../../services/DndApi/api';
import styles from './styles.module.css';

export default function Select(props) {

        const [lista, setLista] = useState([]);

        async function getApiData() {
                const results = await getAll(props.url);
                setLista(results.data.results);
        }

        useEffect(() => {
            getApiData();
        }, []);

        return (
            <div className={styles.container}>
                <label htmlFor={props.nome}>{props.nome}:</label>
                <select id={props.nome} name={props.nome} className={styles.campo} onChange={props.onChange}>
                    {lista.map(item => (
                        <option key={item.index} value={item.index}>
                            {item.name}
                        </option>
                    ))}
                </select>
            </div>
        );
}