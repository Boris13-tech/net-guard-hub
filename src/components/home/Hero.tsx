
import React from "react";
import { ShieldCheck, Lock, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-cyber to-cyber-darkblue text-white py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -right-10 -top-10 w-64 h-64 bg-cyber-blue rounded-full blur-3xl"></div>
        <div className="absolute right-1/4 bottom-0 w-96 h-96 bg-cyber-blue rounded-full blur-3xl"></div>
        <div className="absolute left-1/4 top-1/3 w-80 h-80 bg-cyber-gold rounded-full blur-3xl"></div>
      </div>
      
      {/* Binary background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
        }}></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="block">Formez-vous aux métiers</span>
              <span className="text-cyber-gold">de la cybersécurité</span>
              <span className="block">dès aujourd'hui</span>
            </h1>
            
            <p className="text-xl opacity-90 mb-8 max-w-xl">
              Développez les compétences recherchées par les entreprises et rejoignez un secteur en pleine expansion grâce à nos formations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/formations">
                <Button size="lg" className="cyber-button-gold">
                  Découvrir nos formations
                </Button>
              </Link>
              <Link to="/a-propos">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  En savoir plus
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 flex flex-col sm:flex-row gap-6">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-3">
                  <ShieldCheck className="w-5 h-5 text-cyber-gold" />
                </div>
                <span>Formation Blue Team</span>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-3">
                  <Lock className="w-5 h-5 text-cyber-gold" />
                </div>
                <span>Ateliers Red Team</span>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-3">
                  <Search className="w-5 h-5 text-cyber-gold" />
                </div>
                <span>Audit & SOC</span>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="w-full max-w-md relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="/lovable-uploads/17d754fc-4e12-4871-a75a-f73afecae8a5.png" 
                  alt="Académie Cyber & Réseaux" 
                  className="w-full h-auto"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-cyber-gold/20 rounded-lg -z-10"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cyber-blue/20 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
