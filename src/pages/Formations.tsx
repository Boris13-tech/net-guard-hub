
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import FormationCard, { FormationProps } from "@/components/formations/FormationCard";
import ContactForm from "@/components/contact/ContactForm";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Formations: React.FC = () => {
  // État pour stocker les formations
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

  // Filtrer par niveau
  const debutantFormations = formations.filter(f => f.level === "Débutant");
  const intermediaireFormations = formations.filter(f => f.level === "Intermédiaire");
  const avanceFormations = formations.filter(f => f.level === "Avancé");

  return (
    <Layout>
      {/* Hero section */}
      <section className="bg-cyber text-white py-20">
        <div className="container-custom">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-6">Formations en cybersécurité</h1>
            <p className="text-xl mb-8 opacity-90">
              Des programmes de formation pratiques et concrets pour maîtriser les compétences 
              essentielles en cybersécurité et accélérer votre carrière.
            </p>
            <Button className="cyber-button-gold">
              <span>Demander des informations</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Formations avec filtres */}
      <section className="py-20">
        <div className="container-custom">
          <SectionTitle
            title="Nos programmes de formation"
            subtitle="Explorez nos formations adaptées à tous les niveaux, du débutant à l'expert en cybersécurité."
            centered
          />

          <Tabs defaultValue="all" className="w-full mt-8">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">Tous</TabsTrigger>
                <TabsTrigger value="debutant">Débutant</TabsTrigger>
                <TabsTrigger value="intermediaire">Intermédiaire</TabsTrigger>
                <TabsTrigger value="avance">Avancé</TabsTrigger>
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
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Intéressé par nos formations ?"
            subtitle="Remplissez le formulaire ci-dessous pour recevoir plus d'informations et être contacté par notre équipe pédagogique."
            centered
          />
          <ContactForm formType="inscription" title="" subtitle="" />
        </div>
      </section>
    </Layout>
  );
};

export default Formations;
