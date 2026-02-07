"use client";

import React, { useState } from 'react';
import { Menu, X, Github } from 'lucide-react'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-white font-bold text-xl">SemihBerkanOkutan<span className="text-blue-500">.DEV</span></a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
          
          {/* Vertical Divider */}
          <div className="w-[px] h-4 bg-white/20"></div>

          {/* Github Icon for Desktop */}
          <a 
            href="https://github.com/semihberkanokutan" 
            target="_blank" 
            rel="noreferrer" 
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github size={20} />
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black border-b border-white/10 flex flex-col p-6 gap-6 animate-in slide-in-from-top">
          <a href="#projects" onClick={() => setIsOpen(false)} className="text-white text-lg font-medium">Projects</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="text-white text-lg font-medium">About</a>
          
          {/* Github Link for Mobile */}
          <a 
            href="https://github.com/semihberkanokutan" 
            className="flex items-center gap-2 text-blue-400 font-medium"
            onClick={() => setIsOpen(false)}
          >
            <Github size={20} />
            <span>GitHub Profile</span>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;