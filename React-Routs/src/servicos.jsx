import { useState, useMemo } from "react"; // Adicionando useMemo para performance
import { proceduresMock } from "./mocks/procedures";
import { ProcedureCard } from "./Components/ProcedureCard/ProcedureCard";
import { ScheduleModal } from "./Components/ScheduleModal/ScheduleModal";
// import "./servicos.css"; // 🛑 REMOVIDO: Não precisamos mais do CSS customizado

import Shearchbar from "./Components/Shearch.jsx"; 

function Servicos() {
  const [selectedProcedure, setSelectedProcedure] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  
  // Usando useMemo para otimizar o filtro
  const filteredProcedures = useMemo(() => {
      const lowercasedSearchTerm = searchTerm.toLowerCase();
      return proceduresMock.filter((proc) =>
          proc.nome.toLowerCase().includes(lowercasedSearchTerm)
      );
  }, [searchTerm]);

  return (
    // 💡 Substituindo 'app-container' por classes Tailwind:
    // max-w-7xl: Largura máxima
    // mx-auto: Centraliza horizontalmente (margin x-axis auto)
    // p-4: Padding em todos os lados (padding 1rem)
    // sm:p-6: Padding maior em telas pequenas
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8"> 
      {/* Estilizando o título: text-4xl (tamanho), font-bold (negrito), 
         text-center (centralizar texto), mb-4 (margin-bottom) */}
      <h1 className="text-4xl font-bold text-center mb-4">
        💅 Agendamento de Procedimentos
      </h1>
      
      {/* Estilizando o parágrafo: text-lg (tamanho), text-gray-600, text-center, mb-8 */}
      <p className="text-lg text-gray-600 text-center mb-8">
        Escolha um serviço para agendar seu horário
      </p>
      
      {/* Componente Searchbar (pode ser centralizado com mx-auto block) */}
      <div className="mb-8 max-w-md mx-auto">
        <Shearchbar 
          searchTerm={searchTerm} 
          onSearchChange={handleSearchChange}
        />
      </div>

      {/* 💡 Substituindo 'cards-grid' por classes Tailwind:
         grid: Habilita o grid layout
         grid-cols-1: 1 coluna por padrão
         md:grid-cols-2: 2 colunas em telas médias
         lg:grid-cols-4: 4 colunas em telas grandes
         gap-6: Espaçamento entre os itens (gap) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProcedures.map((proc) => (
          <ProcedureCard 
            key={proc.id} 
            procedure={proc} 
            onAgendar={setSelectedProcedure} 
          />
        ))}

        {filteredProcedures.length === 0 && (
          // Estilizando a mensagem de erro
          <p className="text-center text-xl text-red-500 mt-8 col-span-full">
            Nenhum procedimento encontrado para: **"{searchTerm}"**
          </p>
        )}
      </div>

      <ScheduleModal procedure={selectedProcedure} onClose={() => setSelectedProcedure(null)} />
    </div>
  );
}

export default Servicos;