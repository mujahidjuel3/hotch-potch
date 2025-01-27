"use client";

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Logo from "../public/logo.svg";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="bg-gray-900">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex gap-8 items-center">
          <Image src={Logo} alt="Logo" width={78} height={32} />
        

        {/* Nav Links for Medium Screens */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-300 hover:text-white">
            Demos
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            About
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Blog
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Pages
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Contact
          </a>
        </nav>
        </div>

        {/* Buttons for Medium Screens */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-gray-300 hover:text-white border rounded-md px-4 py-2">
            Log in
          </button>
          <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-pink-600 rounded-md text-white">
            Get Started Free
          </button>
        </div>

        {/* Menu Icon for Small Screens */}
        <div className="md:hidden">
          <button onClick={toggleSidebar}>
            <FaBars className="text-white text-2xl" />
          </button>
        </div>
      </div>

      {/* Sidebar for Small Screens */}
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-gray-800 text-white shadow-lg z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        {/* Close Icon */}
        <div className="flex justify-start p-4">
          <button onClick={toggleSidebar}>
            <FaTimes className="text-2xl" />
          </button>
        </div>

        {/* Sidebar Links */}
        <nav className="flex flex-col space-y-6 px-6 mt-6">
          <a href="#" className="block text-lg hover:text-blue-400">
            Demos
          </a>
          <a href="#" className="block text-lg hover:text-blue-400">
            About
          </a>
          <a href="#" className="block text-lg hover:text-blue-400">
            Blog
          </a>
          <a href="#" className="block text-lg hover:text-blue-400">
            Pages
          </a>
          <a href="#" className="block text-lg hover:text-blue-400">
            Contact
          </a>

          {/* Sidebar Buttons */}
          <div className="mt-8">
            <button className="block w-full text-left text-gray-300 border rounded-md px-4 py-2 hover:text-white">
              Log in
            </button>
            <button className="block w-full mt-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-pink-600 rounded-md text-white">
              Get Started Free
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
