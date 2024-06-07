import React from 'react'
import styles from './styles.module.css'
import Select from '../Select';
import Campo from './campoAtributo';

export default function Atributos(props) {
    return (
        <section className={styles.atributos}>
            <h3>Atributos</h3>

            <Campo nome="Força" tipo="number" />
            <Campo nome="Destreza" tipo="number" />
            <Campo nome="Constituição" tipo="number" />
            <Campo nome="Inteligência" tipo="number" />
            <Campo nome="Sabedoria" tipo="number" />
            <Campo nome="Carisma" tipo="number" />

            <section styles={styles.dadosAlternativos}>
                <h3>Atributos Secundários</h3>
                <div>
                    <Campo nome="Vida Total" desativado={true} />
                    <Campo nome="Vida Atual" tipo="number" />
                </div>
                <Campo nome="CA" desativado={true} />
                <Campo nome="Iniciativa" desativado={true} />
                <Campo nome="Movimento" desativado={true} />
                <Campo nome="Nível" tipo="number" />
            </section>
            <section className={styles.dados}>
                <img src={props.imagem} alt="foto da ficha" />
                <Campo nome="Nome" />
                <Select nome="Raça" tipo="race" url="races" />
                <Select nome="Classes" tipo="classes" url="classes" />
            </section>
        </section>
    );
}