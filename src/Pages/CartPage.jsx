import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cartItems, subtotal } = useCart();
  console.log(cartItems)
  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      <ul className="divide-y divide-gray-200">
        {cartItems.map(item => (
          <li key={item.id} className="py-3 flex justify-between items-center">
            <span>{item.title} (x{item.quantity})</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 text-xl font-semibold">Total: ${subtotal.toFixed(2)}</div>
    </div>
  );
};
export default CartPage