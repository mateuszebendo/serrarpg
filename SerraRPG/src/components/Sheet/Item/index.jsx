import React, { useState, useEffect, useContext } from 'react'
import { FichaContext } from '../../../contexts/SheetContext/FichaContext';
import { getItem } from '../../../services/DndApi/api';
import styles from './styles.module.css';

export default function Item({ index }) {
    const { personagemEditado, editaPersonagem } = useContext(FichaContext);
    const [item, setItem] = useState({});

    async function getApiData() {
        const results = await getItem(index);
        setItem(results.data);
    }

    useEffect(() => {
        getApiData();
    }, []);


    // useEffect(() => {
    //     if (item.index) {
    //         const novoItem = {
    //             nome: item.name,
    //             url: 'https://www.dnd5eapi.co/api/spells/' + item.index
    //         };
    
    //         const itemExiste = personagemEditado.inventario.itens.some(item => item.url === novoItem.url);
    
    //         if (!itemExiste) {
    //             const novoInventario = {
    //                 ...personagemEditado.inventario,
    //                 itens: [
    //                     ...personagemEditado.inventario.itens, novoItem
    //                 ]
    //             };
    
    //             const newSheetInfo = {
    //                 ...personagemEditado,
    //                 inventario: novoInventario
    //             };
    
    //             editaPersonagem({newSheetInfo});
    //         }
    //     }
    // }, [item]);
    


    return (
        <div className={styles.container}>
            {item.name && <h4>Nome: {item.name}</h4>}
            {item.weight > 0 && <p>Peso: {item.weight}KG</p>}
            {item.cost && <p>Preço: {item.cost.quantity} {item.cost.unit}</p>}
            {item.equipment_category && <p>Categoria: {item.equipment_category.name}</p>}
            {item.desc && item.desc.length > 0 && (
                <p>
                    Descrição: <br />
                    {item.desc[0]}
                </p>
            )}
        </div>
    );
}