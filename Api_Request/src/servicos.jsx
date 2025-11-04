
import { useState } from "react";
import { proceduresMock } from "./mocks/procedures";
import { ProcedureCard } from "./Components/ProcedureCard/ProcedureCard";
import { ScheduleModal } from "./Components/ScheduleModal/ScheduleModal";
import "./servicos.css";

function Servicos() {
  const [selectedProcedure, setSelectedProcedure] = useState(null);

  return (
    <div className="app-container">
      <h1>💅 Agendamento de Procedimentos</h1>
      <p>Escolha um serviço para agendar seu horário</p>

      <div className="cards-grid">
        {proceduresMock.map((proc) => (
          <ProcedureCard key={proc.id} procedure={proc} onAgendar={setSelectedProcedure} />
        ))}
      </div>

      <ScheduleModal procedure={selectedProcedure} onClose={() => setSelectedProcedure(null)} />
    </div>
  );
}

export default Servicos;

