-- Create function to update timestamps (if not exists)
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create formations table
CREATE TABLE public.formations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    description TEXT NOT NULL,
    duration TEXT NOT NULL,
    category TEXT NOT NULL CHECK (category IN ('cybersecurite', 'cloud', 'ia')),
    level TEXT NOT NULL CHECK (level IN ('debutant', 'intermediaire', 'avance')),
    price INTEGER,
    image_url TEXT,
    objectives TEXT[],
    prerequisites TEXT[],
    is_featured BOOLEAN DEFAULT false,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.formations ENABLE ROW LEVEL SECURITY;

-- Public can read active formations
CREATE POLICY "Anyone can view active formations"
ON public.formations
FOR SELECT
USING (is_active = true);

-- Admins can manage all formations
CREATE POLICY "Admins can manage formations"
ON public.formations
FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Create trigger for formations updated_at
CREATE TRIGGER update_formations_updated_at
BEFORE UPDATE ON public.formations
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert initial formations data
INSERT INTO public.formations (title, slug, description, duration, category, level, price, is_featured, objectives, prerequisites) VALUES
('Analyste SOC - Blue Team', 'analyste-soc-blue-team', 'Devenez expert en surveillance et détection des menaces. Apprenez à analyser les alertes de sécurité, à utiliser les outils SIEM et à répondre aux incidents.', '6 mois', 'cybersecurite', 'intermediaire', 4500, true, 
 ARRAY['Maîtriser les outils SIEM (Splunk, ELK)', 'Analyser et trier les alertes de sécurité', 'Répondre aux incidents de sécurité', 'Comprendre les tactiques des attaquants'],
 ARRAY['Connaissances de base en réseaux', 'Notions de systèmes Linux/Windows']),
 
('Pentesting Fondamental - Red Team', 'pentesting-red-team', 'Maîtrisez les techniques offensives pour identifier les vulnérabilités. Formation complète sur les méthodologies de test d''intrusion et les outils professionnels.', '8 mois', 'cybersecurite', 'avance', 5500, true,
 ARRAY['Réaliser des tests d''intrusion complets', 'Utiliser Kali Linux et ses outils', 'Rédiger des rapports professionnels', 'Exploiter les vulnérabilités courantes'],
 ARRAY['Expérience en administration système', 'Bases en programmation (Python)']),

('Architecte Réseau Sécurisé', 'architecte-reseau-securise', 'Concevez et sécurisez des infrastructures réseau complexes. Formation avancée sur les architectures Zero Trust et la segmentation réseau.', '10 mois', 'cybersecurite', 'avance', 6000, true,
 ARRAY['Concevoir des architectures Zero Trust', 'Configurer des firewalls et IDS/IPS', 'Implémenter la segmentation réseau', 'Auditer la sécurité des infrastructures'],
 ARRAY['Certifications réseau (CCNA ou équivalent)', 'Expérience en administration réseau']),

('Cloud Security AWS', 'cloud-security-aws', 'Sécurisez vos environnements cloud AWS. Formation complète sur IAM, VPC, et les services de sécurité AWS.', '6 mois', 'cloud', 'intermediaire', 4800, true,
 ARRAY['Maîtriser AWS IAM et les politiques de sécurité', 'Configurer des VPC sécurisés', 'Utiliser AWS Security Hub et GuardDuty', 'Implémenter le chiffrement et la conformité'],
 ARRAY['Connaissances de base AWS', 'Notions de sécurité informatique']),

('DevSecOps Engineer', 'devsecops-engineer', 'Intégrez la sécurité dans le cycle de développement. CI/CD sécurisé, analyse de code et gestion des vulnérabilités.', '8 mois', 'cloud', 'avance', 5200, false,
 ARRAY['Mettre en place des pipelines CI/CD sécurisés', 'Automatiser les tests de sécurité', 'Gérer les secrets et les configurations', 'Implémenter la sécurité as code'],
 ARRAY['Expérience en développement', 'Connaissances Docker/Kubernetes']),

('Machine Learning pour la Cybersécurité', 'ml-cybersecurite', 'Appliquez l''IA à la détection des menaces. Modèles de détection d''anomalies et analyse comportementale.', '6 mois', 'ia', 'avance', 5000, true,
 ARRAY['Créer des modèles de détection d''anomalies', 'Analyser les comportements malveillants', 'Utiliser Python pour la data science', 'Déployer des modèles en production'],
 ARRAY['Bases en Python et statistiques', 'Notions de machine learning']),

('Cybersécurité pour Débutants', 'cybersecurite-debutants', 'Premiers pas dans la cybersécurité. Découvrez les fondamentaux, les menaces courantes et les bonnes pratiques de sécurité.', '3 mois', 'cybersecurite', 'debutant', 2500, false,
 ARRAY['Comprendre les menaces actuelles', 'Appliquer les bonnes pratiques de sécurité', 'Utiliser les outils de base', 'Préparer les certifications d''entrée'],
 ARRAY['Aucun prérequis technique', 'Motivation et curiosité']),

('Azure Security Engineer', 'azure-security-engineer', 'Maîtrisez la sécurité sur Microsoft Azure. Identity, gouvernance, protection des données et conformité.', '6 mois', 'cloud', 'intermediaire', 4800, false,
 ARRAY['Gérer Azure Active Directory', 'Implémenter Azure Security Center', 'Configurer la gouvernance et la conformité', 'Protéger les données et les applications'],
 ARRAY['Connaissances de base Azure', 'Expérience administration Windows']);