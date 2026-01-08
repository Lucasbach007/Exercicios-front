import { useState, useMemo } from "react";
import { proceduresMock } from "./mocks/procedures";
import { ProcedureCard } from "./Components/ProcedureCard/ProcedureCard";
import { ScheduleModal } from "./Components/ScheduleModal/ScheduleModal";
import Shearchbar from "./Components/Shearchbar.jsx"; 
import "./servicos.css";
//import Navbar from "./Components/Navbar.jsx";
//import "./servicos.css"; // Agora vamos usar CSS puro

function Servicos() {
  const [selectedProcedure, setSelectedProcedure] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProcedures = useMemo(() => {
    const lowercasedSearchTerm = searchTerm.toLowerCase();
    return proceduresMock.filter((proc) =>
      proc.nome.toLowerCase().includes(lowercasedSearchTerm)
    );
  }, [searchTerm]);

  return (
    <div className="servicos-container">

      <h1 className="servicos-title">
        💅 Agendamento de Procedimentos
      </h1>

      <p className="servicos-subtitle">
        Escolha um serviço para agendar seu horário
      </p>

      <div className="servicos-search-wrapper">
        <Shearchbar 
          searchTerm={searchTerm} 
          onSearchChange={handleSearchChange}
        />
      </div>

      <div className="servicos-grid">
        {filteredProcedures.map((proc) => (
          <ProcedureCard 
            key={proc.id} 
            procedure={proc} 
            onAgendar={setSelectedProcedure} 
          />
        ))}

        {filteredProcedures.length === 0 && (
          <p className="servicos-empty-result">
            Nenhum procedimento encontrado para: "{searchTerm}"
          </p>
        )}
      </div>

      <ScheduleModal 
        procedure={selectedProcedure} 
        onClose={() => setSelectedProcedure(null)} 
      />
    </div>
  );
}

export default Servicos;
