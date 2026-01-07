# 📚 Documentation - Académie Cyber & Réseaux

## 📋 Présentation du Projet

**Académie Cyber & Réseaux** est un site web vitrine pour un organisme de formation spécialisé en cybersécurité. Le site présente les formations, événements, articles de blog et permet aux visiteurs de prendre contact.

---

## 🛠️ Stack Technique

| Technologie | Version | Description |
|-------------|---------|-------------|
| **React** | 18.3.1 | Bibliothèque UI |
| **TypeScript** | - | Typage statique |
| **Vite** | - | Build tool et dev server |
| **Tailwind CSS** | - | Framework CSS utilitaire |
| **React Router DOM** | 6.26.2 | Routing client-side |
| **shadcn/ui** | - | Composants UI accessibles |
| **TanStack Query** | 5.56.2 | Gestion des requêtes async |
| **Lucide React** | 0.462.0 | Icônes |

---

## 📁 Structure du Projet

```
src/
├── components/
│   ├── blog/
│   │   └── BlogCard.tsx          # Carte pour article de blog
│   ├── contact/
│   │   └── ContactForm.tsx       # Formulaire de contact/inscription
│   ├── evenements/
│   │   └── EventCard.tsx         # Carte pour événement
│   ├── formations/
│   │   └── FormationCard.tsx     # Carte pour formation
│   ├── home/
│   │   ├── AboutSection.tsx      # Section "À propos"
│   │   ├── CTASection.tsx        # Section appel à l'action
│   │   ├── FeaturedFormations.tsx # Formations en vedette
│   │   ├── Hero.tsx              # Bannière principale
│   │   ├── LatestBlogPosts.tsx   # Derniers articles
│   │   ├── Testimonials.tsx      # Témoignages
│   │   └── UpcomingEvents.tsx    # Événements à venir
│   ├── layout/
│   │   ├── Footer.tsx            # Pied de page
│   │   ├── Layout.tsx            # Layout principal
│   │   └── Navbar.tsx            # Barre de navigation
│   └── ui/
│       ├── button.tsx            # Composant bouton
│       ├── card.tsx              # Composant carte
│       ├── SectionTitle.tsx      # Titre de section
│       ├── RevolutPaymentButton.tsx # Bouton paiement Revolut
│       └── [autres composants shadcn...]
├── pages/
│   ├── Index.tsx                 # Page d'accueil
│   ├── Formations.tsx            # Catalogue formations
│   ├── Evenements.tsx            # Liste événements
│   ├── Blog.tsx                  # Articles de blog
│   ├── APropos.tsx               # À propos
│   ├── Contact.tsx               # Contact
│   └── NotFound.tsx              # Page 404
├── hooks/
│   ├── use-mobile.tsx            # Détection mobile
│   └── use-toast.ts              # Notifications toast
├── lib/
│   └── utils.ts                  # Utilitaires (cn, etc.)
├── App.tsx                       # Configuration routes
├── index.css                     # Styles globaux + tokens
└── main.tsx                      # Point d'entrée
```

---

## 🎨 Système de Design

### Palette de Couleurs

| Token | Valeur | Usage |
|-------|--------|-------|
| `--primary` | `210 100% 20%` | Bleu cyber principal |
| `--accent` | `45 100% 50%` | Or/Jaune accent |
| `cyber` | `#003366` | Bleu foncé |
| `cyber-light` | `#0056b3` | Bleu clair |
| `cyber-gold` | `#FFD700` | Or |
| `cyber-blue` | `#1E90FF` | Bleu vif |
| `cyber-darkblue` | `#00264D` | Bleu très foncé |

### Classes Utilitaires Personnalisées

```css
.cyber-card        /* Carte avec bordure dégradée supérieure */
.cyber-button      /* Bouton bleu principal */
.cyber-button-gold /* Bouton or/jaune */
.section-title     /* Titre avec underline doré */
.container-custom  /* Container avec padding responsive */
.gradient-text     /* Texte dégradé or → bleu */
```

### Typographie

- **Police principale** : Exo 2 (Google Fonts)
- **Titres** : `font-bold text-cyber`
- **Corps** : Exo 2 regular

---

## 🗺️ Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Index | Page d'accueil |
| `/formations` | Formations | Catalogue des formations avec filtres |
| `/evenements` | Evenements | Liste des événements |
| `/blog` | Blog | Articles de blog |
| `/a-propos` | APropos | Présentation de l'académie |
| `/contact` | Contact | Formulaire de contact |
| `*` | NotFound | Page 404 |

---

## 🧩 Composants Principaux

### Layout (`src/components/layout/`)

#### `Layout.tsx`
Wrapper global avec Navbar et Footer.

#### `Navbar.tsx`
- Navigation responsive (desktop/mobile)
- Menu hamburger sur mobile
- Logo avec icône Shield
- Lien CTA "Contact"

#### `Footer.tsx`
- 4 colonnes : Logo, Liens, Contact, Newsletter
- Réseaux sociaux
- Mentions légales

### Home (`src/components/home/`)

#### `Hero.tsx`
Bannière principale avec :
- Titre animé
- Boutons CTA
- Image de présentation
- Tags Blue Team / Red Team / SOC

#### `FeaturedFormations.tsx`
Affiche 3 formations en vedette.

#### `Testimonials.tsx`
Carousel de témoignages clients.

#### `UpcomingEvents.tsx`
Liste des prochains événements.

### Formations (`src/components/formations/`)

#### `FormationCard.tsx`
Carte de formation avec :
- Image
- Badge niveau (Débutant/Intermédiaire/Avancé)
- Durée
- Description
- Boutons action

**Props** :
```typescript
interface FormationProps {
  id: number;
  title: string;
  description: string;
  level: "Débutant" | "Intermédiaire" | "Avancé";
  duration: string;
  image: string;
  category: string;
}
```

### Contact (`src/components/contact/`)

#### `ContactForm.tsx`
Formulaire adaptable :
- Mode "contact" : formulaire simple
- Mode "inscription" : avec sélection de formation

**Props** :
```typescript
interface ContactFormProps {
  formType?: "contact" | "inscription";
  title?: string;
  subtitle?: string;
}
```

---

## 📱 Responsive Design

Le site utilise les breakpoints Tailwind standards :
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1400px (container max)

La navigation bascule en mode hamburger sous `md` (768px).

---

## 🚀 Développement

### Installation

```bash
npm install
```

### Lancer en développement

```bash
npm run dev
```

### Build production

```bash
npm run build
```

### Preview production

```bash
npm run preview
```

---

## 📌 Points d'Amélioration Possibles

1. **Backend** : Activer Lovable Cloud pour :
   - Stockage des formations en base de données
   - Gestion des inscriptions
   - Authentification utilisateur
   - Envoi d'emails

2. **Fonctionnalités** :
   - Inscription aux formations
   - Paiement en ligne
   - Espace membre
   - Newsletter fonctionnelle

3. **SEO** :
   - Meta tags dynamiques
   - Sitemap
   - Schema.org (Course, Organization)

4. **Performance** :
   - Optimisation images
   - Lazy loading
   - Code splitting

---

## 📞 Contact

- **Email** : contact@academie-cyber.fr
- **Téléphone** : +40 766 438 679
- **Localisation** : Paris, France
