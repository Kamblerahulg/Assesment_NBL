import { useCart } from "../context/CartContext";
import { useState } from "react";

const ProductTable = ({ products }) => {
  const { cartItems, addToCart } = useCart();
  const [popupMessage, setPopupMessage] = useState(null);

  const handleAddToCart = (product) => {
    addToCart(product);
    setPopupMessage(`${product.title} has been added to the cart`);

    setTimeout(() => {
      setPopupMessage(null);
    }, 3000); 
  };

  return (
    <div className="product-table-wrapper" style={{ position: 'relative' }}>
      {popupMessage && (
        <div className="popup-message">
          ✅ {popupMessage}
        </div>
      )}

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
                  onClick={() => handleAddToCart(p)}
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

export default ProductTable;
