
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
        return "bg-blue-100 text-blue-800";
      case "atelier":
        return "bg-green-100 text-green-800";
      case "bootcamp":
        return "bg-purple-100 text-purple-800";
      case "conference":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleRegistration = () => {
    window.open("https://chat.whatsapp.com/Edbzz7vWDTKH13BdyB9T9W", "_blank");
  };

  return (
    <div className="cyber-card hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span className={`text-sm px-3 py-1 rounded-full font-medium capitalize ${getEventTypeColor()}`}>
            {type}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-cyber">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-cyber-light">
            <Calendar size={16} className="mr-2" />
            <span className="text-sm">{date}</span>
          </div>
          <div className="flex items-center text-cyber-light">
            <Clock size={16} className="mr-2" />
            <span className="text-sm">{time}</span>
          </div>
          <div className="flex items-center text-cyber-light">
            <MapPin size={16} className="mr-2" />
            <span className="text-sm">{location}</span>
          </div>
        </div>
        
        <div className="mt-auto">
          <Button onClick={handleRegistration} className="cyber-button w-full">
            <span>S'inscrire</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
