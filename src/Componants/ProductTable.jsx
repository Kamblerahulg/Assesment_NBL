import { useCart } from "../context/CartContext";

const ProductTable = ({ products }) => {
  const { cartItems, addToCart } = useCart();
  return (
    <div className="product-table-wrapper">
      <table className="product-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Image</th>
            <th>Stock</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((p, index) => (
            <tr key={p.id}>
              <td>{index + 1}</td>
              <td>{p.title}</td>
              <td>
                <img src={p.thumbnail} alt={p.title} />
              </td>
              <td>{p.stock}</td>
              <td>
                <button
                  onClick={() => addToCart(p)}
                  className="add-to-cart-btn"
                >
                  Add to Cart
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable