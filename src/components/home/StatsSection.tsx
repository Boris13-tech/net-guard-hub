import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "4,5", suffix: "Md €", label: "Marché français de la cybersécurité en 2024" },
  { value: "+30", suffix: "", label: "Métiers différents dans le secteur" },
  { value: "40-55K€", suffix: "/an", label: "Fourchette salariale d'un pentester débutant" },
  { value: "+125K", suffix: "", label: "Offres d'emploi en Europe" }
];

const StatsSection = () => {
  return (
    <section className="py-24 bg-cyber-darker text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyber-blue/10 rounded-full blur-[150px]" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <p className="text-cyber-gold uppercase tracking-wider text-sm font-semibold mb-4">
            Vous faites le bon choix
          </p>
          <h2 className="section-title text-white">
            <span className="gradient-text-gold">+125 000</span> offres d'emploi
            <br />en Europe
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 cyber-card">
              <div className="text-3xl md:text-4xl font-black text-cyber-gold mb-2">
                {stat.value}<span className="text-2xl">{stat.suffix}</span>
              </div>
              <p className="text-white/60 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/contact">
            <Button className="cyber-button-gold text-lg px-10 py-6">
              Candidater maintenant
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
