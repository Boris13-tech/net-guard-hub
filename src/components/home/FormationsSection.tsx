import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, GraduationCap, Briefcase } from "lucide-react";

const formations = [
  {
    title: "Bachelor Cybersécurité",
    level: "Bac+3",
    duration: "1 an",
    type: "Alternance",
    description: "Développez les compétences en administration réseau et les bases de la cybersécurité, en ligne avec les besoins de vos futurs employeurs.",
    rncp: "Titre RNCP niveau 6",
    color: "cyber-blue"
  },
  {
    title: "Mastère Cybersécurité",
    level: "Bac+5",
    duration: "2 ans",
    type: "Alternance",
    description: "Devenez expert de la cybersécurité pour anticiper et contrer les menaces de demain. Expertise technique approfondie incluant Cloud, OSINT, GRC.",
    rncp: "Titre RNCP niveau 7",
    color: "cyber-gold"
  },
  {
    title: "Mastère DPO & Digital Compliance",
    level: "Bac+5",
    duration: "1 an",
    type: "Alternance",
    description: "Maîtrisez la gouvernance des données et devenez expert RGPD / DORA / NIS2 / IA Act. Combinez enjeux réglementaires et excellence technique.",
    rncp: "Titre RNCP niveau 7",
    color: "cyber-purple"
  },
  {
    title: "Mastère Intelligence Artificielle & Data",
    level: "Bac+5",
    duration: "2 ans",
    type: "Alternance",
    description: "Préparez-vous au métier de Chef de Projet en IA / Data. Travaillez sur des projets concrets axés sur des applications réelles de l'IA.",
    rncp: "Titre RNCP niveau 7",
    color: "cyber-green"
  }
];

const FormationsSection = () => {
  return (
    <section className="py-24 bg-cyber-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title text-white">
            Des formations <span className="gradient-text-gold">spécialisées</span>
          </h2>
          <p className="section-subtitle mx-auto text-white/60">
            Bachelor et Mastère en alternance, 100% orientés emploi dans la cybersécurité et l'IA
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {formations.map((formation, index) => (
            <div key={index} className="cyber-card p-8 group">
              <div className="flex flex-wrap gap-3 mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium bg-${formation.color}/20 text-${formation.color === 'cyber-gold' ? 'amber-400' : formation.color === 'cyber-blue' ? 'blue-400' : formation.color === 'cyber-purple' ? 'purple-400' : 'emerald-400'}`}>
                  {formation.type}
                </span>
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-white/10 text-white/70">
                  {formation.duration}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">{formation.title}</h3>
              <p className="text-cyber-gold text-sm mb-4">{formation.rncp}</p>
              <p className="text-white/60 mb-6">{formation.description}</p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button className="cyber-button-gold">
                    Candidater
                  </Button>
                </Link>
                <Link to="/formations">
                  <Button className="cyber-button-outline">
                    En savoir plus
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FormationsSection;
