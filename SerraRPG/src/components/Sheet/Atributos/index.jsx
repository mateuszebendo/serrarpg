import React from 'react'
import styles from './styles.module.css'
import Campo from '../campoAtributo';

export default function Atributos(props) {
    return (
        <section className={styles.atributos}>
            <h3>Atributos</h3>

            <Campo nome="Força" chave="forca" tipo="number" mod={true}/>
            <Campo nome="Destreza" chave="destreza" tipo="number" mod={true}/>
            <Campo nome="Constituição" chave="constituicao" tipo="number" mod={true}/>
            <Campo nome="Inteligência" chave="inteligencia" tipo="number" mod={true}/>
            <Campo nome="Sabedoria" chave="sabedoria" tipo="number" mod={true}/>
            <Campo nome="Carisma" chave="carisma" tipo="number" mod={true}/>

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
        </section>
    );
}