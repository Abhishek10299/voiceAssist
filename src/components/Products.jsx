// src/components/Products.js
import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";

function Products() {
  // Access products from the Redux store
  const products = useSelector((state) => state.products.products);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        Our Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
