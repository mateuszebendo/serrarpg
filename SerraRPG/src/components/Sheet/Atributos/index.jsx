import React from 'react'; 
import styles from './styles.module.css';

export default function Atributo(props){
    if(props.modificador != undefined){
    return(
        <section className={styles.atributo}>

        <label htmlFor="nome">{props.nome}({props.modificador}): </label>
        
        <input type={props.tipo} name="nome" className={styles.campo} value={props.valor} disabled={props.desativado} onChange={props.onChange}/>

        </section>
    );} else {
        return(
        <section className={styles.atributo}>

        <label htmlFor="nome">{props.nome}: </label>
        
        <input type={props.tipo} name="nome" className={styles.campo} value={props.valor} disabled={props.desativado} onChange={props.onChange}/>

        </section>
        )
    }
    
}