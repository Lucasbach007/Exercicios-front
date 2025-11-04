import "./ProcedureCard.css";

export const ProcedureCard = ({ procedure, onAgendar }) => {
  return (
    <div className="procedure-card">
      <img src={procedure.image} alt={procedure.nome} />
      <div className="procedure-info">
        <h3>{procedure.nome}</h3>
        <p>{procedure.descricao}</p>
        <p><strong>Duração:</strong> {procedure.duracao}</p>
        <p className="price">R$ {procedure.preco.toFixed(2)}</p>
        <button onClick={() => onAgendar(procedure)}>Agendar</button>
      </div>
    </div>
  );
};
