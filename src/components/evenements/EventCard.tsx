
import React from "react";
import { Calendar, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface EventProps {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
  type: "webinaire" | "atelier" | "bootcamp" | "conference";
}

const EventCard: React.FC<EventProps> = ({
  title,
  description,
  date,
  time,
  location,
  image,
  type,
}) => {
  const getEventTypeColor = () => {
    switch (type) {
      case "webinaire":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "atelier":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "bootcamp":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      case "conference":
        return "bg-orange-500/20 text-orange-400 border-orange-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const handleRegistration = () => {
    window.open("https://chat.whatsapp.com/Edbzz7vWDTKH13BdyB9T9W", "_blank");
  };

  return (
    <div className="group cyber-card overflow-hidden hover:border-cyber-gold/50 transition-all duration-300">
      <div className="h-48 overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark via-transparent to-transparent"></div>
        <div className="absolute top-3 left-3">
          <span className={`text-xs px-3 py-1 rounded-full font-medium capitalize border ${getEventTypeColor()}`}>
            {type}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-cyber-gold transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 mb-4 line-clamp-3 text-sm">{description}</p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-400 text-sm">
            <Calendar size={14} className="mr-2 text-cyber-gold" />
            <span>{date}</span>
          </div>
          <div className="flex items-center text-gray-400 text-sm">
            <Clock size={14} className="mr-2 text-cyber-gold" />
            <span>{time}</span>
          </div>
          <div className="flex items-center text-gray-400 text-sm">
            <MapPin size={14} className="mr-2 text-cyber-gold" />
            <span>{location}</span>
          </div>
        </div>
        
        <div className="mt-auto">
          <Button onClick={handleRegistration} className="cyber-button-gold w-full">
            <span>S'inscrire</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
