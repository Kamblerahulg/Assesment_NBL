import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cartItems, subtotal } = useCart();
  console.log(cartItems);
  
  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Shopping Cart</h2>
      <ul className="divide-y divide-gray-300">
        {cartItems.length === 0 ? (
          <li className="py-6 text-center text-gray-500">Your cart is empty.</li>
        ) : (
          cartItems.map(item => (
            <li key={item.id} className="py-4 flex justify-between items-center hover:bg-gray-100 transition duration-200">
              <span className="text-lg text-gray-700">{item.title} (x{item.quantity})</span>
              <span className="text-lg font-semibold text-gray-900">${(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))
        )}
      </ul>
      <div className="mt-6 text-2xl font-bold text-gray-800">Total: ${subtotal.toFixed(2)}</div>
      <button className="mt-4 w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-200">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartPage;
