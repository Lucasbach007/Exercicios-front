import React from 'react'; // Importação explícita do React
import './App.css';
import CardImc from './components/CardImcEfects'; // Corrigi o caminho relativo
import ProductTable from './components/ProductTable/ProductTable'; // Corrigi o caminho relativo
import { productsMock } from './mocks/products'; // Certifique-se de que o caminho está correto

function App() {
  return (
    <div className="app-container">
      <h1>Exemplo com CardImc e Tabela de Produtos</h1>

      <section>
        <h2>Pessoas (IMC)</h2>
        {/* Adicionei a key para cada CardImc renderizado */}
        <CardImc key="1" pessoa={{ name: 'Fulano', altura: 1.7, peso: 90 }} />
        <CardImc key="2" pessoa={{ name: 'Beltrano', altura: 1.8, peso: 75 }} />
        <CardImc key="3" pessoa={{ name: 'Cicrano', altura: 1.9, peso: 90 }} />
      </section>

      <section>
        <h2>Produtos</h2>
        <ProductTable products={productsMock} />
      </section>
    </div>
  );
}

export default App;
