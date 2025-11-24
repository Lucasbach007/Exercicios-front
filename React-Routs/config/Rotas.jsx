import React, { useState } from 'react'; // 👈 Importe 'useState' do React
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 1. Importe os componentes de Rota (páginas)
import Home from '../routes/Home'; // 👈 Você estava usando 'Servicos' na rota, importe-o.
import Servicos from '../src/servicos'; // 👈 Adicionei esta importação
import Contact from '../routes/Contact';
import Produtos from '../routes/Produtos';

// 2. O import './Components/Shearch.jsx' não é necessário aqui.
//    Se precisar usar o componente 'Shearch' em alguma página, importe-o
//    diretamente nessa página (Ex: em 'Produtos.jsx').

function Rotas() {
  // A variável de estado 'selectedProcedure' não está sendo usada neste componente.
  // Mantenha-a apenas se planeja usá-la para passar para os componentes de rota.
  // Se for usá-la:
  const [selectedProcedure, setSelectedProcedure] = useState(null);

  // Se 'Servicos' for a sua página inicial, ela deve ser importada.
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Servicos />} /> {/* Rota Principal */}
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/contact" element={<Contact />} />
        {/* Adicionar a Home (se for diferente de Servicos) */}
        {/* <Route path="/home" element={<Home />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;