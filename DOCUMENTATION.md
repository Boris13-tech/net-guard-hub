# 📚 Documentation Technique Complète
# Académie Cyber & Réseaux

---

## 📖 Table des Matières

1. [Présentation du Projet](#-présentation-du-projet)
2. [Technologies Utilisées](#-technologies-utilisées)
3. [Architecture du Projet](#-architecture-du-projet)
4. [Système de Design](#-système-de-design)
5. [Structure des Pages](#-structure-des-pages)
6. [Composants Détaillés](#-composants-détaillés)
7. [Gestion des Styles](#-gestion-des-styles)
8. [Responsive Design](#-responsive-design)
9. [Comment Modifier le Site](#-comment-modifier-le-site)
10. [Scripts et Commandes](#-scripts-et-commandes)
11. [Évolutions Futures](#-évolutions-futures)

---

## 📋 Présentation du Projet

### Qu'est-ce que ce projet ?

**Académie Cyber & Réseaux** est un site web vitrine pour un organisme de formation en cybersécurité. 

**Objectifs du site :**
- Présenter les formations disponibles aux visiteurs
- Afficher les événements à venir (conférences, ateliers, webinaires)
- Publier des articles de blog sur la cybersécurité
- Permettre aux visiteurs de contacter l'équipe
- Convertir les visiteurs en prospects/clients

### Type de site

C'est un site **"Single Page Application" (SPA)**, ce qui signifie :
- Le site se charge une seule fois au départ
- Ensuite, la navigation entre les pages est instantanée (pas de rechargement)
- L'expérience est plus fluide pour l'utilisateur

### Public cible

- Professionnels IT souhaitant se former en cybersécurité
- Personnes en reconversion professionnelle
- Entreprises cherchant des formations pour leurs équipes
- Étudiants intéressés par la sécurité informatique

---

## 🛠️ Technologies Utilisées

### Vue d'ensemble

J'ai sélectionné un stack moderne et performant. Voici chaque technologie expliquée simplement :

### React (v18.3.1)

**Qu'est-ce que c'est ?**
React est une bibliothèque JavaScript créée par Facebook pour construire des interfaces utilisateur.

**Pourquoi je l'ai choisi ?**
- Permet de créer des "composants" réutilisables (comme des briques LEGO)
- Très populaire = beaucoup de ressources et d'aide disponibles
- Performance excellente grâce au "Virtual DOM"

**Comment ça marche ?**
Au lieu d'écrire du HTML classique, on écrit du JSX (un mélange de JavaScript et HTML) :

```jsx
// Exemple simple de composant React
function Bouton() {
  return <button>Cliquez-moi</button>;
}
```

---

### TypeScript

**Qu'est-ce que c'est ?**
TypeScript est JavaScript avec des "types". C'est comme ajouter des étiquettes à vos variables pour dire ce qu'elles contiennent.

**Pourquoi je l'ai choisi ?**
- Détecte les erreurs AVANT que le code ne s'exécute
- Autocomplétion intelligente dans l'éditeur
- Code plus facile à comprendre et maintenir

**Exemple concret :**

```typescript
// Sans TypeScript (JavaScript)
function saluer(nom) {
  return "Bonjour " + nom;
}
saluer(123); // Pas d'erreur, mais ça ne fait pas de sens

// Avec TypeScript
function saluer(nom: string): string {
  return "Bonjour " + nom;
}
saluer(123); // ERREUR ! TypeScript dit : "123 n'est pas un string"
```

---

### Vite

**Qu'est-ce que c'est ?**
Vite est un outil de développement qui :
- Lance le serveur de développement
- Compile le code pour la production
- Recharge automatiquement la page quand on modifie le code

**Pourquoi je l'ai choisi ?**
- Extrêmement rapide (le serveur démarre en moins de 1 seconde)
- Hot Module Replacement (HMR) : les modifications apparaissent instantanément
- Configuration minimale requise

---

### Tailwind CSS

**Qu'est-ce que c'est ?**
Tailwind est un framework CSS "utility-first". Au lieu d'écrire du CSS dans des fichiers séparés, on utilise des classes directement dans le HTML.

**Pourquoi je l'ai choisi ?**
- Développement très rapide
- Pas besoin d'inventer des noms de classes
- Résultat cohérent et maintenable
- Fichier CSS final optimisé (seules les classes utilisées sont incluses)

**Exemple concret :**

```html
<!-- CSS traditionnel -->
<div class="ma-carte">Contenu</div>
<style>
.ma-carte {
  padding: 16px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
</style>

<!-- Avec Tailwind -->
<div class="p-4 bg-white rounded-lg shadow">Contenu</div>
```

**Classes Tailwind les plus utilisées dans ce projet :**

| Classe | Signification |
|--------|---------------|
| `p-4` | padding de 1rem (16px) |
| `m-4` | margin de 1rem |
| `py-4` | padding vertical (haut + bas) |
| `px-4` | padding horizontal (gauche + droite) |
| `bg-white` | background blanc |
| `text-lg` | texte large |
| `font-bold` | texte en gras |
| `flex` | display: flex |
| `grid` | display: grid |
| `rounded-lg` | coins arrondis |
| `shadow` | ombre portée |
| `hover:bg-gray-100` | background gris au survol |
| `md:flex` | flex seulement à partir de 768px |

---

### React Router DOM (v6.26.2)

**Qu'est-ce que c'est ?**
C'est la bibliothèque qui gère la navigation entre les pages.

**Pourquoi je l'ai choisi ?**
- Standard pour les applications React
- Navigation sans rechargement de page
- Gestion de l'historique du navigateur

**Comment ça marche ?**

```jsx
// Définition des routes (dans App.tsx)
<Routes>
  <Route path="/" element={<Index />} />
  <Route path="/formations" element={<Formations />} />
  <Route path="/contact" element={<Contact />} />
</Routes>

// Créer un lien (dans n'importe quel composant)
<Link to="/formations">Voir les formations</Link>
```

---

### shadcn/ui

**Qu'est-ce que c'est ?**
Une collection de composants UI prêts à l'emploi, beaux et accessibles.

**Pourquoi je l'ai choisi ?**
- Composants professionnels (boutons, formulaires, modales, etc.)
- Entièrement personnalisables
- Accessibles (utilisables au clavier, compatibles lecteurs d'écran)
- Pas une dépendance : le code est copié dans notre projet

**Composants shadcn utilisés :**
- `Button` : boutons stylisés
- `Card` : cartes pour afficher du contenu
- `Tabs` : onglets de navigation
- `Toast` : notifications
- `Dialog` : fenêtres modales
- Et beaucoup d'autres...

---

### TanStack Query (v5.56.2)

**Qu'est-ce que c'est ?**
Une bibliothèque pour gérer les requêtes de données (appels API).

**Pourquoi je l'ai choisi ?**
- Cache automatique des données
- Gestion du loading et des erreurs
- Rafraîchissement intelligent des données
- Préparé pour quand on ajoutera un backend

**Note :** Actuellement, les données sont en dur dans le code. TanStack Query sera utilisé quand on connectera une vraie base de données.

---

### Lucide React (v0.462.0)

**Qu'est-ce que c'est ?**
Une bibliothèque d'icônes SVG pour React.

**Pourquoi je l'ai choisi ?**
- +1000 icônes disponibles
- Légères et optimisées
- Faciles à personnaliser (taille, couleur)
- Style cohérent

**Comment les utiliser ?**

```jsx
import { Shield, Mail, Phone } from "lucide-react";

// Utilisation
<Shield className="w-6 h-6 text-blue-500" />
<Mail size={24} color="red" />
```

---

## 📁 Architecture du Projet

### Vue d'ensemble des dossiers

```
projet/
├── public/                    # Fichiers statiques (accessibles directement)
│   ├── favicon.ico           # Icône dans l'onglet du navigateur
│   ├── robots.txt            # Instructions pour les moteurs de recherche
│   └── lovable-uploads/      # Images uploadées
│
├── src/                       # Code source de l'application
│   ├── components/           # Tous les composants React
│   ├── pages/                # Les pages du site
│   ├── hooks/                # Hooks React personnalisés
│   ├── lib/                  # Fonctions utilitaires
│   ├── App.tsx               # Composant racine + routes
│   ├── main.tsx              # Point d'entrée de l'application
│   └── index.css             # Styles globaux
│
├── index.html                 # Page HTML de base
├── tailwind.config.ts         # Configuration Tailwind
├── vite.config.ts             # Configuration Vite
└── package.json               # Dépendances et scripts
```

### Détail du dossier `src/components/`

C'est ici que vivent tous les composants React, organisés par fonctionnalité :

```
src/components/
│
├── blog/
│   └── BlogCard.tsx              # Carte pour afficher un article de blog
│                                  # Utilisé sur la page Blog et l'accueil
│
├── contact/
│   └── ContactForm.tsx           # Formulaire de contact réutilisable
│                                  # Peut fonctionner en mode "contact" ou "inscription"
│
├── evenements/
│   └── EventCard.tsx             # Carte pour afficher un événement
│                                  # Affiche date, titre, description, lieu
│
├── formations/
│   └── FormationCard.tsx         # Carte pour afficher une formation
│                                  # Inclut niveau, durée, image, boutons
│
├── home/
│   ├── Hero.tsx                  # Grande bannière en haut de l'accueil
│   │                              # Contient le titre principal et les CTA
│   │
│   ├── AboutSection.tsx          # Section "À propos" sur l'accueil
│   │                              # Présente brièvement l'académie
│   │
│   ├── FeaturedFormations.tsx    # Grille des formations en vedette
│   │                              # Affiche 3 formations sélectionnées
│   │
│   ├── Testimonials.tsx          # Carousel de témoignages clients
│   │                              # Affiche les avis des anciens élèves
│   │
│   ├── UpcomingEvents.tsx        # Liste des prochains événements
│   │                              # Affiche 3 événements à venir
│   │
│   ├── LatestBlogPosts.tsx       # Derniers articles du blog
│   │                              # Affiche 3 articles récents
│   │
│   └── CTASection.tsx            # Section d'appel à l'action
│                                  # Encourage à s'inscrire/contacter
│
├── layout/
│   ├── Layout.tsx                # Wrapper global de toutes les pages
│   │                              # Inclut Navbar + contenu + Footer
│   │
│   ├── Navbar.tsx                # Barre de navigation en haut
│   │                              # Menu desktop + menu hamburger mobile
│   │
│   └── Footer.tsx                # Pied de page
│                                  # Liens, contact, newsletter, réseaux sociaux
│
└── ui/
    ├── button.tsx                # Composant Button (shadcn)
    ├── card.tsx                  # Composant Card (shadcn)
    ├── tabs.tsx                  # Composant Tabs (shadcn)
    ├── SectionTitle.tsx          # Titre de section personnalisé
    ├── RevolutPaymentButton.tsx  # Bouton de paiement Revolut
    └── [... autres composants shadcn]
```

### Détail du dossier `src/pages/`

Chaque fichier ici correspond à une page du site :

```
src/pages/
│
├── Index.tsx          # Page d'accueil (route: /)
│                       # Assemble : Hero, About, Formations, Testimonials, etc.
│
├── Formations.tsx     # Catalogue des formations (route: /formations)
│                       # Liste filtrable par niveau avec onglets
│
├── Evenements.tsx     # Liste des événements (route: /evenements)
│                       # Affiche tous les événements à venir
│
├── Blog.tsx           # Articles du blog (route: /blog)
│                       # Liste de tous les articles
│
├── APropos.tsx        # À propos (route: /a-propos)
│                       # Présentation détaillée de l'académie
│
├── Contact.tsx        # Page contact (route: /contact)
│                       # Formulaire + informations de contact
│
└── NotFound.tsx       # Page 404 (route: *)
                        # Affichée quand l'URL n'existe pas
```

---

## 🎨 Système de Design

### Philosophie

J'ai créé une identité visuelle "cyber" professionnelle qui évoque :
- La technologie et la modernité (bleus)
- La qualité et le premium (or)
- La confiance et la sécurité (couleurs sombres)

### Palette de Couleurs

#### Couleurs Principales

| Nom | Code Hex | Code HSL | Usage |
|-----|----------|----------|-------|
| **Cyber (Bleu Principal)** | `#003366` | `210 100% 20%` | Titres, textes importants, header |
| **Cyber Light** | `#0056b3` | - | Liens, hovers, éléments secondaires |
| **Cyber Gold (Or)** | `#FFD700` | `45 100% 50%` | CTA, accents, éléments premium |
| **Cyber Blue** | `#1E90FF` | - | Décorations, éléments tertiaires |
| **Cyber Dark Blue** | `#00264D` | - | Backgrounds sombres, dégradés |
| **Cyber Light Blue** | `#66B2FF` | - | Hovers légers |

#### Comment les couleurs sont définies

**1. Dans `src/index.css` (variables CSS) :**

```css
:root {
  --primary: 210 100% 20%;        /* Bleu cyber - pour les tokens shadcn */
  --primary-foreground: 210 40% 98%;
  --accent: 45 100% 50%;          /* Or - pour les accents */
  --background: 0 0% 100%;        /* Blanc */
  --foreground: 222.2 84% 4.9%;   /* Noir/gris foncé pour le texte */
}
```

**2. Dans `tailwind.config.ts` (classes Tailwind) :**

```typescript
colors: {
  cyber: {
    DEFAULT: '#003366',      // Utilisable : text-cyber, bg-cyber
    light: '#0056b3',        // Utilisable : text-cyber-light
    gold: '#FFD700',         // Utilisable : text-cyber-gold
    blue: '#1E90FF',         // Utilisable : text-cyber-blue
    darkblue: '#00264D',     // Utilisable : bg-cyber-darkblue
    lightblue: '#66B2FF',    // Utilisable : text-cyber-lightblue
  }
}
```

### Typographie

#### Police : Exo 2

J'ai choisi **Exo 2** (Google Fonts) pour son aspect :
- Moderne et technologique
- Lisible à toutes les tailles
- Professionnel sans être ennuyeux

**Chargement de la police (dans `index.css`) :**

```css
@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@400;500;600;700&display=swap');

body {
  font-family: 'Exo 2', sans-serif;
}
```

#### Hiérarchie des Titres

| Élément | Style | Exemple d'utilisation |
|---------|-------|----------------------|
| H1 | `text-4xl md:text-5xl lg:text-6xl font-bold` | Titre principal du Hero |
| H2 | `text-3xl md:text-4xl font-bold` | Titres de sections |
| H3 | `text-xl font-semibold` | Titres de cartes |
| Paragraphe | `text-base` ou `text-lg` | Corps de texte |
| Small | `text-sm text-gray-600` | Texte secondaire |

### Classes CSS Personnalisées

J'ai créé des classes réutilisables dans `index.css` :

#### `.cyber-card`

```css
.cyber-card {
  @apply rounded-lg border border-cyber/10 shadow-md bg-white relative overflow-hidden;
  background-image: radial-gradient(circle at 100% 100%, rgba(0, 51, 102, 0.03) 0%, transparent 50%);
}

.cyber-card::before {
  content: '';
  @apply absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyber to-cyber-blue;
}
```

**Résultat :** Une carte blanche avec une fine bordure dorée en haut.

**Utilisation :**
```jsx
<div className="cyber-card">
  <h3>Titre</h3>
  <p>Contenu de la carte</p>
</div>
```

#### `.cyber-button`

```css
.cyber-button {
  @apply inline-flex items-center justify-center rounded-md 
         bg-cyber hover:bg-cyber-darkblue text-white 
         font-medium px-5 py-2.5 transition-all 
         shadow-md hover:shadow-lg;
}
```

**Résultat :** Bouton bleu foncé avec effet au survol.

#### `.cyber-button-gold`

```css
.cyber-button-gold {
  @apply inline-flex items-center justify-center rounded-md 
         bg-cyber-gold hover:bg-amber-500 text-cyber 
         font-bold px-5 py-2.5 transition-all 
         shadow-md hover:shadow-lg;
}
```

**Résultat :** Bouton doré pour les CTA importants.

#### `.section-title`

```css
.section-title {
  @apply text-3xl md:text-4xl font-bold mb-6 relative inline-block pb-3;
}

.section-title::after {
  content: '';
  @apply absolute bottom-0 left-0 w-2/3 h-1 bg-cyber-gold rounded-full;
}
```

**Résultat :** Titre avec une ligne dorée en dessous.

#### `.container-custom`

```css
.container-custom {
  @apply w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}
```

**Résultat :** Container centré avec padding responsive.

---

## 🗺️ Structure des Pages

### Page d'Accueil (`/`)

**Fichier :** `src/pages/Index.tsx`

**Structure :**

```
┌─────────────────────────────────────┐
│             NAVBAR                  │
├─────────────────────────────────────┤
│                                     │
│              HERO                   │
│   (Titre + CTA + Image)            │
│                                     │
├─────────────────────────────────────┤
│          ABOUT SECTION              │
│   (Présentation rapide)             │
├─────────────────────────────────────┤
│       FEATURED FORMATIONS           │
│   (3 formations en vedette)         │
├─────────────────────────────────────┤
│          TESTIMONIALS               │
│   (Avis des clients)                │
├─────────────────────────────────────┤
│        UPCOMING EVENTS              │
│   (Prochains événements)            │
├─────────────────────────────────────┤
│       LATEST BLOG POSTS             │
│   (3 derniers articles)             │
├─────────────────────────────────────┤
│          CTA SECTION                │
│   (Appel à l'action final)          │
├─────────────────────────────────────┤
│             FOOTER                  │
└─────────────────────────────────────┘
```

**Code simplifié :**

```jsx
const Index = () => {
  return (
    <Layout>           {/* Navbar + Footer automatiques */}
      <Hero />
      <AboutSection />
      <FeaturedFormations />
      <Testimonials />
      <UpcomingEvents />
      <LatestBlogPosts />
      <CTASection />
    </Layout>
  );
};
```

---

### Page Formations (`/formations`)

**Fichier :** `src/pages/Formations.tsx`

**Fonctionnalités :**
- Hero spécifique aux formations
- Système d'onglets pour filtrer par niveau
- Grille de cartes de formations
- Formulaire d'inscription en bas

**Les données des formations :**

```typescript
const formations = [
  {
    id: 1,
    title: "Analyste SOC - Blue Team",
    description: "Apprenez à surveiller, détecter...",
    level: "Débutant",        // "Débutant" | "Intermédiaire" | "Avancé"
    duration: "10 semaines",
    image: "https://...",
    category: "Blue Team"
  },
  // ... autres formations
];
```

**Système de filtrage :**

```jsx
// Filtrage par niveau
const debutantFormations = formations.filter(f => f.level === "Débutant");
const intermediaireFormations = formations.filter(f => f.level === "Intermédiaire");
const avanceFormations = formations.filter(f => f.level === "Avancé");

// Affichage avec Tabs
<Tabs defaultValue="all">
  <TabsList>
    <TabsTrigger value="all">Tous</TabsTrigger>
    <TabsTrigger value="debutant">Débutant</TabsTrigger>
    <TabsTrigger value="intermediaire">Intermédiaire</TabsTrigger>
    <TabsTrigger value="avance">Avancé</TabsTrigger>
  </TabsList>
  
  <TabsContent value="all">
    {formations.map(f => <FormationCard {...f} />)}
  </TabsContent>
  
  <TabsContent value="debutant">
    {debutantFormations.map(f => <FormationCard {...f} />)}
  </TabsContent>
  {/* etc. */}
</Tabs>
```

---

### Page Contact (`/contact`)

**Fichier :** `src/pages/Contact.tsx`

Le composant `ContactForm` est réutilisable avec deux modes :

```jsx
// Mode contact simple
<ContactForm formType="contact" />

// Mode inscription (ajoute un sélecteur de formation)
<ContactForm formType="inscription" />
```

---

## 🧩 Composants Détaillés

### FormationCard

**Fichier :** `src/components/formations/FormationCard.tsx`

**Props (paramètres) :**

```typescript
interface FormationProps {
  id: number;                                    // Identifiant unique
  title: string;                                 // Titre de la formation
  description: string;                           // Description courte
  level: "Débutant" | "Intermédiaire" | "Avancé"; // Niveau requis
  duration: string;                              // Durée (ex: "10 semaines")
  image: string;                                 // URL de l'image
  category: string;                              // Catégorie (Blue Team, Red Team, etc.)
}
```

**Couleur du badge selon le niveau :**

```typescript
const getLevelColor = () => {
  switch (level) {
    case "Débutant":
      return "bg-green-100 text-green-800";      // Vert
    case "Intermédiaire":
      return "bg-blue-100 text-blue-800";        // Bleu
    case "Avancé":
      return "bg-purple-100 text-purple-800";    // Violet
  }
};
```

**Structure visuelle :**

```
┌────────────────────────┐
│    ┌──────────────┐    │
│    │    IMAGE     │    │
│    └──────────────┘    │
│                        │
│  [Débutant]    🕐 10s  │
│                        │
│  Titre de la Formation │
│                        │
│  Description courte... │
│                        │
│  ┌──────────────────┐  │
│  │  En savoir plus  │  │
│  └──────────────────┘  │
│  ┌──────────────────┐  │
│  │  S'inscrire 99€  │  │
│  └──────────────────┘  │
└────────────────────────┘
```

---

### ContactForm

**Fichier :** `src/components/contact/ContactForm.tsx`

**Props :**

```typescript
interface ContactFormProps {
  formType?: "contact" | "inscription";  // Type de formulaire
  title?: string;                         // Titre affiché
  subtitle?: string;                      // Sous-titre
}
```

**Champs du formulaire :**

| Champ | Type | Obligatoire | Condition |
|-------|------|-------------|-----------|
| Prénom | text | ✅ Oui | Toujours |
| Nom | text | ✅ Oui | Toujours |
| Email | email | ✅ Oui | Toujours |
| Téléphone | tel | ❌ Non | Toujours |
| Formation | select | ✅ Oui | Seulement si `formType="inscription"` |
| Message | textarea | ✅ Oui | Toujours |
| Consentement | checkbox | ✅ Oui | Toujours |

**Gestion de la soumission :**

```typescript
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();                    // Empêche le rechargement
  setIsSubmitting(true);                 // Active le loader
  
  // Simulation d'envoi (à remplacer par un vrai appel API)
  setTimeout(() => {
    setIsSubmitting(false);
    toast({                              // Affiche une notification
      title: "Message envoyé",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    form.reset();                        // Vide le formulaire
  }, 1500);
};
```

---

### Navbar

**Fichier :** `src/components/layout/Navbar.tsx`

**Comportement :**
- **Desktop (≥768px)** : Menu horizontal avec tous les liens
- **Mobile (<768px)** : Bouton hamburger + menu déroulant

**Gestion du menu mobile :**

```typescript
const [isMenuOpen, setIsMenuOpen] = useState(false);

const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen);  // Inverse l'état
};
```

**Liens de navigation :**

| Lien | Route | Description |
|------|-------|-------------|
| Accueil | `/` | Page principale |
| Formations | `/formations` | Catalogue |
| Événements | `/evenements` | Liste des events |
| Blog | `/blog` | Articles |
| À propos | `/a-propos` | Présentation |

---

### Hero

**Fichier :** `src/components/home/Hero.tsx`

**Éléments :**
- Titre principal avec partie dorée
- Paragraphe d'accroche
- 2 boutons CTA
- Image de présentation
- 3 badges (Blue Team, Red Team, SOC)
- Effets décoratifs (cercles flous)

**Background pattern :**

```jsx
// Motif binaire subtil en fond
<div className="absolute inset-0 opacity-5">
  <div style={{
    backgroundImage: "url('data:image/svg+xml,...')"  // Pattern SVG
  }}></div>
</div>
```

---

## 📱 Responsive Design

### Breakpoints Tailwind

| Préfixe | Taille minimum | Usage |
|---------|----------------|-------|
| (aucun) | 0px | Mobile first (par défaut) |
| `sm:` | 640px | Grands téléphones |
| `md:` | 768px | Tablettes |
| `lg:` | 1024px | Laptops |
| `xl:` | 1280px | Grands écrans |
| `2xl:` | 1400px | Très grands écrans |

### Comment ça marche

Tailwind utilise l'approche "mobile-first" :

```jsx
// Le style de base s'applique sur mobile
// Les préfixes ajoutent des styles pour les écrans plus grands

<div className="
  grid 
  grid-cols-1           // Mobile : 1 colonne
  md:grid-cols-2        // Tablette : 2 colonnes
  lg:grid-cols-3        // Desktop : 3 colonnes
">
```

### Exemples concrets dans le projet

**Grille de formations :**

```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {formations.map(f => <FormationCard {...f} />)}
</div>
```

| Taille d'écran | Colonnes |
|----------------|----------|
| Mobile | 1 |
| Tablette | 2 |
| Desktop | 3 |

**Hero section :**

```jsx
<div className="flex flex-col lg:flex-row">
  <div className="w-full lg:w-1/2">Texte</div>
  <div className="w-full lg:w-1/2">Image</div>
</div>
```

| Taille d'écran | Layout |
|----------------|--------|
| Mobile/Tablette | Texte au-dessus, image en dessous |
| Desktop | Texte à gauche, image à droite |

---

## ✏️ Comment Modifier le Site

### Modifier le contenu textuel

**Exemple : Changer le titre du Hero**

1. Ouvrir `src/components/home/Hero.tsx`
2. Trouver le `<h1>` :
```jsx
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
  <span className="block">Formez-vous aux métiers</span>
  <span className="text-cyber-gold">de la cybersécurité</span>
  <span className="block">dès aujourd'hui</span>
</h1>
```
3. Modifier le texte entre les balises `<span>`

---

### Modifier les couleurs

**Exemple : Changer la couleur or en rouge**

1. Ouvrir `tailwind.config.ts`
2. Modifier la valeur de `cyber-gold` :
```typescript
cyber: {
  gold: '#FF0000',  // Anciennement #FFD700
}
```
3. Tous les éléments utilisant `text-cyber-gold` ou `bg-cyber-gold` changeront automatiquement

---

### Ajouter une formation

1. Ouvrir `src/pages/Formations.tsx`
2. Trouver le tableau `formations`
3. Ajouter un nouvel objet :

```typescript
{
  id: 7,  // Nouvel ID unique
  title: "Nouvelle Formation",
  description: "Description de la formation...",
  level: "Intermédiaire",  // ou "Débutant" ou "Avancé"
  duration: "8 semaines",
  image: "https://url-de-image.com/image.jpg",
  category: "Catégorie"
}
```

---

### Ajouter une nouvelle page

1. Créer le fichier dans `src/pages/` :

```jsx
// src/pages/MaNouvellePage.tsx
import React from "react";
import Layout from "@/components/layout/Layout";

const MaNouvellePage: React.FC = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container-custom">
          <h1>Ma Nouvelle Page</h1>
          <p>Contenu...</p>
        </div>
      </section>
    </Layout>
  );
};

export default MaNouvellePage;
```

2. Ajouter la route dans `src/App.tsx` :

```jsx
import MaNouvellePage from "./pages/MaNouvellePage";

// Dans les Routes
<Route path="/ma-nouvelle-page" element={<MaNouvellePage />} />
```

3. (Optionnel) Ajouter un lien dans la Navbar (`src/components/layout/Navbar.tsx`)

---

## 🚀 Scripts et Commandes

### Installation

```bash
npm install
```
Installe toutes les dépendances listées dans `package.json`.

### Développement

```bash
npm run dev
```
- Lance le serveur de développement
- Accessible sur `http://localhost:5173`
- Hot reload activé (modifications visibles instantanément)

### Build de production

```bash
npm run build
```
- Compile et optimise le code pour la production
- Crée un dossier `dist/` avec les fichiers à déployer

### Prévisualisation

```bash
npm run preview
```
- Permet de tester le build de production localement

---

## 📈 Évolutions Futures

### Priorité Haute

| Fonctionnalité | Description | Complexité |
|----------------|-------------|------------|
| Backend | Ajouter une base de données pour stocker formations, événements, articles | ⭐⭐⭐ |
| Formulaires | Envoyer vraiment les emails de contact | ⭐⭐ |
| Authentification | Créer un espace membre | ⭐⭐⭐ |

### Priorité Moyenne

| Fonctionnalité | Description | Complexité |
|----------------|-------------|------------|
| Paiement | Intégrer Stripe pour les inscriptions | ⭐⭐⭐ |
| Newsletter | Système d'inscription à la newsletter | ⭐⭐ |
| CMS | Interface d'admin pour gérer le contenu | ⭐⭐⭐ |

### Priorité Basse

| Fonctionnalité | Description | Complexité |
|----------------|-------------|------------|
| Multilingue | Version anglaise du site | ⭐⭐ |
| Mode sombre | Thème dark | ⭐ |
| Animations | Améliorer les transitions | ⭐ |

---

## 📞 Informations de Contact

- **Email** : contact@academie-cyber.fr
- **Téléphone** : +40 766 438 679
- **Localisation** : Paris, France

---

## 📝 Notes Importantes

### Données actuellement en dur

Les données suivantes sont écrites directement dans le code (pas dans une base de données) :
- Liste des formations (`src/pages/Formations.tsx`)
- Liste des événements
- Articles de blog
- Témoignages

**Pour les rendre dynamiques**, il faudra :
1. Ajouter un backend (base de données)
2. Créer des API pour récupérer les données
3. Utiliser TanStack Query pour les requêtes

### Le formulaire de contact

Actuellement, le formulaire simule un envoi (timeout de 1.5s puis message de succès).

**Pour le rendre fonctionnel**, il faudra :
1. Créer une API backend
2. Configurer un service d'email (SendGrid, Mailgun, etc.)
3. Modifier `ContactForm.tsx` pour appeler l'API

---

*Cette documentation a été rédigée pour permettre à toute personne de comprendre et maintenir ce projet, même sans expérience préalable en développement web.*
