import React, { useState } from 'react'
import Item from '../Item';
import Spells from '../Spells';
import SelectInvetory from '../Select/SelectInvetory';
import styles from './styles.module.css'

export default function Inventario(props) {
    const [listItens, setListItens] = useState([]);
    let item;

    function adicionarItem() {
        setListItens([...listItens, item]);
        
    }

    function escolheItem(e) {
        item = e.target.value;
    }

    return (
        <section className={styles.inventario}>

            <h3>{props.nome} </h3>
            <div>
                <section className={styles.topo}>
                    <SelectInvetory nome={props.label} url={props.endpoint} onChange={escolheItem} />
                    <button onClick={adicionarItem} className={styles.btn}>Adicionar</button>
                </section>
                <section >

                    { listItens.length == 0  ? <p>Inventário vazio</p> :
                                listItens.map(item => {
                                    return <div key={item} className={styles.item}>{props.endpoint == 'equipment' ? 
                                    <Item index={item} /> : <Spells index={item}/>}</div>
                                })
                    }

                </section>
            </div>
        </section>
    );
}