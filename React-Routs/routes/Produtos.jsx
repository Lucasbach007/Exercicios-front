import React, { useState } from "react";
import { proceduresMock } from "../src/mocks/MockProds";
import { ProdCard } from "../src/Components/ProdsComps/ProdCard";
import { ScheduleModal } from "../src/Components/ProdsComps/ProdsModal";
import "../src/Components/ProdsComps/Prod.css";
import { Link } from 'react-router-dom';
import Navbar from "../src/Components/Navbar.jsx";
import Home from "./Home.jsx";
import './produtos.css';
import login from "./Login.jsx";
function Produtos() {
  const [selectedProcedure, setSelectedProcedure] = useState(null);

return (
   
  <> 
   <div className="navebar">
      <h1>home</h1>
      <Link to="/">Servicos</Link>
      <Link to ="/Home">Home</Link>
      <Link to ="/Login">Login</Link>
    </div>
    
    
    <div className="app-container">
      <h1>Escolha o seu produto com os melhores preços</h1>
      

      <div className="cards-grid">
        {proceduresMock.map((proc) => (
          <ProdCard key={proc.id} procedure={proc} onComprar={setSelectedProcedure} />
        ))}
      </div>

      <ScheduleModal procedure={selectedProcedure} onClose={() => setSelectedProcedure(null)} />
    </div>

    
    <div>
      <h1>home</h1>
      <Link to="/">Servicos</Link>
    </div>
  </>
);

}

export default Produtos;