
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Shield, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="container-custom mx-auto">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-cyber rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-cyber-gold" />
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tight flex flex-col leading-none">
                <span className="text-cyber">ACADÉMIE</span>
                <span className="text-sm text-cyber-light">CYBER & RÉSEAUX</span>
              </h1>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium text-cyber hover:text-cyber-light transition-colors">
              Accueil
            </Link>
            <Link to="/formations" className="font-medium text-cyber hover:text-cyber-light transition-colors">
              Formations
            </Link>
            <Link to="/evenements" className="font-medium text-cyber hover:text-cyber-light transition-colors">
              Événements
            </Link>
            <Link to="/blog" className="font-medium text-cyber hover:text-cyber-light transition-colors">
              Blog
            </Link>
            <Link to="/a-propos" className="font-medium text-cyber hover:text-cyber-light transition-colors">
              À propos
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="cyber-button-gold">
              <span>Contact</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? (
                <X className="h-6 w-6 text-cyber" />
              ) : (
                <Menu className="h-6 w-6 text-cyber" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4">
          <div className="container-custom mx-auto flex flex-col space-y-4">
            <Link 
              to="/" 
              className="font-medium text-cyber hover:text-cyber-light px-4 py-2 rounded-md hover:bg-gray-50 transition-colors"
              onClick={toggleMenu}
            >
              Accueil
            </Link>
            <Link 
              to="/formations" 
              className="font-medium text-cyber hover:text-cyber-light px-4 py-2 rounded-md hover:bg-gray-50 transition-colors"
              onClick={toggleMenu}
            >
              Formations
            </Link>
            <Link 
              to="/evenements" 
              className="font-medium text-cyber hover:text-cyber-light px-4 py-2 rounded-md hover:bg-gray-50 transition-colors"
              onClick={toggleMenu}
            >
              Événements
            </Link>
            <Link 
              to="/blog" 
              className="font-medium text-cyber hover:text-cyber-light px-4 py-2 rounded-md hover:bg-gray-50 transition-colors"
              onClick={toggleMenu}
            >
              Blog
            </Link>
            <Link 
              to="/a-propos" 
              className="font-medium text-cyber hover:text-cyber-light px-4 py-2 rounded-md hover:bg-gray-50 transition-colors"
              onClick={toggleMenu}
            >
              À propos
            </Link>
            <Button className="cyber-button-gold w-full">
              <span>Contact</span>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
