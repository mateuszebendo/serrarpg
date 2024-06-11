import React, { useState, useEffect, useContext} from 'react'
import { FichaContext } from '../../../../contexts/SheetContext/FichaContext';
import { getAll } from '../../../../services/DndApi/api';
import styles from './styles.module.css';

export default function Select(props) {
    const { personagemEditado, editaPersonagem } = useContext(FichaContext);
    const [lista, setLista] = useState([]);
    const [escolha, setEscolha] = useState("");

    async function getApiData() {
        const results = await getAll(props.url);
        setLista(results.data.results);
    }

    useEffect(() => {
        editaPersonagem({...personagemEditado, [props.tipo] : escolha})
    }, [escolha])

    useEffect(() => {
        getApiData();
    }, []);

    return (
        <div className={styles.container}>
            <label htmlFor={props.nome}>{props.nome}:</label>
            <select id={props.nome} name={props.nome} className={styles.campo} onChange={e => setEscolha(e.target.value)}>
                {lista.map(item => (
                    <option key={item.index} value={item.index}>
                        {item.name}
                    </option>
                ))}
            </select>
        </div>
    );
}