import './App.css';
import CardImc from '/components/CardImc/CardImc';
import ProductTable from '/components/ProductTable/ProductTable';
import { productsMock } from './mocks/products';

function App() {
  return (
    <div className="app-container">
      <h1>Exemplo com CardImc e Tabela de Produtos</h1>

      <section>
        <h2>Pessoas (IMC)</h2>
        <CardImc pessoa={{ name: 'Fulano', altura: 1.7, peso: 90 }} />
        <CardImc pessoa={{ name: 'Beltrano', altura: 1.8, peso: 75 }} />
        <CardImc pessoa={{ name: 'Cicrano', altura: 1.9, peso: 90 }} />
      </section>

      <section>
        <h2>Produtos</h2>
        <ProductTable products={productsMock} />
      </section>
    </div>
  );
}

export default App;
