import React from "react";
import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import FormationCard from "@/components/formations/FormationCard";
import ContactForm from "@/components/contact/ContactForm";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, Shield, Sparkles, Loader2 } from "lucide-react";
import { useFormations } from "@/hooks/useFormations";

const Formations: React.FC = () => {
  const { data: formations, isLoading, error } = useFormations();

  const cyberFormations = formations?.filter(f => f.category === "cybersecurite") || [];
  const cloudFormations = formations?.filter(f => f.category === "cloud") || [];
  const iaFormations = formations?.filter(f => f.category === "ia") || [];

  return (
    <Layout>
      {/* Hero section */}
      <section className="relative py-24 overflow-hidden cyber-gradient">
        {/* Background effects */}
        <div className="absolute inset-0 opacity-30" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}}>
        </div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyber-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyber-gold/5 rounded-full blur-3xl"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyber-gold/10 border border-cyber-gold/30 mb-6">
              <GraduationCap className="w-4 h-4 text-cyber-gold" />
              <span className="text-cyber-gold text-sm font-medium">Formations Professionnelles</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">Formations en </span>
              <span className="gradient-text-gold">Cybersécurité, Cloud & IA</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Des programmes de formation pratiques et concrets pour maîtriser les compétences 
              essentielles en cybersécurité, cloud computing et intelligence artificielle.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="cyber-button-gold">
                <Sparkles className="mr-2 h-5 w-5" />
                <span>Demander des informations</span>
              </Button>
              <Button variant="outline" className="border-cyber-gold/50 text-cyber-gold hover:bg-cyber-gold/10">
                <Shield className="mr-2 h-5 w-5" />
                <span>Voir le catalogue</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Formations avec filtres */}
      <section className="py-20 cyber-gradient">
        <div className="container-custom">
          <SectionTitle
            title="Nos programmes de formation"
            subtitle="Explorez nos formations adaptées à tous les niveaux, du débutant à l'expert en cybersécurité."
            centered
          />

          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="h-8 w-8 animate-spin text-cyber-gold" />
            </div>
          ) : error ? (
            <div className="text-center py-20 text-red-400">
              Une erreur est survenue lors du chargement des formations.
            </div>
          ) : (
            <Tabs defaultValue="all" className="w-full mt-8">
              <div className="flex justify-center mb-8 flex-wrap gap-2">
                <TabsList className="bg-cyber-dark/50 border border-cyber-gold/20 flex-wrap h-auto">
                  <TabsTrigger 
                    value="all" 
                    className="data-[state=active]:bg-cyber-gold data-[state=active]:text-cyber-dark text-gray-300"
                  >
                    Tous ({formations?.length || 0})
                  </TabsTrigger>
                  <TabsTrigger 
                    value="cyber"
                    className="data-[state=active]:bg-cyber-gold data-[state=active]:text-cyber-dark text-gray-300"
                  >
                    🛡️ Cybersécurité ({cyberFormations.length})
                  </TabsTrigger>
                  <TabsTrigger 
                    value="cloud"
                    className="data-[state=active]:bg-cyber-gold data-[state=active]:text-cyber-dark text-gray-300"
                  >
                    ☁️ Cloud ({cloudFormations.length})
                  </TabsTrigger>
                  <TabsTrigger 
                    value="ia"
                    className="data-[state=active]:bg-cyber-gold data-[state=active]:text-cyber-dark text-gray-300"
                  >
                    🤖 IA ({iaFormations.length})
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {formations?.map((formation) => (
                    <FormationCard key={formation.id} formation={formation} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="cyber" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {cyberFormations.map((formation) => (
                    <FormationCard key={formation.id} formation={formation} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="cloud" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {cloudFormations.map((formation) => (
                    <FormationCard key={formation.id} formation={formation} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="ia" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {iaFormations.map((formation) => (
                    <FormationCard key={formation.id} formation={formation} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          )}
        </div>
      </section>

      {/* Inscription section */}
      <section className="py-20 cyber-gradient border-t border-cyber-gold/10">
        <div className="container-custom">
          <SectionTitle
            title="Intéressé par nos formations ?"
            subtitle="Remplissez le formulaire ci-dessous pour recevoir plus d'informations et être contacté par notre équipe pédagogique."
            centered
          />
          <div className="max-w-2xl mx-auto">
            <div className="cyber-card p-8">
              <ContactForm formType="inscription" title="" subtitle="" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Formations;
