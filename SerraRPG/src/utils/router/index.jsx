import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from '../../pages/Home';
import Cadastro from '../../pages/Cadastro';
import Fichas from '../../pages/Fichas';
import Monstros from '../../pages/Monstros';
import Itens from '../../pages/Itens';
import Habilidades from '../../pages/Habilidades';
import ErrorPage from '../../pages/ErrorPage';
import Private from './Private';

  function RoutesApp() {
    return(
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        
        <Route path="/fichas" element={<Private><Fichas /></Private>} />
        <Route path="/monstros" element={<Private><Monstros /></Private>} />
        <Route path="/itens" element={<Private><Itens /></Private>} />
        <Route path="/habilidades" element={<Private><Habilidades /></Private>}/>
        
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    );
  }

  export default RoutesApp;