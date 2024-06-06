import React, { useState, useEffect } from 'react'
import Item from '../../Item';
import Select from '../../Select';
import styles from './styles.module.css'

export default function Inventario(props) {

    const [listItens, setListItens] = useState([]);
    let item;

    function adicionarItem() {
        setListItens([...listItens, item]);
        vazio = false;
    }

    function escolheItem(e) {
        item = e.target.value;
    }

    return (
        <section className={styles.inventario}>

            <h3>{props.nome} </h3>
            <div>
                <section className={styles.topo}>
                    <Select nome={props.label} url={props.endpoint} onChange={escolheItem} />
                    <button onClick={adicionarItem} className={styles.btn}>Adicionar</button>
                </section>
                <section className={styles.lista}>

                    { listItens.length == 0  ? <p>Inventário vazio</p> :
                                listItens.map(item => {
                                    return <p><Item index={item} /></p>
                                })
                    }

                </section>
            </div>
        </section>
    );
}