
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MessageSquare, Send, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface ContactFormProps {
  formType?: "contact" | "inscription";
  title?: string;
  subtitle?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  formType = "contact",
  title = "Contactez-nous",
  subtitle = "Nous sommes là pour répondre à vos questions et vous accompagner dans votre parcours.",
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;
    const formation = formData.get("formation") as string;
    
    const subject = formType === "inscription" 
      ? `Demande d'inscription - ${formation || 'Formation'}` 
      : "Demande de contact";

    try {
      const { error } = await supabase
        .from("contact_messages")
        .insert({
          name: `${firstName} ${lastName}`.trim(),
          email,
          phone: phone || null,
          subject,
          message,
        });

      if (error) throw error;

      toast({
        title: "Message envoyé",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });
      form.reset();
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      {title && subtitle && (
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-cyber mb-3">{title}</h2>
          <p className="text-gray-600">{subtitle}</p>
        </div>
      )}
      
      <div className="cyber-card">
        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                Prénom
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-cyber focus:border-cyber"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                Nom
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-cyber focus:border-cyber"
              />
            </div>
          </div>
          
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:ring-cyber focus:border-cyber"
              />
            </div>
          </div>
          
          <div className="mb-6">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Téléphone
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:ring-cyber focus:border-cyber"
              />
            </div>
          </div>
          
          {formType === "inscription" && (
            <div className="mb-6">
              <label htmlFor="formation" className="block text-sm font-medium text-gray-700 mb-1">
                Formation souhaitée
              </label>
              <select
                id="formation"
                name="formation"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-cyber focus:border-cyber"
              >
                <option value="">Sélectionnez une formation</option>
                <option value="blue-team">Analyste SOC - Blue Team</option>
                <option value="red-team">Pentesting Fondamental - Red Team</option>
                <option value="reseau">Architecte Réseau Sécurisé</option>
                <option value="debutant">Cybersécurité pour débutants</option>
                <option value="autre">Autre</option>
              </select>
            </div>
          )}
          
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:ring-cyber focus:border-cyber"
                placeholder={formType === "inscription" ? "Parlez-nous de vos objectifs professionnels et de votre parcours..." : "Comment pouvons-nous vous aider ?"}
              ></textarea>
            </div>
          </div>
          
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                required
                className="w-4 h-4 text-cyber focus:ring-cyber rounded"
              />
              <span className="ml-2 text-sm text-gray-600">
                J'accepte que mes données soient traitées conformément à la{" "}
                <a href="/confidentialite" className="text-cyber hover:underline">
                  politique de confidentialité
                </a>
                .
              </span>
            </label>
          </div>
          
          <Button type="submit" className="cyber-button w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Envoi en cours...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                {formType === "inscription" ? "Demander des informations" : "Envoyer le message"}
              </>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
