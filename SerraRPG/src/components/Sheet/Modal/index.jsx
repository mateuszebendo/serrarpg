import React, { useContext, useState } from 'react'
import { FichaContext } from '../../../contexts/SheetContext/FichaContext';
import styles from './styles.module.css'

export default function Modal({ isOpen, setOpenModal }) {
    const [imagem, setImagem] = useState();
    const { personagemEditado, editaPersonagem } = useContext(FichaContext);

    function alteraImagem() {
        const novaImagem = {
            ...personagemEditado,
            imagem: imagem
        }
        editaPersonagem(novaImagem)
        setOpenModal();
    }


    if (isOpen) {
        return (
            <div className={styles.background}>
                <div className={styles.container}>
                    <h1>Adicione o URL da Imagem: </h1>
                    <input type="text" placeholder="URL" onChange={e => setImagem(e.target.value)} />
                    <button onClick={alteraImagem}>Adicionar imagem</button>
                </div>
            </div>
        )
    }
}
