import React from 'react';
import './ProcedureCard.css';
// Supondo que a estrutura da procedure seja: {id, nome, descricao, imagemUrl}
export const ProcedureCard = ({ procedure, onAgendar }) => {
  return (
    <div className="procedure-card">
      
      {/* Imagem */}
      <img 
        src={procedure.imagemUrl} 
        alt={procedure.nome} 
        className="procedure-image"
      />
      
      {/* Conteúdo */}
      <div className="procedure-content">
        
        <h3 className="procedure-title">
          {procedure.nome}
        </h3>

        <p className="procedure-description">
          {procedure.descricao}
        </p>
        
        <button
          onClick={() => onAgendar(procedure)}
          className="procedure-button"
             style={{ "--procedure-color": procedure.cor }}
        >
        
          Agendar
        </button>
      </div>
    </div>
  );
};
