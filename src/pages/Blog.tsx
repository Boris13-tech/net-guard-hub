import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import BlogCard, { BlogPostProps } from "@/components/blog/BlogCard";
import { Button } from "@/components/ui/button";
import { Search, Mail } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Blog: React.FC = () => {
  const [blogPosts] = useState<BlogPostProps[]>([
    {
      id: 1,
      title: "Les tendances de cybersécurité à surveiller en 2025",
      excerpt:
        "Découvrez les principales menaces et technologies qui façonneront le paysage de la cybersécurité cette année. Analyse des tendances émergentes et recommandations.",
      date: "12 avril 2025",
      author: "Boris Legrand",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      category: "Tendances"
    },
    {
      id: 2,
      title: "Comment mettre en place un SOC efficace ?",
      excerpt:
        "Un guide complet pour établir un centre opérationnel de sécurité adapté aux besoins de votre organisation. Méthodologie, outils et bonnes pratiques.",
      date: "5 avril 2025",
      author: "Marie Laurent",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      category: "Blue Team"
    },
    {
      id: 3,
      title: "Les outils indispensables pour le pentesting en 2025",
      excerpt:
        "Une revue des meilleurs outils utilisés par les professionnels pour les tests d'intrusion. Comparatif, cas d'usage et installation.",
      date: "28 mars 2025",
      author: "Thomas Dubois",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      category: "Red Team"
    },
    {
      id: 4,
      title: "Comprendre les attaques par ransomware",
      excerpt:
        "Anatomie d'une attaque par ransomware, vecteurs d'infection courants et stratégies de défense pour protéger votre organisation.",
      date: "20 mars 2025",
      author: "Sophie Martin",
      readTime: "7 min",
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      category: "Menaces"
    },
    {
      id: 5,
      title: "L'importance de la formation continue en cybersécurité",
      excerpt:
        "Pourquoi la formation continue est essentielle dans un domaine qui évolue aussi rapidement que la cybersécurité. Conseils pour rester à jour.",
      date: "15 mars 2025",
      author: "Boris Legrand",
      readTime: "4 min",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      category: "Carrière"
    },
    {
      id: 6,
      title: "Sécuriser son infrastructure cloud",
      excerpt:
        "Les bonnes pratiques pour sécuriser vos environnements cloud (AWS, Azure, GCP). Configuration, contrôle d'accès et surveillance.",
      date: "5 mars 2025",
      author: "Jean Dupont",
      readTime: "9 min",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      category: "Infrastructure"
    },
    {
      id: 7,
      title: "OSINT : techniques et limites légales",
      excerpt:
        "Guide pratique des techniques de renseignement en sources ouvertes et cadre légal à respecter lors de vos investigations.",
      date: "25 février 2025",
      author: "Marie Laurent",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1576444356170-66073046b1bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      category: "Red Team"
    },
    {
      id: 8,
      title: "Zero Trust : au-delà du buzzword",
      excerpt:
        "Comprendre l'approche Zero Trust, ses principes fondamentaux et comment la mettre en œuvre concrètement dans votre organisation.",
      date: "18 février 2025",
      author: "Thomas Dubois",
      readTime: "7 min",
      image: "https://images.unsplash.com/photo-1496368077930-c1e31b4e5b44?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      category: "Architecture"
    },
    {
      id: 9,
      title: "Le facteur humain en cybersécurité",
      excerpt:
        "Comment l'ingénierie sociale exploite les failles humaines et les stratégies efficaces pour sensibiliser vos équipes aux risques.",
      date: "10 février 2025",
      author: "Sophie Martin",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      category: "Sensibilisation"
    }
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  
  const tendances = blogPosts.filter(post => post.category === "Tendances");
  const blueTeam = blogPosts.filter(post => post.category === "Blue Team");
  const redTeam = blogPosts.filter(post => post.category === "Red Team");
  const menaces = blogPosts.filter(post => post.category === "Menaces");
  const infrastructure = blogPosts.filter(post => post.category === "Infrastructure" || post.category === "Architecture");
  
  const filteredPosts = searchTerm 
    ? blogPosts.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : blogPosts;

  return (
    <Layout>
      {/* Hero section */}
      <section className="relative cyber-gradient text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-cyber-blue/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 -left-32 w-96 h-96 bg-cyber-gold/20 rounded-full blur-[120px]" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
              <span className="w-2 h-2 bg-cyber-green rounded-full animate-pulse" />
              <span className="text-sm font-medium">Actualités & Ressources</span>
            </div>
            
            <h1 className="section-title text-white mb-6">
              Blog <span className="gradient-text-gold">Cybersécurité</span>
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Restez informé des dernières tendances, menaces et bonnes pratiques 
              en matière de cybersécurité grâce à nos articles et analyses.
            </p>
            
            {/* Recherche */}
            <div className="relative max-w-md">
              <input
                type="text"
                placeholder="Rechercher un article..."
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-cyber-gold transition-colors"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/40" />
            </div>
          </div>
        </div>
      </section>

      {/* Articles avec filtres */}
      <section className="py-20 bg-cyber-dark">
        <div className="container-custom">
          {searchTerm ? (
            <>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-2">
                  Résultats pour "<span className="text-cyber-gold">{searchTerm}</span>"
                </h2>
                <p className="text-white/60">{filteredPosts.length} article(s) trouvé(s)</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <BlogCard key={post.id} {...post} />
                ))}
              </div>
              
              {filteredPosts.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-white/50 mb-6">Aucun article ne correspond à votre recherche.</p>
                  <Button 
                    className="cyber-button-outline"
                    onClick={() => setSearchTerm("")}
                  >
                    Voir tous les articles
                  </Button>
                </div>
              )}
            </>
          ) : (
            <>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-2">Nos derniers articles</h2>
                <p className="text-white/60">Découvrez nos analyses et conseils pour renforcer votre posture de sécurité.</p>
              </div>

              <Tabs defaultValue="all" className="w-full">
                <div className="flex justify-center mb-10 overflow-x-auto pb-2">
                  <TabsList className="bg-white/5 border border-white/10 p-1">
                    <TabsTrigger value="all" className="data-[state=active]:bg-cyber-gold data-[state=active]:text-cyber-dark text-white/70">Tous</TabsTrigger>
                    <TabsTrigger value="tendances" className="data-[state=active]:bg-cyber-gold data-[state=active]:text-cyber-dark text-white/70">Tendances</TabsTrigger>
                    <TabsTrigger value="blue-team" className="data-[state=active]:bg-cyber-gold data-[state=active]:text-cyber-dark text-white/70">Blue Team</TabsTrigger>
                    <TabsTrigger value="red-team" className="data-[state=active]:bg-cyber-gold data-[state=active]:text-cyber-dark text-white/70">Red Team</TabsTrigger>
                    <TabsTrigger value="menaces" className="data-[state=active]:bg-cyber-gold data-[state=active]:text-cyber-dark text-white/70">Menaces</TabsTrigger>
                    <TabsTrigger value="infrastructure" className="data-[state=active]:bg-cyber-gold data-[state=active]:text-cyber-dark text-white/70">Infrastructure</TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="all" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                      <BlogCard key={post.id} {...post} />
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="tendances" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tendances.map((post) => (
                      <BlogCard key={post.id} {...post} />
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="blue-team" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blueTeam.map((post) => (
                      <BlogCard key={post.id} {...post} />
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="red-team" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {redTeam.map((post) => (
                      <BlogCard key={post.id} {...post} />
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="menaces" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {menaces.map((post) => (
                      <BlogCard key={post.id} {...post} />
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="infrastructure" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {infrastructure.map((post) => (
                      <BlogCard key={post.id} {...post} />
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 cyber-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyber-gold/10 rounded-full blur-[150px]" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-xl mx-auto text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-cyber-gold/20 flex items-center justify-center">
              <Mail className="w-8 h-8 text-cyber-gold" />
            </div>
            
            <h2 className="text-3xl font-bold text-white mb-4">Restez informé</h2>
            <p className="text-white/60 mb-8">
              Abonnez-vous à notre newsletter pour recevoir nos derniers articles et actualités en cybersécurité.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-grow px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-cyber-gold transition-colors"
                required
              />
              <Button className="cyber-button-gold px-8">
                S'abonner
              </Button>
            </form>
            
            <p className="text-xs text-white/40 mt-4">
              En vous inscrivant, vous acceptez de recevoir des emails de notre part. 
              Vous pourrez vous désabonner à tout moment.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
