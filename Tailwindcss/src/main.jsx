import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Home from '../routes/Home'
import Contact from '../routes/Contact'
import Servicos from './servicos.jsx'
import Produtos from '../routes/Produtos.jsx'
import login from '../routes/Login.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Servicos/>} />
        <Route path="/contact" element={<Contact />} />
  <Route path="/procedures" element={<App />} />
  <Route path="/produtos" element={<Produtos />} />
  <Route path="/login" element={<login />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
