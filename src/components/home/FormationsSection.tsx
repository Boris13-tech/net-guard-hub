import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const formations = [
  {
    title: "Analyste SOC - Blue Team",
    duration: "6 mois",
    type: "Formation intensive",
    description: "Apprenez à surveiller, détecter et répondre aux incidents de sécurité. Maîtrisez les outils SIEM, l'analyse des logs et la gestion des alertes.",
    skills: ["SIEM", "Analyse logs", "Incident Response", "Threat Intelligence"],
    color: "blue"
  },
  {
    title: "Pentester - Red Team",
    duration: "9 mois",
    type: "Formation intensive",
    description: "Maîtrisez les techniques d'attaque éthique pour identifier les vulnérabilités. Tests d'intrusion, exploitation et rédaction de rapports professionnels.",
    skills: ["Pentest", "Exploitation", "OWASP", "Reporting"],
    color: "gold"
  },
  {
    title: "Expert Réseaux & Sécurité",
    duration: "12 mois",
    type: "Formation complète",
    description: "Concevez et sécurisez des infrastructures réseau robustes. Administration système, firewalls, VPN et architectures sécurisées.",
    skills: ["Réseaux", "Firewalls", "VPN", "Architecture"],
    color: "purple"
  },
  {
    title: "IA & Cybersécurité",
    duration: "9 mois",
    type: "Formation intensive",
    description: "Combinez intelligence artificielle et sécurité informatique. Détection d'anomalies, machine learning appliqué à la cybersécurité.",
    skills: ["Machine Learning", "Python", "Détection anomalies", "Automatisation"],
    color: "green"
  }
];

const FormationsSection = () => {
  return (
    <section className="py-24 bg-cyber-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title text-white">
            Nos formations <span className="gradient-text-gold">intensives</span>
          </h2>
          <p className="section-subtitle mx-auto text-white/60">
            Des programmes de 6 à 12 mois axés sur la pratique et l'employabilité immédiate
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {formations.map((formation, index) => (
            <div key={index} className="cyber-card p-8 group">
              <div className="flex flex-wrap gap-3 mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  formation.color === 'gold' ? 'bg-amber-500/20 text-amber-400' :
                  formation.color === 'blue' ? 'bg-blue-500/20 text-blue-400' :
                  formation.color === 'purple' ? 'bg-purple-500/20 text-purple-400' :
                  'bg-emerald-500/20 text-emerald-400'
                }`}>
                  {formation.type}
                </span>
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-white/10 text-white/70">
                  {formation.duration}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{formation.title}</h3>
              <p className="text-white/60 mb-6">{formation.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {formation.skills.map((skill, i) => (
                  <span key={i} className="px-3 py-1 rounded-full text-xs bg-white/5 text-white/50 border border-white/10">
                    {skill}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button className="cyber-button-gold">
                    S'inscrire
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
