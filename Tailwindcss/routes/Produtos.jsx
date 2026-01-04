import React, { useState, useMemo } from "react";
import { proceduresMock } from "../src/mocks/MockProds";
import { ProdCard } from "../src/Components/ProdsComps/ProdCard";
import { ScheduleModal } from "../src/Components/ProdsComps/ProdsModal";
import Shearchbarprodutos from "../src/Components/Sherachbarprodutos.jsx";
import { Link } from "react-router-dom";
import "./produtos.css";

function Produtos() {
  const [selectedProcedure, setSelectedProcedure] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // 🔍 FILTRO DE PRODUTOS
  const filteredProducts = useMemo(() => {
    return proceduresMock.filter((proc) => {
      const termo = searchTerm.toLowerCase();

      return (
        proc.nome.toLowerCase().includes(termo) ||
        proc.descricao.toLowerCase().includes(termo) ||
        proc.marca.toLowerCase().includes(termo)
      );
    });
  }, [searchTerm]);

  return (
    <>
    

      <div className="app-container">
        <h1>Escolha o seu produto com os melhores preços</h1>

        {/* SEARCH BAR */}
        <Shearchbarprodutos
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* CARDS */}
        <div className="cards-grid">
          {filteredProducts.map((proc) => (
            <ProdCard
              key={proc.id}
              procedure={proc}
              onComprar={setSelectedProcedure}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="text-gray-500 mt-4">
            Nenhum produto encontrado 😕
          </p>
        )}

        <ScheduleModal
          procedure={selectedProcedure}
          onClose={() => setSelectedProcedure(null)}
        />
      </div>
    </>
  );
}

export default Produtos;
