import React from "react";

function Product({ id, name, description, image, price }) {
  return (
    <div className="border p-4 rounded-lg bg-white shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover mb-4 rounded-lg"
      />
      <h2 className="text-xl font-extrabold text-gray-900 mb-2 hover:text-indigo-600 transition-colors duration-300">
        {name}
      </h2>
      <p className="text-gray-500 mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <p className="text-green-600 font-semibold text-lg">{price}</p>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-500 transition-colors duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Product;
