// src/components/About.js
import React from "react";

function About() {
  return (
    <section className="py-16 bg-gradient-to-r from-teal-100 to-blue-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            About Us
          </h1>
          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            We are dedicated to delivering top-notch products and exceptional
            customer service. Our mission is to create innovative solutions that
            truly make a difference.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="lg:w-1/2 relative group">
            <img
              src="https://via.placeholder.com/600x400"
              alt="About Us"
              className="w-full h-64 object-cover object-center rounded-lg shadow-xl transition-transform transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our mission is to revolutionize the industry with cutting-edge
              products that are both functional and stylish. We aim to surpass
              customer expectations with each product we deliver.
            </p>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Our Values
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-4">
              <li className="transition-transform transform hover:scale-105">
                Innovation: Embracing creativity to develop forward-thinking
                solutions.
              </li>
              <li className="transition-transform transform hover:scale-105">
                Quality: Ensuring every product meets the highest standards.
              </li>
              <li className="transition-transform transform hover:scale-105">
                Customer Focus: Prioritizing our customers' needs and
                satisfaction.
              </li>
              <li className="transition-transform transform hover:scale-105">
                Integrity: Conducting our business with honesty and
                transparency.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
