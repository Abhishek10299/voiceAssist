import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} My E-Commerce Website. All rights
          reserved.
        </p>
        <div className="mt-2">
          <a href="/privacy-policy" className="text-gray-400 hover:text-white">
            Privacy Policy
          </a>{" "}
          |
          <a
            href="/terms-of-service"
            className="text-gray-400 hover:text-white"
          >
            {" "}
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
