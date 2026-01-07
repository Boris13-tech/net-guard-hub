import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-cyber to-cyber-darkblue text-white">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à lancer votre carrière en cybersécurité?
          </h2>
          
          <p className="text-xl opacity-90 mb-8">
            Contactez-nous dès aujourd'hui pour discuter de votre projet professionnel 
            et découvrir comment nos formations peuvent vous aider à atteindre vos objectifs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link to="/contact">
              <Button size="lg" className="cyber-button-gold min-w-[200px]">
                <Mail className="mr-2 h-5 w-5" />
                Nous contacter
              </Button>
            </Link>
            <a href="tel:+40766438679">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 min-w-[200px]">
                <Phone className="mr-2 h-5 w-5" />
                +40 766 438 679
              </Button>
            </a>
          </div>
          
          <p className="opacity-80 text-sm max-w-2xl">
            Notre équipe est disponible pour répondre à toutes vos questions et vous guider dans le choix de votre formation.
            Premier rendez-vous d'orientation offert.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
