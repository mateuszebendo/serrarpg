import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Cadastro from '../../pages/Cadastro';
import Fichas from '../../pages/Fichas';
import Monstros from '../../pages/Monstros';
import Itens from '../../pages/Itens';
import Habilidades from '../../pages/Habilidades';
import ErrorPage from '../../pages/ErrorPage';

function RoutesApp() {
  return (
    <Routes>
      <Route element={<Home />}>
        <Route path="/" element={<Home />} />
        <Route path="cadastro" element={<Cadastro />} />
        <Route path="fichas" element={<Fichas />} />
        <Route path="monstros" element={<Monstros />} />
        <Route path="itens" element={<Itens />} />
        <Route path="habilidades" element={<Habilidades />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default RoutesApp;