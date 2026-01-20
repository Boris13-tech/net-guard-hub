import React from "react";
import { Clock, Award, Euro } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Formation, getLevelLabel, getDefaultImage } from "@/hooks/useFormations";

interface FormationCardProps {
  formation: Formation;
}

const FormationCard: React.FC<FormationCardProps> = ({ formation }) => {
  const { title, description, level, duration, image_url, category, price } = formation;
  
  const levelLabel = getLevelLabel(level);
  const imageUrl = image_url || getDefaultImage(category);

  const getLevelColor = () => {
    switch (level) {
      case "debutant":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "intermediaire":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "avance":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <div className="group cyber-card overflow-hidden hover:border-cyber-gold/50 transition-all duration-300">
      <div className="h-48 overflow-hidden relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark via-transparent to-transparent"></div>
        <div className="absolute top-3 left-3">
          <span className={`text-xs px-3 py-1 rounded-full font-medium border ${getLevelColor()}`}>
            {levelLabel}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 mb-3 text-sm">
          <div className="flex items-center text-gray-400">
            <Clock size={14} className="mr-1 text-cyber-gold" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center text-gray-400">
            <Award size={14} className="mr-1 text-cyber-gold" />
            <span>Certifiant</span>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-cyber-gold transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 mb-4 line-clamp-3 text-sm">{description}</p>
        
        <div className="space-y-3 mt-auto">
          {price && (
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-gray-400">Prix</span>
              <span className="text-cyber-gold font-semibold flex items-center">
                {price.toLocaleString("fr-FR")} <Euro size={14} className="ml-1" />
              </span>
            </div>
          )}
          <Button className="cyber-button w-full">
            <span>En savoir plus</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FormationCard;
