import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 cyber-gradient text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyber-gold/20 rounded-full blur-[200px]" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-cyber-gold uppercase tracking-wider text-sm font-semibold mb-4">
            L'école de la protection numérique
          </p>
          <h2 className="section-title text-white mb-6">
            Prêt à lancer votre carrière en <span className="gradient-text-gold">cybersécurité</span> ?
          </h2>
          
          <p className="text-xl text-white/70 mb-10">
            Contactez-nous pour discuter de votre projet professionnel et découvrir 
            comment nos formations peuvent vous aider à atteindre vos objectifs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link to="/contact">
              <Button className="cyber-button-gold text-lg px-10 py-6">
                <Mail className="mr-2 h-5 w-5" />
                Nous contacter
              </Button>
            </Link>
            <a href="tel:+33123456789">
              <Button className="cyber-button-outline text-lg px-10 py-6">
                <Phone className="mr-2 h-5 w-5" />
                +33 1 23 45 67 89
              </Button>
            </a>
          </div>
          
          <p className="text-white/50 text-sm">
            Premier rendez-vous d'orientation offert • Réponse sous 48h
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
