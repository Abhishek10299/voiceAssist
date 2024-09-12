// src/redux/productsSlice.js
import { createSlice } from "@reduxjs/toolkit";
import img1 from '../assets/img1.jpeg'
import img2 from '../assets/img2.jpeg'
import img3 from '../assets/img3.jpeg'

const initialState = {
  products: [
    {
      id: 1,
      name: "Apple AirPods Pro",
      description:
        "High-quality wireless earbuds with active noise cancellation.",
      image: img1,
      price: "$249.99",
    },
    {
      id: 2,
      name: "Samsung Galaxy S21",
      description:
        "Latest flagship smartphone from Samsung with a stunning display and excellent performance.",
      image: img2,
      price: "$799.99",
    },
    {
      id: 3,
      name: "Sony WH-1000XM4 Headphones",
      description:
        "Premium noise-canceling over-ear headphones with long battery life.",
      image: img3,
      price: "$349.99",
    },
    // Add more products as needed
  ],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // Reducers can be added here for actions like adding/updating products
  },
});

export default productsSlice.reducer;
