import React from "react";
import { Calendar, User, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export interface BlogPostProps {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  image: string;
  category: string;
}

const BlogCard: React.FC<BlogPostProps> = ({
  id,
  title,
  excerpt,
  date,
  author,
  readTime,
  image,
  category,
}) => {
  return (
    <div className="cyber-card group h-full flex flex-col overflow-hidden">
      <div className="h-48 overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/80 to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="text-xs px-3 py-1 rounded-full font-semibold bg-cyber-gold text-cyber-dark">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <Link to={`/blog/${id}`}>
          <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyber-gold transition-colors line-clamp-2">
            {title}
          </h3>
        </Link>
        <p className="text-white/60 mb-6 line-clamp-3 flex-grow text-sm">{excerpt}</p>
        
        <div className="flex items-center justify-between text-white/40 text-xs border-t border-white/10 pt-4">
          <div className="flex items-center gap-1">
            <User size={12} />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar size={12} />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={12} />
            <span>{readTime}</span>
          </div>
        </div>

        <Link 
          to={`/blog/${id}`} 
          className="mt-4 inline-flex items-center text-cyber-gold text-sm font-medium group-hover:gap-2 transition-all"
        >
          Lire l'article
          <ArrowRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
