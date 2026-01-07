
import React from "react";
import { Clock, Users, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import RevolutPaymentButton from "@/components/ui/RevolutPaymentButton";

export interface FormationProps {
  id: number;
  title: string;
  description: string;
  level: "Débutant" | "Intermédiaire" | "Avancé";
  duration: string;
  image: string;
  category: string;
}

const FormationCard: React.FC<FormationProps> = ({
  title,
  description,
  level,
  duration,
  image,
}) => {
  const getLevelColor = () => {
    switch (level) {
      case "Débutant":
        return "bg-green-100 text-green-800";
      case "Intermédiaire":
        return "bg-blue-100 text-blue-800";
      case "Avancé":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="cyber-card hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <span className={`text-sm px-3 py-1 rounded-full font-medium ${getLevelColor()}`}>
            {level}
          </span>
          <div className="flex items-center text-cyber-light">
            <Clock size={16} className="mr-1" />
            <span className="text-sm">{duration}</span>
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-cyber">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        
        <div className="space-y-3 mt-auto">
          <Button className="cyber-button w-full">
            <span>En savoir plus</span>
          </Button>
          
          <RevolutPaymentButton amount={99} currency="EUR" />
        </div>
      </div>
    </div>
  );
};

export default FormationCard;
