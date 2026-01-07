
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import EventCard, { EventProps } from "@/components/evenements/EventCard";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Evenements: React.FC = () => {
  // État pour stocker les événements
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

  // Filtrer par type
  const webinaires = events.filter(e => e.type === "webinaire");
  const ateliers = events.filter(e => e.type === "atelier");
  const bootcamps = events.filter(e => e.type === "bootcamp");
  const conferences = events.filter(e => e.type === "conference");

  return (
    <Layout>
      {/* Hero section */}
      <section className="bg-cyber text-white py-20">
        <div className="container-custom">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-6">Événements & Webinaires</h1>
            <p className="text-xl mb-8 opacity-90">
              Participez à nos événements pour approfondir vos connaissances, échanger avec des experts 
              et rester à jour sur les dernières tendances en cybersécurité.
            </p>
            <Button className="cyber-button-gold">
              <Calendar className="mr-2 h-5 w-5" />
              <span>Voir l'agenda</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Événements avec filtres */}
      <section className="py-20">
        <div className="container-custom">
          <SectionTitle
            title="Nos prochains événements"
            subtitle="Découvrez notre programme d'événements et inscrivez-vous dès maintenant pour réserver votre place."
            centered
          />

          <Tabs defaultValue="all" className="w-full mt-8">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">Tous</TabsTrigger>
                <TabsTrigger value="webinaire">Webinaires</TabsTrigger>
                <TabsTrigger value="atelier">Ateliers</TabsTrigger>
                <TabsTrigger value="bootcamp">Bootcamps</TabsTrigger>
                <TabsTrigger value="conference">Conférences</TabsTrigger>
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
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle
                title="Événements sur mesure"
                subtitle="Nous organisons également des sessions de formation et des ateliers adaptés aux besoins spécifiques des entreprises."
              />
              
              <p className="text-gray-600 mb-6">
                Que vous souhaitiez former vos équipes aux bonnes pratiques de cybersécurité, 
                réaliser un exercice de simulation d'attaque ou organiser un événement de sensibilisation, 
                nous pouvons vous proposer une solution adaptée à vos besoins.
              </p>
              
              <p className="text-gray-600 mb-8">
                Contactez-nous pour discuter de votre projet et recevoir une proposition personnalisée.
              </p>
              
              <Button className="cyber-button">
                Demander un devis
              </Button>
            </div>
            
            <div className="cyber-card p-8">
              <h3 className="text-xl font-semibold mb-6 text-cyber">Quelques exemples :</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-cyber/10 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-cyber font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">Formation de sensibilisation pour l'ensemble des collaborateurs</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-cyber/10 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-cyber font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">Bootcamp intensif pour les équipes IT</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-cyber/10 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-cyber font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">Exercice de simulation d'incident (Red Team vs Blue Team)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-cyber/10 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-cyber font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">Workshops techniques sur des sujets spécifiques</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-cyber/10 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-cyber font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">Conférence de sensibilisation aux risques cyber</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Evenements;
