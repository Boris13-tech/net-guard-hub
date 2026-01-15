import React from "react";
import { Link } from "react-router-dom";
import { Shield, Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cyber-darker text-white pt-20 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo + About */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyber-gold to-amber-500 rounded-xl flex items-center justify-center">
                <Shield className="w-7 h-7 text-cyber-dark" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">LEGRANDSUP</h2>
                <span className="text-xs text-white/60">Cybersécurité & IA</span>
              </div>
            </Link>
            <p className="text-white/60 text-sm mb-6">
              LegrandSup - L'école supérieure de cybersécurité et d'IA. Formez-vous aux métiers de demain avec des experts reconnus.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-cyber-gold hover:border-cyber-gold/50 transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Formations */}
          <div>
            <h3 className="font-bold text-lg mb-6">Formations</h3>
            <ul className="space-y-3">
              {["Analyste SOC", "Pentester Red Team", "Expert Réseaux & Sécurité", "IA & Cybersécurité"].map((item) => (
                <li key={item}>
                  <Link to="/formations" className="text-white/60 hover:text-cyber-gold transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-lg mb-6">Navigation</h3>
            <ul className="space-y-3">
              {[
                { to: "/", label: "Accueil" },
                { to: "/formations", label: "Formations" },
                { to: "/evenements", label: "Événements" },
                { to: "/blog", label: "Blog" },
                { to: "/a-propos", label: "À propos" },
                { to: "/contact", label: "Contact" }
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-white/60 hover:text-cyber-gold transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-cyber-gold mt-0.5" />
                <span className="text-white/60 text-sm">contact@legrandsup.fr</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-cyber-gold mt-0.5" />
                <span className="text-white/60 text-sm">+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-cyber-gold mt-0.5" />
                <span className="text-white/60 text-sm">Paris, France</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">© {currentYear} LegrandSup. Tous droits réservés.</p>
          <div className="flex gap-6">
            {["Mentions légales", "Confidentialité", "CGV"].map((item) => (
              <Link key={item} to="#" className="text-white/40 hover:text-white/70 text-sm transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
