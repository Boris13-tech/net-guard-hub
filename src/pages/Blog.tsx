
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import BlogCard, { BlogPostProps } from "@/components/blog/BlogCard";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Blog: React.FC = () => {
  // État pour stocker les articles
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

  // État pour la recherche
  const [searchTerm, setSearchTerm] = useState("");
  
  // Filtrer par catégorie
  const tendances = blogPosts.filter(post => post.category === "Tendances");
  const blueTeam = blogPosts.filter(post => post.category === "Blue Team");
  const redTeam = blogPosts.filter(post => post.category === "Red Team");
  const menaces = blogPosts.filter(post => post.category === "Menaces");
  const infrastructure = blogPosts.filter(post => post.category === "Infrastructure" || post.category === "Architecture");
  
  // Filtrer par recherche
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
      <section className="bg-cyber text-white py-20">
        <div className="container-custom">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-6">Blog & Actualités Cyber</h1>
            <p className="text-xl mb-8 opacity-90">
              Restez informé des dernières tendances, menaces et bonnes pratiques 
              en matière de cybersécurité grâce à nos articles et analyses.
            </p>
            
            {/* Recherche */}
            <div className="relative max-w-md">
              <input
                type="text"
                placeholder="Rechercher un article..."
                className="w-full pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyber-gold text-gray-800"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Articles avec filtres */}
      <section className="py-20">
        <div className="container-custom">
          {searchTerm ? (
            <>
              <SectionTitle
                title={`Résultats de recherche pour "${searchTerm}"`}
                subtitle={`${filteredPosts.length} article(s) trouvé(s)`}
                centered
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <BlogCard key={post.id} {...post} />
                ))}
              </div>
              
              {filteredPosts.length === 0 && (
                <div className="text-center py-10">
                  <p className="text-gray-500 mb-4">Aucun article ne correspond à votre recherche.</p>
                  <Button variant="outline" onClick={() => setSearchTerm("")}>
                    Voir tous les articles
                  </Button>
                </div>
              )}
            </>
          ) : (
            <>
              <SectionTitle
                title="Nos derniers articles"
                subtitle="Découvrez nos analyses et conseils pour renforcer votre posture de sécurité."
                centered
              />

              <Tabs defaultValue="all" className="w-full mt-8">
                <div className="flex justify-center mb-8 overflow-x-auto pb-2">
                  <TabsList>
                    <TabsTrigger value="all">Tous</TabsTrigger>
                    <TabsTrigger value="tendances">Tendances</TabsTrigger>
                    <TabsTrigger value="blue-team">Blue Team</TabsTrigger>
                    <TabsTrigger value="red-team">Red Team</TabsTrigger>
                    <TabsTrigger value="menaces">Menaces</TabsTrigger>
                    <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
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
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-cyber mb-4">Restez informé</h2>
            <p className="text-gray-600 mb-6">
              Abonnez-vous à notre newsletter pour recevoir nos derniers articles et actualités en cybersécurité.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyber"
                required
              />
              <Button className="cyber-button">
                S'abonner
              </Button>
            </form>
            
            <p className="text-xs text-gray-500 mt-3">
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
