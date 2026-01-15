import React from "react";
import { Users, Lightbulb, Building, Award } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "École créée par des experts",
    description: "Fondée par des professionnels reconnus combinant pédagogie projet et expertise réglementaire."
  },
  {
    icon: Lightbulb,
    title: "Pédagogie innovante",
    description: "Apprentissage par projet, mises en situation réelles et accompagnement personnalisé."
  },
  {
    icon: Building,
    title: "Campus équipés",
    description: "Infrastructures modernes avec labs de cybersécurité et environnements de simulation."
  },
  {
    icon: Award,
    title: "Pédagogues qualifiés",
    description: "Intervenants experts issus du terrain avec une expérience concrète en entreprise."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 cyber-gradient text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyber-gold/10 rounded-full blur-[150px]" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <p className="text-cyber-gold uppercase tracking-wider text-sm font-semibold mb-4">
            Au croisement de la tech et de l'humain
          </p>
          <h2 className="section-title text-white">
            Pourquoi choisir <span className="gradient-text-gold">Cybersup</span> ?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="cyber-card p-8 text-center group">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-cyber-gold/20 to-cyber-blue/20 flex items-center justify-center group-hover:from-cyber-gold/30 group-hover:to-cyber-blue/30 transition-colors">
                <feature.icon className="w-8 h-8 text-cyber-gold" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-white/60">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
