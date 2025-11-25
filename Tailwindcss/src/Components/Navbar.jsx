import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Servicos from '../servicos';
//import Produtos from '../routes/Produtos';

const Navbar = () => {
  return (
    <BrowserRouter>
      <div className="content">
        <Routes>
          <Route path="/" element={<servicos />} />
          
          <Route path="*" element={<h1>404 - Página Não Encontrada</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Navbar;
//<Route path="/Produtos" element={<Produtos />} />