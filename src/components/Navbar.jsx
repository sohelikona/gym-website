import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; 
import gymLogo from "../assets/gym.png"; 
import Button from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "Services", "Pricing", "Contact"];

  return (
    <nav className="fixed top-1 sm:top-0 left-0 w-full z-50 text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 sm:mt-2 ">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2 ">
          <img src={gymLogo} alt="Logo" className="h-13 sm:h-15 md:h-17 lg:h-20" />
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link}>
              <a href="#" className="text-base sm:text-base md:text-lg hover:text-gray-300 transition">{link}</a>
            </li>
          ))}
 <button
      type="button"
      className="py-2.5 px-6 me-2 mb-2 text-xs sm:text-sm md:text-sm font-semibold text-black bg-[#96fb57] rounded-full shadow-md hover:bg-[#85e84d] transition-all duration-200 focus:outline-none focus:ring-[#96fb57]/50"
    >
      Start 7 day free trial
    </button>
        </ul>


        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={25} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="flex flex-col md:hidden px-6 pt-2 pb-4 bg-neutral-950 text-white "
          >
            {navLinks.map((link) => (
              <li key={link} className="py-2 border-b border-white/20 ">
                <a href="#" className="block">{link}</a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
