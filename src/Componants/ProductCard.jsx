const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} className="product-image" />
      <h3 className="product-title">{product.title}</h3>
      <p className="product-price">Price: ${product.price}</p>
      <p className="product-stock">In stock: {product.stock}</p>
      <button
        onClick={() => onAddToCart(product)}
        className="add-to-cart-btn"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
