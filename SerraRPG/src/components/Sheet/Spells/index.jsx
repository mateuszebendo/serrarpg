import React, { useState, useEffect, useContext } from 'react'
import { FichaContext } from '../../../contexts/SheetContext/FichaContext';
import { getSpell } from '../../../services/DndApi/api';
import styles from './styles.module.css';

export default function Spells({ index }) {

    const { personagemEditado, editaPersonagem } = useContext(FichaContext);

    const [spell, setSpell] = useState({});

    async function getApiData() {
        const results = await getSpell(index);
        setSpell(results.data);
    }

    useEffect(() => {
        getApiData();
    }, []);

    // useEffect(() => {
    //     if (spell.index) {
    //         const novoSpell = {
    //             nome: spell.name,
    //             url: 'https://www.dnd5eapi.co/api/spells/' + spell.index
    //             // descricao: spell.desc,
    //             // niveis_mais_altos: spell.higher_level
    //         };

    //         const spellExiste = personagemEditado.inventario.magias.some(spell => spell.url === novoSpell.url)

    //         if (!spellExiste) {
    //             const novoInventario = {
    //                 ...personagemEditado.inventario,
    //                 magias: [
    //                     ...personagemEditado.inventario.magias, novoSpell
    //                 ]
    //             }
    //             const newSheetInfo = {
    //                 ...personagemEditado,
    //                 inventario: {
    //                     ...novoInventario
    //                 }
    //             }
    //             editaPersonagem({ ...personagemEditado, inventario: novoInventario })
    //                 ;
    //         }
    //     }
    // }, [spell])

    return (
        <div className={styles.container}>
            {spell.name && <h4>Nome: <br /> {spell.name}</h4>}
            {spell.desc && (
                <p className={styles.description}>
                    Descrição: <br />
                    {spell.desc.join(" ")}
                </p>
            )}
            {spell.higher_level && spell.higher_level.length > 0 && (
                <p className={styles.highLevels}>
                    Níveis mais altos: <br />
                    {spell.higher_level.join(" ")}
                </p>
            )}
        </div>
    );
}