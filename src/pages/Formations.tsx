
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import FormationCard, { FormationProps } from "@/components/formations/FormationCard";
import ContactForm from "@/components/contact/ContactForm";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, Shield, Sparkles } from "lucide-react";

const Formations: React.FC = () => {
  const [formations] = useState<FormationProps[]>([
    {
      id: 1,
      title: "Analyste SOC - Blue Team",
      description:
        "Apprenez à surveiller, détecter et répondre aux incidents de sécurité. Maîtrisez les outils de détection et d'analyse des menaces pour protéger efficacement les systèmes d'information.",
      level: "Débutant",
      duration: "10 semaines",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      category: "Blue Team"
    },
    {
      id: 2,
      title: "Pentesting Fondamental - Red Team",
      description:
        "Découvrez les techniques d'attaque éthique pour mieux comprendre et anticiper les menaces. Pratique sur environnements réels et développement d'une méthodologie de test complète.",
      level: "Intermédiaire",
      duration: "12 semaines",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      category: "Red Team"
    },
    {
      id: 3,
      title: "Architecte Réseau Sécurisé",
      description:
        "Concevez et déployez des infrastructures réseau robustes et sécurisées pour les entreprises. Focus sur la sécurité by design et les bonnes pratiques d'architecture.",
      level: "Avancé",
      duration: "14 semaines",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      category: "Infrastructure"
    },
    {
      id: 4,
      title: "Cybersécurité pour débutants",
      description:
        "Introduction complète aux fondamentaux de la cybersécurité. Idéal pour les profils en reconversion ou les professionnels IT souhaitant élargir leurs compétences.",
      level: "Débutant",
      duration: "8 semaines",
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      category: "Fondamentaux"
    },
    {
      id: 5,
      title: "Analyse de malware et rétro-ingénierie",
      description:
        "Apprenez à analyser des logiciels malveillants et à comprendre leur fonctionnement pour mieux vous en protéger. Techniques avancées de rétro-ingénierie.",
      level: "Avancé",
      duration: "10 semaines",
      image: "https://images.unsplash.com/photo-1569078449082-d264d9e239c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      category: "Blue Team"
    },
    {
      id: 6,
      title: "Ethical Hacking avancé",
      description:
        "Pour les pentesters expérimentés souhaitant aller plus loin. Techniques avancées d'exploitation, attaques sur environnement réel et méthodes d'évasion.",
      level: "Avancé",
      duration: "12 semaines",
      image: "https://images.unsplash.com/photo-1483817101829-339b08e8d83f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      category: "Red Team"
    }
  ]);

  const debutantFormations = formations.filter(f => f.level === "Débutant");
  const intermediaireFormations = formations.filter(f => f.level === "Intermédiaire");
  const avanceFormations = formations.filter(f => f.level === "Avancé");

  return (
    <Layout>
      {/* Hero section */}
      <section className="relative py-24 overflow-hidden cyber-gradient">
        {/* Background effects */}
        <div className="absolute inset-0 opacity-30" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\"))"}}></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyber-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyber-gold/5 rounded-full blur-3xl"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyber-gold/10 border border-cyber-gold/30 mb-6">
              <GraduationCap className="w-4 h-4 text-cyber-gold" />
              <span className="text-cyber-gold text-sm font-medium">Formations Professionnelles</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">Formations en </span>
              <span className="gradient-text-gold">Cybersécurité</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Des programmes de formation pratiques et concrets pour maîtriser les compétences 
              essentielles en cybersécurité et accélérer votre carrière.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="cyber-button-gold">
                <Sparkles className="mr-2 h-5 w-5" />
                <span>Demander des informations</span>
              </Button>
              <Button variant="outline" className="border-cyber-gold/50 text-cyber-gold hover:bg-cyber-gold/10">
                <Shield className="mr-2 h-5 w-5" />
                <span>Voir le catalogue</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Formations avec filtres */}
      <section className="py-20 cyber-gradient">
        <div className="container-custom">
          <SectionTitle
            title="Nos programmes de formation"
            subtitle="Explorez nos formations adaptées à tous les niveaux, du débutant à l'expert en cybersécurité."
            centered
          />

          <Tabs defaultValue="all" className="w-full mt-8">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-cyber-dark/50 border border-cyber-gold/20">
                <TabsTrigger 
                  value="all" 
                  className="data-[state=active]:bg-cyber-gold data-[state=active]:text-cyber-dark text-gray-300"
                >
                  Tous
                </TabsTrigger>
                <TabsTrigger 
                  value="debutant"
                  className="data-[state=active]:bg-cyber-gold data-[state=active]:text-cyber-dark text-gray-300"
                >
                  Débutant
                </TabsTrigger>
                <TabsTrigger 
                  value="intermediaire"
                  className="data-[state=active]:bg-cyber-gold data-[state=active]:text-cyber-dark text-gray-300"
                >
                  Intermédiaire
                </TabsTrigger>
                <TabsTrigger 
                  value="avance"
                  className="data-[state=active]:bg-cyber-gold data-[state=active]:text-cyber-dark text-gray-300"
                >
                  Avancé
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {formations.map((formation) => (
                  <FormationCard key={formation.id} {...formation} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="debutant" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {debutantFormations.map((formation) => (
                  <FormationCard key={formation.id} {...formation} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="intermediaire" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {intermediaireFormations.map((formation) => (
                  <FormationCard key={formation.id} {...formation} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="avance" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {avanceFormations.map((formation) => (
                  <FormationCard key={formation.id} {...formation} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Inscription section */}
      <section className="py-20 cyber-gradient border-t border-cyber-gold/10">
        <div className="container-custom">
          <SectionTitle
            title="Intéressé par nos formations ?"
            subtitle="Remplissez le formulaire ci-dessous pour recevoir plus d'informations et être contacté par notre équipe pédagogique."
            centered
          />
          <div className="max-w-2xl mx-auto">
            <div className="cyber-card p-8">
              <ContactForm formType="inscription" title="" subtitle="" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Formations;
