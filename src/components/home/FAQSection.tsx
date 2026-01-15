import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quels sont les prérequis pour intégrer Cybersup ?",
    answer: "Pour le Bachelor, un Bac+2 en informatique ou équivalent. Pour les Mastères, un Bac+3 minimum. Une forte motivation pour la cybersécurité est essentielle."
  },
  {
    question: "Les formations sont-elles disponibles en alternance ?",
    answer: "Oui, toutes nos formations sont proposées en alternance. Nous accompagnons également nos étudiants dans leur recherche d'entreprise."
  },
  {
    question: "Quels sont les débouchés après Cybersup ?",
    answer: "Analyste SOC, Pentester, Consultant en sécurité, DPO, Architecte sécurité, Chef de projet IA... Plus de 30 métiers accessibles avec des salaires attractifs."
  },
  {
    question: "Les titres sont-ils reconnus par l'État ?",
    answer: "Oui, nos titres sont certifiés RNCP niveau 6 (Bachelor) et niveau 7 (Mastères), reconnus par l'État et les entreprises."
  },
  {
    question: "Comment se déroule le processus d'admission ?",
    answer: "Candidature en ligne, tests techniques et entretien de motivation. Nous évaluons votre potentiel et votre projet professionnel."
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
