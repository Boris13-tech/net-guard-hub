import React from "react";
import { Link } from "react-router-dom";
import { Shield, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cyber text-white pt-16 pb-8">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo + About */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-cyber-gold" />
              </div>
              <div>
                <h2 className="text-lg font-bold tracking-tight flex flex-col leading-none">
                  <span className="text-white">ACADÉMIE</span>
                  <span className="text-sm text-cyber-gold">CYBER & RÉSEAUX</span>
                </h2>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Formez-vous aux métiers de la cybersécurité avec des experts du domaine. Programmes adaptés à tous niveaux.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-cyber-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-cyber-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-cyber-gold transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-cyber-gold transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-cyber-gold transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-cyber-gold transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/formations" className="text-gray-300 hover:text-cyber-gold transition-colors">
                  Formations
                </Link>
              </li>
              <li>
                <Link to="/evenements" className="text-gray-300 hover:text-cyber-gold transition-colors">
                  Événements
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-cyber-gold transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="text-gray-300 hover:text-cyber-gold transition-colors">
                  À propos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail size={20} className="text-cyber-gold flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">contact@academie-cyber.fr</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={20} className="text-cyber-gold flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">+40 766 438 679</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-cyber-gold flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Paris, France</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-4">Restez informé</h3>
            <p className="text-gray-300 text-sm mb-4">
              Recevez nos actualités et offres spéciales.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="px-4 py-2 w-full rounded-l-md focus:outline-none text-gray-800"
                />
                <button 
                  type="submit" 
                  className="bg-cyber-gold hover:bg-amber-500 text-cyber font-medium px-4 py-2 rounded-r-md transition-colors"
                >
                  S'abonner
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-300 text-sm">
          <div className="mb-4">
            <Link to="/mentions-legales" className="text-gray-300 hover:text-cyber-gold mx-3 transition-colors">
              Mentions légales
            </Link>
            <Link to="/confidentialite" className="text-gray-300 hover:text-cyber-gold mx-3 transition-colors">
              Politique de confidentialité
            </Link>
            <Link to="/cgv" className="text-gray-300 hover:text-cyber-gold mx-3 transition-colors">
              CGV
            </Link>
          </div>
          <p>© {currentYear} Académie Cyber & Réseaux. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
