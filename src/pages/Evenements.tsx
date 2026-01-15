
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import EventCard, { EventProps } from "@/components/evenements/EventCard";
import { Button } from "@/components/ui/button";
import { Calendar, Sparkles, Users, Building } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Evenements: React.FC = () => {
  const [events] = useState<EventProps[]>([
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
      title: "Atelier pratique: Détection d'intrusions réseau",
      description:
        "Atelier hands-on sur la mise en place d'un système de détection d'intrusion efficace. Venez avec votre laptop. Places limitées à 20 participants.",
      date: "28 avril 2025",
      time: "9h00 - 17h00",
      location: "Paris",
      image: "https://images.unsplash.com/photo-1488229297570-58520851e868?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      type: "atelier"
    },
    {
      id: 3,
      title: "Bootcamp: Administrateurs systèmes",
      description:
        "Formation intensive pour maîtriser l'administration des systèmes et la sécurité des infrastructures. Apprenez les bonnes pratiques de gestion et de sécurisation des serveurs.",
      date: "21 juin - 17 août 2025",
      time: "10h00 - 13h00",
      location: "En ligne",
      image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      type: "bootcamp"
    },
    {
      id: 4,
      title: "Bootcamp: Ethical hacker",
      description:
        "Formation intensive aux techniques de hacking éthique et de test d'intrusion. Apprenez à identifier les vulnérabilités pour mieux protéger les systèmes.",
      date: "21 juin - 17 août 2025",
      time: "10h00 - 13h00",
      location: "En ligne",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      type: "bootcamp"
    },
    {
      id: 5,
      title: "Conférence: Cybersécurité et conformité RGPD",
      description:
        "Comment concilier les exigences de sécurité et les obligations réglementaires ? Analyses, retours d'expérience et bonnes pratiques.",
      date: "12 mai 2025",
      time: "14h00 - 17h30",
      location: "Paris",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      type: "conference"
    },
    {
      id: 6,
      title: "Atelier: Sécurité des applications web",
      description:
        "Apprenez à identifier et corriger les vulnérabilités les plus courantes dans les applications web. Démonstrations et exercices pratiques.",
      date: "2 juin 2025",
      time: "9h00 - 17h00",
      location: "Nantes",
      image: "https://images.unsplash.com/photo-1599507593548-0187ac4043c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      type: "atelier"
    }
  ]);

  const webinaires = events.filter(e => e.type === "webinaire");
  const ateliers = events.filter(e => e.type === "atelier");
  const bootcamps = events.filter(e => e.type === "bootcamp");
  const conferences = events.filter(e => e.type === "conference");

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
              <Calendar className="w-4 h-4 text-cyber-gold" />
              <span className="text-cyber-gold text-sm font-medium">Agenda Cyber</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">Événements & </span>
              <span className="gradient-text-gold">Webinaires</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Participez à nos événements pour approfondir vos connaissances, échanger avec des experts 
              et rester à jour sur les dernières tendances en cybersécurité.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="cyber-button-gold">
                <Sparkles className="mr-2 h-5 w-5" />
                <span>Voir l'agenda</span>
              </Button>
              <Button variant="outline" className="border-cyber-gold/50 text-cyber-gold hover:bg-cyber-gold/10">
                <Users className="mr-2 h-5 w-5" />
                <span>S'inscrire à un événement</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Événements avec filtres */}
      <section className="py-20 cyber-gradient">
        <div className="container-custom">
          <SectionTitle
            title="Nos prochains événements"
            subtitle="Découvrez notre programme d'événements et inscrivez-vous dès maintenant pour réserver votre place."
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
                  value="webinaire"
                  className="data-[state=active]:bg-cyber-gold data-[state=active]:text-cyber-dark text-gray-300"
                >
                  Webinaires
                </TabsTrigger>
                <TabsTrigger 
                  value="atelier"
                  className="data-[state=active]:bg-cyber-gold data-[state=active]:text-cyber-dark text-gray-300"
                >
                  Ateliers
                </TabsTrigger>
                <TabsTrigger 
                  value="bootcamp"
                  className="data-[state=active]:bg-cyber-gold data-[state=active]:text-cyber-dark text-gray-300"
                >
                  Bootcamps
                </TabsTrigger>
                <TabsTrigger 
                  value="conference"
                  className="data-[state=active]:bg-cyber-gold data-[state=active]:text-cyber-dark text-gray-300"
                >
                  Conférences
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {events.map((event) => (
                  <EventCard key={event.id} {...event} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="webinaire" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {webinaires.map((event) => (
                  <EventCard key={event.id} {...event} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="atelier" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {ateliers.map((event) => (
                  <EventCard key={event.id} {...event} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="bootcamp" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {bootcamps.map((event) => (
                  <EventCard key={event.id} {...event} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="conference" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {conferences.map((event) => (
                  <EventCard key={event.id} {...event} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Proposition d'événements privés */}
      <section className="py-20 cyber-gradient border-t border-cyber-gold/10">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyber-gold/10 border border-cyber-gold/30 mb-6">
                <Building className="w-4 h-4 text-cyber-gold" />
                <span className="text-cyber-gold text-sm font-medium">Entreprises</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-white">Événements </span>
                <span className="gradient-text-gold">sur mesure</span>
              </h2>
              
              <p className="text-gray-300 mb-6">
                Nous organisons également des sessions de formation et des ateliers adaptés aux besoins spécifiques des entreprises.
              </p>
              
              <p className="text-gray-400 mb-8">
                Que vous souhaitiez former vos équipes aux bonnes pratiques de cybersécurité, 
                réaliser un exercice de simulation d'attaque ou organiser un événement de sensibilisation, 
                nous pouvons vous proposer une solution adaptée à vos besoins.
              </p>
              
              <Button className="cyber-button-gold">
                <Sparkles className="mr-2 h-5 w-5" />
                Demander un devis
              </Button>
            </div>
            
            <div className="cyber-card p-8">
              <h3 className="text-xl font-semibold mb-6 gradient-text-gold">Quelques exemples :</h3>
              <ul className="space-y-4">
                {[
                  "Formation de sensibilisation pour l'ensemble des collaborateurs",
                  "Bootcamp intensif pour les équipes IT",
                  "Exercice de simulation d'incident (Red Team vs Blue Team)",
                  "Workshops techniques sur des sujets spécifiques",
                  "Conférence de sensibilisation aux risques cyber"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-cyber-gold/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-cyber-gold font-bold text-sm">✓</span>
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Evenements;
