import "./ScheduleModal.css";

export const ScheduleModal = ({ procedure, onClose }) => {
  if (!procedure) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Comprar: {procedure.nome}</h2>
        <p>Marca: {procedure.marca}</p>
        <p>Preço: R$ {procedure.preco.toFixed(2)}</p>

        <form onSubmit={(e) => { e.preventDefault(); alert("COMPRA EFETUADA!"); onClose(); }}>
          <label>Nome:</label>
          <input type="text" placeholder="Seu nome" required />
          <label>Data e Hora:</label>
          <input type="datetime-local" required />
          <button type="submit">Confirmar Agendamento</button>
        </form>

        <button className="close" onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};
