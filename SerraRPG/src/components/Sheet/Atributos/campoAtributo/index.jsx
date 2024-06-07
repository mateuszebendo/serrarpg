import React, {useState} from 'react'; 
import styles from './styles.module.css';

export default function campoAtributo(props){

    const [valoArtributo, setValorAtributo] = useState(10);
    const [modificador, setModificador] = useState((valoArtributo-10)/2);
    const mostraModificador = props.modificador;

    useEffect(()=> {
        setModificador((valoArtributo-10)/2);
    }, [valorAtributo]);

    return(
        <section className={styles.atributo}>

        <label htmlFor="nome">{props.nome}{props.modificador != undefined && (mostraModificador)}: </label>
        
        <input type={props.tipo} name="nome" className={styles.campo} value={props.valor} disabled={props.desativado} onChange={props.onChange}/>

        </section>
    ); 
    
}
