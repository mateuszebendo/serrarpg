import React, { useContext, useEffect, useState } from 'react'
import { FichaContext } from '../../contexts/SheetContext/FichaContext.jsx';
import Modal from './Modal/index.jsx';
import styles from './styles.module.css'
import Atributos from './Atributos';
import icone from '../../assets/iconePessoa.png'
import Inventario from './Inventario';
import SelectType from './Select/SelectType/index.jsx';

export default function Sheet(props) {
    const { personagemEditado, editaPersonagem } = useContext(FichaContext);
    const [openModal, setOpenModal] = useState(false)
    const [nome, setNome] = useState("");

    function abrirModal(){
        setOpenModal(true)
    }

    useEffect(() => {
        editaPersonagem({ ...personagemEditado, nome: nome });
    }, [nome])

    return (
        <section className={styles.sheet}>
                    <h1 className={styles.tipo}>Ficha de {props.tipoFicha}</h1>
                    <div className={styles.informacoes}>
                        <Atributos />
                        <section className={styles.dados}>
                            <img src={personagemEditado.imagem || icone} alt="foto da ficha" />
                            <button onClick={abrirModal}>Alterar imagem</button>
                            <Modal isOpen={openModal} setOpenModal={() => setOpenModal(!openModal)}/>
                            <label>Nome</label>
                            <input onBlur={e => setNome(e.target.value)} />
                            <SelectType nome="Raça" tipo="raca" url="races" />
                            <SelectType nome="Classes" tipo="classe" url="classes" />
                        </section>
                    </div>
                    <section>
                        <h1 className={styles.tipo}>Inventario & Habilidades</h1>
                        <Inventario nome="Inventário" label="Nome do Item " endpoint='equipment' />
                        <Inventario nome="Feitiços" label="Nome do Feitiço " endpoint='spells' />
                    </section>
        </section>
    );
}