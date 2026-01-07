
import React from "react";
import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Target, Users, Book, Trophy, Shield } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";

const APropos: React.FC = () => {
  return (
    <Layout>
      {/* Hero section */}
      <section className="bg-cyber text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">À propos de l'Académie</h1>
            <p className="text-xl mb-8 opacity-90">
              L'Académie Cyber & Réseaux est née d'une vision : rendre la cybersécurité accessible 
              à tous et former la prochaine génération de professionnels qualifiés.
            </p>
          </div>
        </div>
      </section>

      {/* Notre vision */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle
                title="Notre vision"
                subtitle="Former des experts en cybersécurité capables de relever les défis du monde numérique de demain."
              />
              
              <p className="text-gray-600 mb-6">
                Dans un monde où les menaces numériques évoluent constamment, les organisations ont un besoin 
                crucial d'experts en cybersécurité qualifiés. Pourtant, l'accès à des formations de qualité 
                reste limité et souvent déconnecté des besoins réels du marché.
              </p>
              
              <p className="text-gray-600 mb-8">
                L'Académie Cyber & Réseaux a été créée pour combler ce fossé, en proposant des formations 
                pratiques, dispensées par des professionnels du secteur, et accessibles à tous, quels que 
                soient leur niveau initial et leur parcours.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/formations">
                  <Button className="cyber-button">
                    Nos formations
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="border-cyber text-cyber hover:bg-cyber hover:text-white">
                    Nous contacter
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
                  alt="Vision de l'académie" 
                  className="w-full h-auto"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-cyber-gold/20 rounded-lg -z-10"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cyber-blue/20 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Notre fondateur */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="/lovable-uploads/17d754fc-4e12-4871-a75a-f73afecae8a5.png" 
                    alt="Ohandja Edimo Boris Legrand" 
                    className="w-full h-auto"
                  />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-cyber/10 rounded-lg -z-10"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-cyber-blue/10 rounded-lg -z-10"></div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <SectionTitle
                title="Notre fondateur"
                subtitle="Ohandja Edimo Boris Legrand, expert en cybersécurité et passionné de transmission du savoir."
              />
              
              <p className="text-gray-600 mb-6">
                Après plusieurs années d'expérience en tant que consultant en cybersécurité auprès 
                de grandes entreprises et d'organisations gouvernementales, Boris a constaté un manque 
                de formations adaptées aux besoins réels du marché.
              </p>
              
              <p className="text-gray-600 mb-6">
                Fort de son expertise en Red Team et Blue Team, et animé par la volonté de transmettre 
                ses connaissances, il a fondé l'Académie Cyber & Réseaux avec un objectif clair : 
                former les talents de demain en conjuguant théorie et pratique intensive.
              </p>
              
              <p className="text-gray-600 mb-8">
                "Notre mission est de former des professionnels opérationnels dès la fin de leur parcours, 
                capables de s'adapter rapidement aux évolutions constantes du domaine."
              </p>
              
              <div className="flex space-x-4">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-cyber hover:text-cyber-light transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.064-.926-2.064-2.065 0-1.138.92-2.063 2.064-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-cyber hover:text-cyber-light transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                  </svg>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-cyber hover:text-cyber-light transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos valeurs */}
      <section className="py-20">
        <div className="container-custom">
          <SectionTitle
            title="Nos valeurs"
            subtitle="Les principes qui guident notre approche pédagogique et notre engagement envers nos étudiants."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="cyber-card p-8">
              <div className="w-14 h-14 bg-cyber/5 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-cyber-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-cyber">Accessibilité</h3>
              <p className="text-gray-600">
                Nous rendons la cybersécurité accessible à tous, quel que soit le niveau initial, 
                grâce à des parcours adaptés et un accompagnement personnalisé.
              </p>
            </div>
            
            <div className="cyber-card p-8">
              <div className="w-14 h-14 bg-cyber/5 rounded-lg flex items-center justify-center mb-6">
                <Book className="w-8 h-8 text-cyber-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-cyber">Pédagogie active</h3>
              <p className="text-gray-600">
                Nous privilégions l'apprentissage par la pratique, avec des exercices concrets, 
                des études de cas réels et des environnements de laboratoire.
              </p>
            </div>
            
            <div className="cyber-card p-8">
              <div className="w-14 h-14 bg-cyber/5 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-cyber-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-cyber">Communauté</h3>
              <p className="text-gray-600">
                Nous créons un environnement d'entraide et de partage de connaissances entre 
                étudiants et professionnels, favorisant le networking et la collaboration.
              </p>
            </div>
            
            <div className="cyber-card p-8">
              <div className="w-14 h-14 bg-cyber/5 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-cyber-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-cyber">Éthique</h3>
              <p className="text-gray-600">
                Nous insistons sur l'importance de l'éthique dans la cybersécurité, formant des 
                professionnels responsables qui respectent les règles et la confidentialité.
              </p>
            </div>
            
            <div className="cyber-card p-8">
              <div className="w-14 h-14 bg-cyber/5 rounded-lg flex items-center justify-center mb-6">
                <Trophy className="w-8 h-8 text-cyber-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-cyber">Excellence</h3>
              <p className="text-gray-600">
                Nous visons l'excellence dans nos formations, avec des contenus régulièrement 
                mis à jour et des formateurs experts dans leur domaine.
              </p>
            </div>
            
            <div className="cyber-card p-8">
              <div className="w-14 h-14 bg-cyber/5 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-cyber-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-cyber">Insertion professionnelle</h3>
              <p className="text-gray-600">
                Nous accompagnons nos étudiants dans leur parcours professionnel, avec un réseau 
                d'entreprises partenaires et un suivi post-formation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parcours et objectifs */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle
                title="Notre approche pédagogique"
                subtitle="Un parcours complet orienté vers l'acquisition de compétences pratiques et l'insertion professionnelle."
              />
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-cyber/10 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-cyber font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-cyber">Évaluation initiale</h4>
                    <p className="text-gray-600">Détermination du niveau et des besoins spécifiques de chaque étudiant.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-cyber/10 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-cyber font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-cyber">Fondamentaux et théorie</h4>
                    <p className="text-gray-600">Acquisition des connaissances de base et du cadre conceptuel.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-cyber/10 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-cyber font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-cyber">Pratique intensive</h4>
                    <p className="text-gray-600">Travaux pratiques, exercices concrets et mises en situation réelles.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-cyber/10 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-cyber font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-cyber">Projets et certifications</h4>
                    <p className="text-gray-600">Réalisation de projets concrets et préparation aux certifications reconnues.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-cyber/10 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-cyber font-bold">5</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-cyber">Accompagnement professionnel</h4>
                    <p className="text-gray-600">Mentorat, coaching et mise en relation avec les entreprises partenaires.</p>
                  </div>
                </li>
              </ul>
              
              <Link to="/formations">
                <Button className="cyber-button">
                  Découvrir nos formations
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
                  alt="Approche pédagogique" 
                  className="w-full h-auto"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-cyber-gold/20 rounded-lg -z-10"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cyber-blue/20 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-20">
        <div className="container-custom">
          <SectionTitle
            title="Contactez-nous"
            subtitle="Vous avez des questions sur nos formations ou vous souhaitez en savoir plus sur l'Académie ? N'hésitez pas à nous contacter."
            centered
          />
          
          <ContactForm />
        </div>
      </section>
    </Layout>
  );
};

export default APropos;
