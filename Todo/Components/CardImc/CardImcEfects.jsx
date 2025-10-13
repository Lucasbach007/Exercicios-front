import React, { useState, useEffect } from 'react';
import './CardImc.css';

export default function CardImc({ pessoa }) {
  const { name, altura, peso } = pessoa;
  
  // Estado para o IMC e a classificação
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  // Calcula IMC e a classificação sempre que altura ou peso mudarem
  useEffect(() => {
    if (peso && altura) {
      const novoImc = (peso / (altura * altura)).toFixed(2);
      setImc(novoImc);

      const novaClassificacao = classifica(novoImc);
      setClassificacao(novaClassificacao);
    }
  }, [peso, altura]); // Dependência dos valores de peso e altura

  // Função para classificar o IMC
  const classifica = (imcValor) => {
    if (imcValor < 18.5) return "Abaixo do peso";
    if (imcValor < 24.9) return "Peso normal";
    if (imcValor < 29.9) return "Sobrepeso";
    if (imcValor < 34.9) return "Obesidade grau I";
    if (imcValor < 39.9) return "Obesidade grau II";
    return "Obesidade grau III";
  };

  return (
    <div className="card-imc">
      <h3>{name}</h3>
      <p>Altura: {altura} m</p>
      <p>Peso: {peso} kg</p>
      <p>IMC: {imc}</p>
      <p className="classificacao">{classificacao}</p>
    </div>
  );
}
