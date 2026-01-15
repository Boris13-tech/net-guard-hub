import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quels sont les prérequis pour intégrer l'Académie Cyber & Réseaux ?",
    answer: "Nos formations sont accessibles à partir du niveau Bac. Une appétence pour l'informatique et la sécurité est recommandée. Certaines formations avancées nécessitent des bases en réseaux ou programmation."
  },
  {
    question: "Quelle est la durée des formations ?",
    answer: "Nos programmes varient de 6 à 12 mois selon la spécialisation choisie. Toutes nos formations sont intensives et orientées pratique pour vous rendre opérationnel rapidement."
  },
  {
    question: "Les formations sont-elles certifiantes ?",
    answer: "Oui, nos formations préparent aux certifications professionnelles reconnues (CompTIA Security+, CEH, OSCP...) et délivrent une attestation de compétences valorisée par les entreprises."
  },
  {
    question: "Quels sont les débouchés après l'Académie Cyber & Réseaux ?",
    answer: "Analyste SOC, Pentester, Administrateur sécurité, Consultant cybersécurité, Ingénieur réseau... Plus de 90% de nos apprenants trouvent un emploi dans les 3 mois suivant la formation."
  },
  {
    question: "Comment financer ma formation ?",
    answer: "Plusieurs options : CPF, financement personnel avec facilités de paiement, Pôle Emploi, OPCO pour les salariés. Contactez-nous pour étudier votre situation."
  }
];

const FAQSection = () => {
  return (
    <section className="py-24 bg-cyber-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      <div className="container-custom relative z-10 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="section-title text-white">
            Questions <span className="gradient-text-gold">fréquentes</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="cyber-card px-6 border-white/10"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-cyber-gold py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-white/60 pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
