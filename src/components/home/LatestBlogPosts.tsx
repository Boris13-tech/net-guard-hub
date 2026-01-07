
import React from "react";
import { ArrowRight } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import BlogCard, { BlogPostProps } from "../blog/BlogCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LatestBlogPosts: React.FC = () => {
  const blogPosts: BlogPostProps[] = [
    {
      id: 1,
      title: "Les tendances de cybersécurité à surveiller en 2025",
      excerpt:
        "Découvrez les principales menaces et technologies qui façonneront le paysage de la cybersécurité cette année.",
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
        "Un guide complet pour établir un centre opérationnel de sécurité adapté aux besoins de votre organisation.",
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
        "Une revue des meilleurs outils utilisés par les professionnels pour les tests d'intrusion.",
      date: "28 mars 2025",
      author: "Thomas Dubois",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      category: "Red Team"
    }
  ];

  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <SectionTitle
            title="Derniers articles"
            subtitle="Restez informé des dernières actualités et bonnes pratiques en matière de cybersécurité."
          />
          <Link to="/blog" className="mt-4 md:mt-0">
            <Button variant="outline" className="border-cyber text-cyber hover:bg-cyber hover:text-white">
              Tous les articles
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlogPosts;
