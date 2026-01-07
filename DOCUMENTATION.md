# 📚 Documentation Technique - Académie Cyber & Réseaux

## 📋 Présentation du Projet

**Académie Cyber & Réseaux** est une plateforme web vitrine développée pour un organisme de formation spécialisé en cybersécurité. L'objectif est de présenter l'offre de formations, les événements, le blog et de faciliter la prise de contact avec les prospects.

---

## 🛠️ Stack Technique

J'ai choisi les technologies suivantes pour leur robustesse et leur maintenabilité :

| Technologie | Version | Justification |
|-------------|---------|---------------|
| **React** | 18.3.1 | Composants réutilisables, écosystème mature |
| **TypeScript** | - | Typage statique pour réduire les bugs |
| **Vite** | - | Build ultra-rapide, HMR instantané |
| **Tailwind CSS** | - | Développement CSS rapide et cohérent |
| **React Router DOM** | 6.26.2 | Routing SPA standard |
| **shadcn/ui** | - | Composants accessibles et personnalisables |
| **TanStack Query** | 5.56.2 | Préparé pour les futures requêtes API |
| **Lucide React** | 0.462.0 | Icônes légères et cohérentes |

---

## 📁 Architecture du Projet

J'ai organisé le code selon une architecture modulaire par fonctionnalité :

```
src/
├── components/
│   ├── blog/
│   │   └── BlogCard.tsx          # Carte article de blog
│   ├── contact/
│   │   └── ContactForm.tsx       # Formulaire contact/inscription
│   ├── evenements/
│   │   └── EventCard.tsx         # Carte événement
│   ├── formations/
│   │   └── FormationCard.tsx     # Carte formation
│   ├── home/
│   │   ├── AboutSection.tsx      # Section présentation
│   │   ├── CTASection.tsx        # Appel à l'action
│   │   ├── FeaturedFormations.tsx # Formations vedettes
│   │   ├── Hero.tsx              # Bannière principale
│   │   ├── LatestBlogPosts.tsx   # Derniers articles
│   │   ├── Testimonials.tsx      # Témoignages clients
│   │   └── UpcomingEvents.tsx    # Prochains événements
│   ├── layout/
│   │   ├── Footer.tsx            # Pied de page
│   │   ├── Layout.tsx            # Layout global
│   │   └── Navbar.tsx            # Navigation
│   └── ui/
│       ├── button.tsx            # Bouton
│       ├── card.tsx              # Carte
│       ├── SectionTitle.tsx      # Titre de section
│       └── [composants UI...]
├── pages/
│   ├── Index.tsx                 # Accueil
│   ├── Formations.tsx            # Catalogue formations
│   ├── Evenements.tsx            # Événements
│   ├── Blog.tsx                  # Blog
│   ├── APropos.tsx               # À propos
│   ├── Contact.tsx               # Contact
│   └── NotFound.tsx              # 404
├── hooks/
│   ├── use-mobile.tsx            # Hook détection mobile
│   └── use-toast.ts              # Hook notifications
├── lib/
│   └── utils.ts                  # Fonctions utilitaires
├── App.tsx                       # Configuration routing
├── index.css                     # Tokens design + styles globaux
└── main.tsx                      # Point d'entrée
```

### Choix d'architecture

- **Séparation par domaine** : Chaque fonctionnalité (formations, blog, événements) a son propre dossier de composants
- **Composants UI réutilisables** : Le dossier `ui/` contient les briques de base
- **Layout centralisé** : Un seul composant Layout wrappe toutes les pages

---

## 🎨 Système de Design

### Identité Visuelle

J'ai créé une identité visuelle "cyber" avec une palette professionnelle :

| Couleur | Code | Usage |
|---------|------|-------|
| Bleu Cyber | `#003366` | Couleur principale, headers, textes importants |
| Bleu Clair | `#0056b3` | Hovers, liens |
| Or | `#FFD700` | Accents, CTA, éléments premium |
| Bleu Vif | `#1E90FF` | Éléments secondaires, décorations |
| Bleu Foncé | `#00264D` | Backgrounds sombres, dégradés |

### Tokens CSS (index.css)

```css
:root {
  --primary: 210 100% 20%;      /* Bleu cyber */
  --accent: 45 100% 50%;         /* Or */
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
}
```

### Classes Utilitaires Personnalisées

```css
.cyber-card        /* Carte avec bordure dégradée en haut */
.cyber-button      /* Bouton principal bleu */
.cyber-button-gold /* Bouton accent doré */
.section-title     /* Titre avec underline doré animé */
.container-custom  /* Container responsive personnalisé */
.gradient-text     /* Texte avec dégradé or → bleu */
```

### Typographie

- **Police** : Exo 2 (Google Fonts) - Choisie pour son aspect moderne et technique
- **Hiérarchie** : Titres en bold + couleur cyber, corps en regular

---

## 🗺️ Structure des Routes

| Route | Composant | Description |
|-------|-----------|-------------|
| `/` | `Index` | Page d'accueil avec hero, formations, témoignages |
| `/formations` | `Formations` | Catalogue filtrable par niveau |
| `/evenements` | `Evenements` | Liste des événements à venir |
| `/blog` | `Blog` | Articles et actualités |
| `/a-propos` | `APropos` | Présentation de l'académie |
| `/contact` | `Contact` | Formulaire de contact |
| `*` | `NotFound` | Page 404 personnalisée |

---

## 🧩 Composants Clés

### FormationCard

Composant carte pour afficher une formation :

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

**Fonctionnalités** :
- Badge coloré selon le niveau (vert/bleu/violet)
- Image avec effet hover
- Durée affichée
- Boutons d'action

### ContactForm

Formulaire adaptable avec deux modes :

```typescript
interface ContactFormProps {
  formType?: "contact" | "inscription";
  title?: string;
  subtitle?: string;
}
```

- **Mode contact** : Formulaire simple nom/email/message
- **Mode inscription** : Ajoute un sélecteur de formation

### Navbar

Navigation responsive :
- Desktop : Menu horizontal avec liens + CTA
- Mobile : Menu hamburger avec overlay

---

## 📱 Responsive Design

Le site est entièrement responsive avec les breakpoints suivants :

| Breakpoint | Taille | Adaptations |
|------------|--------|-------------|
| Mobile | < 768px | Menu hamburger, colonnes empilées |
| Tablette | 768px - 1024px | Grilles 2 colonnes |
| Desktop | > 1024px | Layout complet, grilles 3-4 colonnes |

---

## 🚀 Scripts de Développement

```bash
# Installation des dépendances
npm install

# Serveur de développement
npm run dev

# Build de production
npm run build

# Prévisualisation du build
npm run preview
```

---

## 📈 Évolutions Prévues

### Court terme
- [ ] Intégration d'un backend (base de données, authentification)
- [ ] Formulaires fonctionnels avec envoi d'emails
- [ ] Newsletter avec stockage des abonnés

### Moyen terme
- [ ] Espace membre pour les inscrits
- [ ] Système de paiement en ligne
- [ ] Gestion dynamique du contenu (CMS)

### SEO & Performance
- [ ] Meta tags dynamiques par page
- [ ] Sitemap XML automatique
- [ ] Schema.org pour les formations
- [ ] Optimisation des images (lazy loading, formats modernes)

---

## 📞 Informations de Contact

- **Email** : contact@academie-cyber.fr
- **Téléphone** : +40 766 438 679
- **Localisation** : Paris, France

---

*Documentation rédigée pour faciliter la maintenance et l'évolution du projet.*
