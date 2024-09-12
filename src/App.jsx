import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "./store/cartSlice";
import Navbar from "./components/Navbar";
import { recognition } from "./utils/voiceRecognition";
import { speak } from "./utils/textToSpeech";
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";
import Cart from "./components/Cart";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [stopReco, setStopReco] = useState(false);

  // Access products and page content from Redux
  const products = useSelector((state) => state.products.products);
  const pageContent = useSelector((state) => state.pageContent.content);
  const cart = useSelector((state) => state.cart.cart);

  // Speak page content when the route changes
  useEffect(() => {
    const content =
      pageContent[location.pathname] || "This page does not exist.";
    if (content) {
      speak(content);
    }
  }, [location.pathname, pageContent]);

  // Handle voice commands
  useEffect(() => {
    const handleResult = (event) => {
      const command = event.results[0][0].transcript.toLowerCase();
      console.log("Command received: ", command);

      if (command.includes("go to") || command.includes("navigate to")) {
        if (command.includes("home")) navigate("/");
        else if (command.includes("products")) navigate("/products");
        else if (command.includes("about")) navigate("/about");
        else if (command.includes("cart")) navigate("/cart");
      } else if (command.includes("read products")) {
        const productDetails = products
          .map((product) => `Product ${product.id}: ${product.description}`)
          .join(". ");
        speak(productDetails);
      } else if (command.includes("add product")) {
        const productId = extractProductId(command);
        const product = products.find((p) => p.id === productId);
        if (product) {
          dispatch(addToCart(product));
          speak(`Added ${product.name} to the cart.`);
        }
      } else if (command.includes("remove product")) {
        const productId = extractProductId(command);
        const product = cart.find((p) => p.id === productId);
        if (product) {
          dispatch(removeFromCart(productId));
          speak(`Removed ${product.name} from the cart.`);
        }
      }
    };

    const handleEnd = () => {
      if (!stopReco) recognition.start();
    };

    // Set up recognition event listeners
    recognition.onresult = handleResult;
    recognition.onend = handleEnd;

    return () => {
      // Cleanup: Remove event listeners when the component unmounts
      recognition.onresult = null;
      recognition.onend = null;
    };
  }, [navigate, products, cart, dispatch, stopReco]);

  const extractProductId = (command) => {
    const words = command.split(" ");
    const idIndex = words.findIndex((word) => word === "product");
    if (idIndex !== -1 && words[idIndex + 1]) {
      return parseInt(words[idIndex + 1]);
    }
    return null;
  };

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/cart"
          element={
            <h1 className="text-center py-5">
              <Cart />
            </h1>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
