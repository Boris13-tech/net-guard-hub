import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoLegrandsup from "@/assets/logo-legrandsup.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Accueil" },
    { to: "/formations", label: "Formations" },
    { to: "/evenements", label: "Événements" },
    { to: "/blog", label: "Blog" },
    { to: "/a-propos", label: "À propos" }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-cyber-dark/95 backdrop-blur-md border-b border-white/10" : "bg-transparent"
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={logoLegrandsup} 
              alt="LegrandSup Logo" 
              className="w-12 h-12 rounded-full shadow-lg group-hover:shadow-amber-500/25 transition-shadow"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-white leading-none">Académie Cyber & Réseaux</h1>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-medium transition-colors ${
                  location.pathname === link.to
                    ? "text-cyber-gold"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/contact">
              <Button className="cyber-button-gold">Candidater</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-cyber-dark/98 backdrop-blur-md border-t border-white/10">
          <div className="container-custom py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className={`py-3 px-4 rounded-lg font-medium transition-colors ${
                  location.pathname === link.to
                    ? "bg-cyber-gold/20 text-cyber-gold"
                    : "text-white/70 hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
              <Button className="cyber-button-gold w-full mt-4">Candidater</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
