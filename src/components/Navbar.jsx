import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../components/ui/navigation-menu";
import { Button } from "../components/ui/button";
import { AlignRight, ShoppingCart } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-lg">
      <div className="container mt-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          className="text-white text-3xl font-extrabold tracking-wide hover:text-teal-400 transition-colors duration-300"
          to="/"
        >
          Sense<span className="text-teal-400">Market</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex space-x-8 items-center">
          <NavigationMenuList className="flex space-x-6 text-lg">
            <NavigationMenuItem>
              <Link
                to="/"
                className="hover:text-teal-400 transition-colors duration-300"
              >
                Home
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                to="/products"
                className="hover:text-teal-400 transition-colors duration-300"
              >
                Products
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                to="/about"
                className="hover:text-teal-400 transition-colors duration-300"
              >
                About Us
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                to="/cart"
                className="hover:text-teal-400 transition-colors duration-300"
              >
                <ShoppingCart />
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu Button */}
        <Button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className="material-icons">
            <AlignRight />
          </span>
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 bg-gray-800 rounded-lg py-4">
          <Link
            to="/"
            onClick={toggleMobileMenu}
            className="block text-center py-2 text-lg hover:text-teal-400 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/products"
            onClick={toggleMobileMenu}
            className="block text-center py-2 text-lg hover:text-teal-400 transition-colors duration-300"
          >
            Products
          </Link>
          <Link
            to="/about"
            onClick={toggleMobileMenu}
            className="block text-center py-2 text-lg hover:text-teal-400 transition-colors duration-300"
          >
            About Us
          </Link>
          <Link
            to="/cart"
            onClick={toggleMobileMenu}
            className="text-center py-2 text-lg hover:text-teal-400 transition-colors duration-300 flex items-center justify-center"
          >
            <ShoppingCart />
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
