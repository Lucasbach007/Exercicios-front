import './CardImc.css';

export default function CardImc({ pessoa }) {
  const { name, altura, peso } = pessoa;
  const imc = (peso / (altura * altura)).toFixed(2);

  const classifica = () => {
    if (imc < 18.5) return "Abaixo do peso";
    if (imc < 24.9) return "Peso normal";
    if (imc < 29.9) return "Sobrepeso";
    if (imc < 34.9) return "Obesidade grau I";
    if (imc < 39.9) return "Obesidade grau II";
    return "Obesidade grau III";
  };

  return (
    <div className="card-imc">
      <h3>{name}</h3>
      <p>Altura: {altura} m</p>
      <p>Peso: {peso} kg</p>
      <p>IMC: {imc}</p>
      <p className="classificacao">{classifica()}</p>
    </div>
  );
}
