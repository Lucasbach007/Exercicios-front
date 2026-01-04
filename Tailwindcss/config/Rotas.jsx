import { Routes, Route } from "react-router-dom";
import Servicos from "../src/servicos";
import Produtos from "../routes/Produtos";
import Contact from "../routes/Contact";
import Cadastro from "../routes/Cadastro";
import Login from "../routes/login";
// import Home from "../routes/Home"; // opcional

function Rotas() {
  return (
    <Routes>
      {/* HOME */}
      <Route path="/" element={<Servicos />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default Rotas;
