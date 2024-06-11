import React, { createContext, useState, useEffect } from 'react';

export const FichaContext = createContext();

export default function FichaProvider({ children }) {
    const listaPersonagens = localStorage.getItem('@fichas') ? JSON.parse(localStorage.getItem('@fichas')) : [];
    const [personagens, setPersonagens] = useState(listaPersonagens);
    const [personagemEditado, setPersonagemEditado] = useState(null);


    function addPersonagem(novoPersonagem) {
        setPersonagens([...personagens, novoPersonagem]);
    }

    function alterarPersonagem(personagemAtualizado) {
        setPersonagens(
            personagens.map((personagemAntigo) =>
            (personagemAntigo.id === personagemAtualizado.id ?
                personagemAtualizado : personagemAntigo
            )))
    }

    function editaPersonagem(personagemEditado) {
        setPersonagemEditado(personagemEditado);
    }

    function salvaPersonagem(personagem) {
        if (personagemEditado) {
            alterarPersonagem(personagem)
        } else {
            addPersonagem(personagem)
        }
        setPersonagemEditado(null)
    }

    console.log(personagens)

    return (
        <FichaContext.Provider value={{ personagens, personagemEditado, addPersonagem, alterarPersonagem, editaPersonagem, salvaPersonagem, setPersonagens }}>
            {children}
        </FichaContext.Provider>
    )
}
