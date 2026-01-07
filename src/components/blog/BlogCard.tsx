
import React from "react";
import { Calendar, User, Clock } from "lucide-react";
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
    <div className="cyber-card hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <div className="h-48 overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span className="text-sm px-3 py-1 rounded-full font-medium bg-cyber-gold/90 text-cyber">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <Link to={`/blog/${id}`}>
          <h3 className="text-xl font-semibold mb-2 text-cyber hover:text-cyber-light transition-colors">
            {title}
          </h3>
        </Link>
        <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">{excerpt}</p>
        
        <div className="flex items-center justify-between text-gray-500 text-sm">
          <div className="flex items-center">
            <User size={14} className="mr-1" />
            <span>{author}</span>
          </div>
          <div className="flex items-center">
            <Calendar size={14} className="mr-1" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            <span>{readTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
