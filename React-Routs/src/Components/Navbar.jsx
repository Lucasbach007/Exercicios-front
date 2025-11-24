import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* A Navbar fica FORA do Routes, para ser visível em todas as páginas */}
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Opcional: Rota para 404/Página Não Encontrada */}
          <Route path="*" element={<h1>404 - Página Não Encontrada</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;