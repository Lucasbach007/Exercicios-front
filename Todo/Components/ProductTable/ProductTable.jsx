import './ProductTable.css';
import ProductRow from '../ProductRow/ProductRow';

export default function ProductTable({ products }) {
  return (
    <table className="product-table">
      <thead>
        <tr>
          <th>Produto</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        {products.map((p) => (
          <ProductRow key={p.id} product={p} />
        ))}
      </tbody>
    </table>
  );
}
