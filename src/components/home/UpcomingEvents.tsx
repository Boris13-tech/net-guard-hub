
import React from "react";
import { ArrowRight } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import EventCard, { EventProps } from "../evenements/EventCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const UpcomingEvents: React.FC = () => {
  const events: EventProps[] = [
    {
      id: 1,
      title: "Webinaire: Les carrières en cybersécurité",
      description:
        "Découvrez les différents métiers de la cybersécurité, les parcours possibles et les compétences recherchées par les recruteurs.",
      date: "17 juin 2025",
      time: "19h30 - 21h00",
      location: "En ligne",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      type: "webinaire"
    },
    {
      id: 2,
      title: "Bootcamp: Administrateurs systèmes",
      description:
        "Formation intensive pour maîtriser l'administration des systèmes et la sécurité des infrastructures. Apprenez les bonnes pratiques de gestion et de sécurisation des serveurs.",
      date: "21 juin - 17 août 2025",
      time: "10h00 - 13h00",
      location: "En ligne",
      image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      type: "bootcamp"
    }
  ];

  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <SectionTitle
            title="Événements à venir"
            subtitle="Participez à nos webinaires, ateliers et bootcamps pour approfondir vos connaissances et networker avec des professionnels."
          />
          <Link to="/evenements" className="mt-4 md:mt-0">
            <Button variant="outline" className="border-cyber text-cyber hover:bg-cyber hover:text-white">
              Tous les événements
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
