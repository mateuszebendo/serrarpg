import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'
import Atributo from './Atributos';
import icone from '../../assets/iconePessoa.png'

export default function Sheet(props) {
    const [imagem, setImagem] = useState(icone);

    //Atributos 
    const [forca, setForca] = useState(10);
    const [destreza, setDex] = useState(10);
    const [constituicao, setConst] = useState(10);
    const [inteligencia, setInt] = useState(10);
    const [sabedoria, setSab] = useState(10);
    const [carisma, setCar] = useState(10);

    //Modificadores 
    const [modFor, setModFor] = useState(0);
    const [modDex, setModDex] = useState(0); 
    const [modConst, setModConst] = useState(0);
    const [modInt, setModInt] = useState(0);
    const [modSab, setModSab] = useState(0);
    const [modCar, setModCar] = useState(0)


    function calculaModificador(atributo){
        let mod = (Number(atributo) - 10)/2 
        return Math.floor(mod)
    }
    //Calculo de modificadores 
    useEffect(() => {
        setModFor(calculaModificador(forca));
        setModDex(calculaModificador(destreza));
        setModConst(calculaModificador(constituicao));
        setModInt(calculaModificador(inteligencia));
        setModSab(calculaModificador(sabedoria));
        setModCar(calculaModificador(carisma));
    }, [forca, destreza, constituicao, inteligencia, sabedoria, carisma]);

    //Atributos secundários
    const [vida, setVida] = useState();
    const [ca, setCA] = useState();
    const [iniciativa, setIniciativa] = useState();

    useEffect(() => {
        if (props.imagem !== undefined) {
            setImagem(props.imagem);
        }
    }, [props.imagem]);

    useEffect(function calculaClasseArmadura() {
        let valorCA = (11 + Number(modDex))
        setCA(setCA => valorCA);
    }, [destreza]);

    return (
        <section className={styles.sheet}>
            <h1 className={styles.tipo}>Ficha de {props.tipoFicha}</h1>
            <div className={styles.informacoes}>
                <section className={styles.atributos}>
                    <h3>Atributos</h3>


                    <Atributo nome="Força" modificador={modFor} tipo="number" valor={forca} onChange={e => setForca(e.target.value)} />
                    <Atributo nome="Destreza" modificador={modDex} tipo="number" valor={destreza} onChange={e => setDex(e.target.value)} />
                    <Atributo nome="Constituição" modificador={modConst} tipo="number" valor={constituicao}  onChange={e => setConst(e.target.value)}/>
                    <Atributo nome="Inteligência" modificador={modInt} tipo="number" valor={inteligencia} onChange={e => setInt(e.target.value)}/>
                    <Atributo nome="Sabedoria" modificdor={modSab} tipo="number" valor={sabedoria} onChange={e => setSab(e.target.value)}/>
                    <Atributo nome="Carisma" modificador={modCar} tipo="number" valor={carisma} onChange={e => setCar(e.target.value)}/>


                    <section styles={styles.dadosAlternativos}>
                        <h3>Atributos Secundários</h3>
                        <Atributo nome="Vida" />
                        <Atributo nome="CA" valor={ca} desativado="true" />
                        <Atributo nome="Iniciativa" desativado="true" />
                        <Atributo nome="Movimento" desativado="true" />
                        <Atributo nome="Raça" />
                        <Atributo nome="Classe" />
                    </section>
                </section>
                <section className={styles.dados}>
                    <img src={imagem} alt="foto da ficha" />
                    <Atributo nome="Nome" />
                    <Atributo nome="Raça" />
                    <Atributo nome="Classe" />
                </section>
            </div>

        </section>
    );
}