import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const partnerLogos = [
  "Engie", "RATP", "Crédit Agricole", "Roland Berger", "Advens", 
  "Blue Water", "Cogitanda", "Netsystem", "Futurae", "TheRamp"
];

const Hero = () => {
  return (
    <section className="relative min-h-screen cyber-gradient text-white overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyber-blue/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyber-gold/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyber-purple/10 rounded-full blur-[150px]" />
      
      <div className="container-custom relative z-10 pt-32 pb-20">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8">
            <span className="w-2 h-2 bg-cyber-green rounded-full animate-pulse" />
            <span className="text-sm font-medium">Admissions ouvertes 2025</span>
          </div>

          {/* Main Title */}
          <h1 className="section-title text-white mb-6">
            École supérieure de
            <br />
            <span className="gradient-text-gold">cybersécurité</span> et d'
            <span className="text-cyber-blue">IA</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 mb-10 max-w-3xl">
            Formez-vous aux métiers de demain avec des experts reconnus. 
            Bachelor et Mastère en alternance, 100% orientés emploi.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link to="/contact">
              <Button className="cyber-button-gold text-lg px-10 py-6">
                Candidater
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/formations">
              <Button className="cyber-button-outline text-lg px-10 py-6">
                Découvrir nos formations
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {[
              { value: "100%", label: "Alternance" },
              { value: "RNCP", label: "Titres reconnus" },
              { value: "+125K", label: "Offres d'emploi" },
              { value: "45-55K€", label: "Salaire moyen" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-black gradient-text-gold">{stat.value}</div>
                <div className="text-sm text-white/60 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Partner Logos */}
        <div className="border-t border-white/10 pt-10">
          <p className="text-center text-white/40 text-sm mb-6">Ils nous font confiance et emploient nos alternants</p>
          <div className="overflow-hidden">
            <div className="flex gap-12 animate-scroll">
              {[...partnerLogos, ...partnerLogos].map((logo, i) => (
                <div 
                  key={i} 
                  className="flex-shrink-0 px-6 py-3 bg-white/5 rounded-lg border border-white/10 text-white/50 font-medium whitespace-nowrap"
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
