import { useEffect, useState } from "react";
import { FoodItem } from "../utils/data";
import generateOrderId from "../utils/generateOrderId";

export default function Checkout() {
  const [cart, setCart] = useState<{ item: FoodItem; quantity: number }[]>([]);
  const [orderId, setOrderId] = useState("");
  const [showPayment, setShowPayment] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("cart");
    if (data) setCart(JSON.parse(data));
  }, []);

  const total = cart.reduce((sum, c) => sum + c.item.price * c.quantity, 0);

  const handlePayment = () => {
    if (!paymentMethod) return alert("Please select a payment method!");
    setTimeout(() => {
      setOrderId(generateOrderId());
      setShowPayment(false);
      localStorage.removeItem("cart");
    }, 1000);
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      {cart.map((c, i) => (
        <div key={i} className="flex justify-between border-b py-2">
          <div>{c.item.name} x {c.quantity}</div>
          <div>₹{c.item.price * c.quantity}</div>
        </div>
      ))}
      <div className="text-right font-bold mt-4">Total: ₹{total}</div>

      {!showPayment && !orderId && (
        <button
          onClick={() => setShowPayment(true)}
          className="bg-green-600 text-white px-4 py-2 mt-4 rounded"
        >
          Pay
        </button>
      )}

      {showPayment && (
        <div className="border p-4 mt-4 rounded bg-gray-50">
          <h2 className="font-semibold mb-2">Choose Payment Method</h2>
          <div className="space-y-2">
            {["UPI", "Credit/Debit Card", "Net Banking", "QR Code"].map((method) => (
              <div key={method} className="flex items-center">
                <input
                  type="radio"
                  id={method}
                  name="payment"
                  value={method}
                  checked={paymentMethod === method}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="mr-2"
                />
                <label htmlFor={method}>{method}</label>
              </div>
            ))}
          </div>
          <button
            onClick={handlePayment}
            className="bg-blue-600 text-white px-4 py-2 mt-4 rounded"
          >
            Confirm & Pay
          </button>
        </div>
      )}

      {orderId && (
        <div className="mt-4 text-lg text-center text-green-700">
          🎉 Order Placed! Your ID is <strong>{orderId}</strong>
        </div>
      )}
    </div>
  );
}
