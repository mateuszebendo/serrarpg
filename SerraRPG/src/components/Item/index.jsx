import React, { useState, useEffect } from 'react'
import { getItem } from '../../services/DndApi/api';
import styles from './styles.module.css';

export default function Item({index}){
    
    const [item, setItem] = useState({});
    
    async function getApiData() {
        const results = await getItem(index);
        setItem(results.data);
    }

    useEffect(() => {
        getApiData();
    }, []);
   
    return(
        <div className={styles.container}>
            {item.name && <h4>Nome: {item.name}</h4>}
            {item.weight && <p>Peso: {item.weight}KG</p>}
            {item.cost && <p>Preço: {item.cost.quantity} {item.cost.unit}</p>}
            {item.equipment_category && <p>Categoria: {item.equipment_category.name}</p>}
        </div>
    );
}