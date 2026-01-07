
import React from "react";
import { Shield, Award, Users, Lightbulb } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutSection = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6 text-cyber-gold" />,
      title: "Expertise reconnue",
      description:
        "Formateurs experts issus du terrain avec une expérience concrète en cybersécurité."
    },
    {
      icon: <Award className="w-6 h-6 text-cyber-gold" />,
      title: "Formations certifiantes",
      description:
        "Préparation aux certifications les plus reconnues du secteur."
    },
    {
      icon: <Users className="w-6 h-6 text-cyber-gold" />,
      title: "Accompagnement personnalisé",
      description:
        "Suivi individuel et coaching pour assurer votre progression."
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-cyber-gold" />,
      title: "Approche pratique",
      description:
        "Apprentissage par la pratique avec des cas réels et des environnements de laboratoire."
    }
  ];

  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionTitle
              title="À propos de l'Académie"
              subtitle="Notre mission est de former la prochaine génération d'experts en cybersécurité pour répondre aux besoins croissants des entreprises."
            />
            
            <p className="text-gray-600 mb-6">
              Fondée par des experts du domaine, l'Académie Cyber & Réseaux est 
              née d'un constat simple : le besoin urgent de professionnels formés 
              aux techniques modernes de cybersécurité et la difficulté pour les 
              débutants d'accéder à des formations de qualité.
            </p>
            
            <p className="text-gray-600 mb-8">
              Notre approche pédagogique combine théorie et pratique intensive, 
              avec un accent particulier sur les compétences réellement demandées 
              sur le marché du travail.
            </p>
            
            <Link to="/a-propos">
              <Button className="cyber-button">
                Découvrir notre vision
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-cyber/5 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-cyber">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
