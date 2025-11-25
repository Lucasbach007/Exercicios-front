import "./ProcedureCard.css";

export const ProdCard = ({ procedure, onComprar }) => {
  return (
    <div className="procedure-card">
      <img src={procedure.image} alt={procedure.nome} />
      <div className="procedure-info">
        <h3>{procedure.nome}</h3>
        <p>{procedure.descricao}</p>
        <p><strong>Marca:</strong> {procedure.marca}</p>
        <p className="price">R$ {procedure.preco.toFixed(2)}</p>
        <button onClick={() => onComprar(procedure)}>Comprar</button>
      </div>
    </div>
  );
};
