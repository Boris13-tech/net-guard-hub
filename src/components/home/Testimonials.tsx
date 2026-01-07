
import React from "react";
import { Quote } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  company?: string;
  avatar?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  name,
  role,
  company,
  avatar,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 relative">
      <div className="absolute -top-4 left-6 w-8 h-8 bg-cyber rounded-full flex items-center justify-center">
        <Quote className="w-4 h-4 text-white" />
      </div>
      <div className="pt-4">
        <p className="text-gray-600 italic mb-6">"{quote}"</p>
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
            <img
              src={avatar || "https://via.placeholder.com/100"}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-semibold text-cyber">{name}</h4>
            <p className="text-sm text-gray-500">
              {role}{company ? `, ${company}` : ""}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials: TestimonialProps[] = [
    {
      quote:
        "La formation Blue Team a complètement transformé ma carrière. Les compétences pratiques acquises m'ont permis de décrocher un poste dans la cybersécurité.",
      name: "Thomas Dubois",
      role: "Analyste SOC",
      company: "SecureNet",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      quote:
        "Les instructeurs sont de vrais experts qui partagent des connaissances pratiques et actuelles. L'approche hands-on est exactement ce dont j'avais besoin.",
      name: "Sarah Legrand",
      role: "Pentester Junior",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      quote:
        "J'ai suivi plusieurs formations en ligne, mais l'Académie Cyber & Réseaux offre un accompagnement personnalisé qui fait toute la différence.",
      name: "Maxime Garcia",
      role: "Ingénieur Réseau",
      company: "DataProtect",
      avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <SectionTitle
          title="Ce que disent nos étudiants"
          subtitle="Découvrez les témoignages de ceux qui ont transformé leur carrière grâce à nos formations."
          centered={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
