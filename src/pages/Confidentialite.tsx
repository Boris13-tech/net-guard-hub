import React from "react";
import Layout from "@/components/layout/Layout";
import { Shield, Lock, Eye, Trash2, Mail, FileText } from "lucide-react";

const Confidentialite = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-cyber-dark to-background">
        {/* Header */}
        <section className="py-16 bg-cyber-dark">
          <div className="container mx-auto px-4 text-center">
            <Shield className="w-16 h-16 text-cyber mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Politique de Confidentialité
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Protection de vos données personnelles conformément au RGPD
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-12">
              {/* Introduction */}
              <div className="cyber-card p-8">
                <h2 className="text-2xl font-bold text-cyber mb-4 flex items-center gap-3">
                  <FileText className="w-6 h-6" />
                  Introduction
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Le Grand Sup' s'engage à protéger la vie privée de ses utilisateurs. Cette politique de confidentialité 
                  explique comment nous collectons, utilisons, stockons et protégeons vos données personnelles 
                  conformément au Règlement Général sur la Protection des Données (RGPD) - Règlement (UE) 2016/679.
                </p>
              </div>

              {/* Responsable du traitement */}
              <div className="cyber-card p-8">
                <h2 className="text-2xl font-bold text-cyber mb-4 flex items-center gap-3">
                  <Shield className="w-6 h-6" />
                  Responsable du traitement
                </h2>
                <div className="text-gray-600 leading-relaxed space-y-2">
                  <p><strong>Raison sociale :</strong> Le Grand Sup'</p>
                  <p><strong>Adresse :</strong> [Adresse à compléter]</p>
                  <p><strong>Email :</strong> contact@legrandsup.com</p>
                  <p><strong>Téléphone :</strong> [Numéro à compléter]</p>
                </div>
              </div>

              {/* Données collectées */}
              <div className="cyber-card p-8">
                <h2 className="text-2xl font-bold text-cyber mb-4 flex items-center gap-3">
                  <Eye className="w-6 h-6" />
                  Données collectées
                </h2>
                <p className="text-gray-600 mb-4">
                  Nous collectons les données personnelles suivantes :
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li><strong>Données d'identification :</strong> nom, prénom, adresse email</li>
                  <li><strong>Coordonnées :</strong> numéro de téléphone (optionnel)</li>
                  <li><strong>Données de connexion :</strong> adresse IP, données de navigation</li>
                  <li><strong>Données de formation :</strong> inscriptions, préférences de formation</li>
                </ul>
              </div>

              {/* Finalités du traitement */}
              <div className="cyber-card p-8">
                <h2 className="text-2xl font-bold text-cyber mb-4 flex items-center gap-3">
                  <Lock className="w-6 h-6" />
                  Finalités du traitement
                </h2>
                <p className="text-gray-600 mb-4">
                  Vos données sont utilisées pour :
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Répondre à vos demandes de contact et d'information</li>
                  <li>Gérer votre inscription à nos formations</li>
                  <li>Vous envoyer des informations sur nos services (avec votre consentement)</li>
                  <li>Améliorer nos services et notre site web</li>
                  <li>Respecter nos obligations légales</li>
                </ul>
              </div>

              {/* Base légale */}
              <div className="cyber-card p-8">
                <h2 className="text-2xl font-bold text-cyber mb-4">
                  Base légale du traitement
                </h2>
                <p className="text-gray-600 mb-4">
                  Le traitement de vos données repose sur :
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li><strong>Votre consentement</strong> (article 6.1.a du RGPD)</li>
                  <li><strong>L'exécution d'un contrat</strong> (article 6.1.b du RGPD)</li>
                  <li><strong>Nos intérêts légitimes</strong> (article 6.1.f du RGPD)</li>
                  <li><strong>Nos obligations légales</strong> (article 6.1.c du RGPD)</li>
                </ul>
              </div>

              {/* Durée de conservation */}
              <div className="cyber-card p-8">
                <h2 className="text-2xl font-bold text-cyber mb-4">
                  Durée de conservation
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Vos données personnelles sont conservées pendant une durée n'excédant pas celle nécessaire 
                  aux finalités pour lesquelles elles sont collectées :
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4 mt-4">
                  <li><strong>Messages de contact :</strong> 3 ans après le dernier contact</li>
                  <li><strong>Données de formation :</strong> 5 ans après la fin de la formation</li>
                  <li><strong>Données de compte :</strong> durée de vie du compte + 3 ans</li>
                </ul>
              </div>

              {/* Vos droits */}
              <div className="cyber-card p-8">
                <h2 className="text-2xl font-bold text-cyber mb-4 flex items-center gap-3">
                  <Trash2 className="w-6 h-6" />
                  Vos droits
                </h2>
                <p className="text-gray-600 mb-4">
                  Conformément au RGPD, vous disposez des droits suivants :
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li><strong>Droit d'accès :</strong> obtenir une copie de vos données</li>
                  <li><strong>Droit de rectification :</strong> corriger vos données inexactes</li>
                  <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données</li>
                  <li><strong>Droit à la limitation :</strong> limiter le traitement de vos données</li>
                  <li><strong>Droit à la portabilité :</strong> récupérer vos données dans un format structuré</li>
                  <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
                  <li><strong>Droit de retirer votre consentement :</strong> à tout moment</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  Pour exercer ces droits, contactez-nous à : <a href="mailto:contact@legrandsup.com" className="text-cyber hover:underline">contact@legrandsup.com</a>
                </p>
              </div>

              {/* Sécurité */}
              <div className="cyber-card p-8">
                <h2 className="text-2xl font-bold text-cyber mb-4">
                  Sécurité des données
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger 
                  vos données personnelles contre tout accès non autorisé, modification, divulgation ou destruction. 
                  Ces mesures incluent le chiffrement des données, des contrôles d'accès stricts et des audits 
                  de sécurité réguliers.
                </p>
              </div>

              {/* Cookies */}
              <div className="cyber-card p-8">
                <h2 className="text-2xl font-bold text-cyber mb-4">
                  Cookies
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Notre site utilise des cookies pour améliorer votre expérience de navigation. 
                  Vous pouvez configurer votre navigateur pour refuser les cookies ou être alerté 
                  lorsqu'un cookie est envoyé. Cependant, certaines fonctionnalités du site pourraient 
                  ne pas fonctionner correctement sans cookies.
                </p>
              </div>

              {/* Contact et réclamation */}
              <div className="cyber-card p-8">
                <h2 className="text-2xl font-bold text-cyber mb-4 flex items-center gap-3">
                  <Mail className="w-6 h-6" />
                  Contact et réclamation
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Pour toute question relative à cette politique ou pour exercer vos droits, 
                  vous pouvez nous contacter :
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Par email : <a href="mailto:contact@legrandsup.com" className="text-cyber hover:underline">contact@legrandsup.com</a></li>
                  <li>Via notre <a href="/contact" className="text-cyber hover:underline">formulaire de contact</a></li>
                </ul>
                <p className="text-gray-600 mt-4">
                  Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation 
                  auprès de la <strong>CNIL</strong> (Commission Nationale de l'Informatique et des Libertés) :{" "}
                  <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-cyber hover:underline">
                    www.cnil.fr
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Confidentialite;
