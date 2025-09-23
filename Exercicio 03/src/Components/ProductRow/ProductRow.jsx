import './ProductRow.css';

export default function ProductRow({ product }) {
  return (
    <tr className="product-row">
      <td>{product.name}</td>
      <td>R$ {product.price}</td>
    </tr>
  );
}
