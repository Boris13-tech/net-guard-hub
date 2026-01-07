
import React from "react";
import { ArrowRight } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import FormationCard, { FormationProps } from "../formations/FormationCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FeaturedFormations: React.FC = () => {
  const formations: FormationProps[] = [
    {
      id: 1,
      title: "Analyste SOC - Blue Team",
      description:
        "Apprenez à surveiller, détecter et répondre aux incidents de sécurité. Maîtrisez les outils de détection et d'analyse des menaces.",
      level: "Débutant",
      duration: "10 semaines",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      category: "Blue Team"
    },
    {
      id: 2,
      title: "Pentesting Fondamental - Red Team",
      description:
        "Découvrez les techniques d'attaque éthique pour mieux comprendre et anticiper les menaces. Pratique sur environnements réels.",
      level: "Intermédiaire",
      duration: "12 semaines",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      category: "Red Team"
    },
    {
      id: 3,
      title: "Architecte Réseau Sécurisé",
      description:
        "Concevez et déployez des infrastructures réseau robustes et sécurisées pour les entreprises. Focus sur la sécurité by design.",
      level: "Avancé",
      duration: "14 semaines",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      category: "Infrastructure"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <SectionTitle
            title="Nos formations phares"
            subtitle="Des programmes conçus pour vous propulser dans l'univers de la cybersécurité, quel que soit votre niveau."
          />
          <Link to="/formations" className="mt-4 md:mt-0">
            <Button variant="outline" className="border-cyber text-cyber hover:bg-cyber hover:text-white">
              Toutes les formations
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {formations.map((formation) => (
            <FormationCard key={formation.id} {...formation} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedFormations;
