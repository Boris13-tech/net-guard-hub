import React from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import FormationCard from "../formations/FormationCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useFeaturedFormations } from "@/hooks/useFormations";

const FeaturedFormations: React.FC = () => {
  const { data: formations, isLoading, error } = useFeaturedFormations();

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

        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-cyber" />
          </div>
        ) : error ? (
          <div className="text-center py-12 text-red-500">
            Une erreur est survenue lors du chargement des formations.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {formations?.slice(0, 3).map((formation) => (
              <FormationCard key={formation.id} formation={formation} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedFormations;
