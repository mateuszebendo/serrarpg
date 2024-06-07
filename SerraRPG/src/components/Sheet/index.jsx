import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'
import Atributos from './Atributos';
import icone from '../../assets/iconePessoa.png'
import Inventario from './Inventario';

export default function Sheet(props) {

    return (
        <section className={styles.sheet}>
            <h1 className={styles.tipo}>Ficha de {props.tipoFicha}</h1>
            <div className={styles.informacoes}>
                <Atributos imagem={icone}/>
            </div>
            <section>
                    <h1 className={styles.tipo}>Inventario & Habilidades</h1>
                    <Inventario nome="Inventário" label="Nome do Item " endpoint='equipment'/>
            </section>
        </section>
    );
}