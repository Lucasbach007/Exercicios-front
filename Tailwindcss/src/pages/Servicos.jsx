import { useEffect, useState } from "react";

function Servicos() {
  const [servicos, setServicos] = useState([]);

  useEffect(() => {
    async function carregarServicos() {
      const response = await fetch("http://localhost:8000/api/servicos");
      const data = await response.json();
      setServicos(data);
    }

    carregarServicos();
  }, []);

  return (
    <div>
      <h1>Serviços</h1>

      <ul>
        {servicos.map(servico => (
          <li key={servico.id}>{servico.nome}</li>
        ))}
      </ul>
    </div>
  );
}

export default Servicos;
