import React, { createContext, useState } from 'react';
import ficha from '../../data/ficha.json';

export const FichaContext = createContext();

export default function FichaProvider({ children }) {
    const [personagens, setPersonagens] = useState([]);
    const [personagemEditado, setPersonagemEditado] = useState(null);

    function addPersonagem(novoPersonagem) {
        setPersonagens([...personagens, novoPersonagem]);
    }

    function alterarPersonagem(personagemAtualizado) {
        setPersonagens(
            personagens.map((personagemAntigo) =>
            (personagemAntigo.nome === personagemAtualizado.nome ?
                personagemAtualizado : personagemAntigo
            )))
    }

    function editaPersonagem(personagemEditado){
        setPersonagemEditado(personagemEditado);
    }

    function salvaPersonagem(personagem){
        if(personagemEditado){
            alterarPersonagem(personagem)
        } else {
            addPersonagem(personagem)
        } 
        setPersonagemEditado(null);
    }

    console.log(JSON.stringify(personagens))

    return (
        <FichaContext.Provider value={{ personagens, personagemEditado, addPersonagem, alterarPersonagem, editaPersonagem, salvaPersonagem }}>
            {children}
        </FichaContext.Provider>
    )
}