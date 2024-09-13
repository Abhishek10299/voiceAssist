import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../store/cartSlice"; // Add clearCart action
import { formatPrice } from "../utils/formatPrice";
import { recognition } from "../utils/voiceRecognition";
import { speak } from "../utils/textToSpeech";

function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const [isCheckout, setIsCheckout] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    paymentMethod: "",
  });

  const totalPrice = cart.reduce((total, product) => {
    const price = parseFloat(product.price.replace("$", "")); // Convert price to number
    return total + price;
  }, 0);

  // Handle voice commands for checkout and form filling
  useEffect(() => {
    const handleResult = (event) => {
      const command = event.results[0][0].transcript.toLowerCase();
      console.log("Command received: ", command);

      if (command.includes("checkout") || command.includes("check out")) {
        dispatch(clearCart()); // Clear the cart
        setIsCheckout(true);
        speak("Proceeding to checkout. Please fill in your details.");
      } else if (isCheckout) {
        if (command.includes("enter name")) {
          const name = command.split("enter name ")[1];
          setFormData((prev) => ({ ...prev, name }));
          speak(`Name filled as ${name}`);
        } else if (command.includes("enter address")) {
          const address = command.split("enter address ")[1];
          setFormData((prev) => ({ ...prev, address }));
          speak(`Address filled as ${address}`);
        } else if (command.includes("enter payment")) {
          const paymentMethod = command.split("enter payment ")[1];
          setFormData((prev) => ({ ...prev, paymentMethod }));
          speak(`Payment method set to ${paymentMethod}`);
        } else if (
          command.includes("confirm checkout") ||
          command.includes("confirm check out")
        ) {
          setIsConfirmed(true);
          speak("Checkout confirmed. Thank you for your purchase!");
        }
      }
    };

    recognition.onresult = handleResult;

    return () => {
      recognition.onresult = null; // Clean up
    };
  }, [isCheckout, dispatch]);

  if (isCheckout) {
    return (
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
          Checkout
        </h1>

        {/* Render the form only if checkout is not confirmed */}
        {!isConfirmed ? (
          <form className="max-w-lg mx-auto">
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-lg"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                disabled
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Address
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-lg"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
                disabled
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Payment Method
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-lg"
                value={formData.paymentMethod}
                onChange={(e) =>
                  setFormData({ ...formData, paymentMethod: e.target.value })
                }
                disabled
              />
            </div>

            {/* Confirm Checkout Button */}
            <button
              type="button" // Prevent form submission
              onClick={() => setIsConfirmed(true)}
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium mt-4 block mx-auto hover:bg-green-500 transition-colors duration-300"
            >
              Confirm Checkout
            </button>
          </form>
        ) : (
          // Show confirmation message after checkout is confirmed
          <p className="text-center text-green-600 mt-4">
            Checkout confirmed. Thank you for your purchase!
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
        Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cart.map((product) => (
              <div
                key={product.id}
                className="border p-6 rounded-lg bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover mb-4 rounded-lg"
                />
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h2>
                <p className="text-gray-500 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <p className="text-green-600 font-semibold">
                    {product.price}
                  </p>
                  <button
                    onClick={() => dispatch(removeFromCart(product.id))}
                    className="text-red-600 hover:text-red-800 font-medium transition-colors duration-300"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 border-t-2">
            <h2 className="text-2xl font-bold text-gray-900 text-right">
              Total: {formatPrice(totalPrice)}
            </h2>
            <button
              type="button"
              onClick={() => setIsCheckout(true)}
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium mt-4 block mx-auto hover:bg-indigo-500 transition-colors duration-300"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
