import { useCart } from "../context/CartContext";
import { useState } from "react";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products }) => {
  const { addToCart } = useCart();
  const [popupMessage, setPopupMessage] = useState(null);

  const handleAddToCart = (product) => {
    addToCart(product);
    setPopupMessage(`${product.title} has been added to the cart`);

    setTimeout(() => {
      setPopupMessage(null);
    }, 2000);
  };

  return (
    <div className="product-grid-wrapper" style={{ position: 'relative' }}>
      {popupMessage && (
        <div className="popup-message">
          ✅ {popupMessage}
        </div>
      )}

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
