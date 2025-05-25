# Dossier de Spécifications Techniques

## 1. Introduction
Ce document décrit les spécifications techniques de l'application de gestion de projets, couvrant les aspects frontend, backend, base de données, et déploiement.

---

## 2. Architecture Générale
L'application suit une architecture client-serveur :
- **Frontend** : Développé avec Next.js, TypeScript, et Tailwind CSS.
- **Backend** : API REST construite avec Node.js, Express, et MongoDB.
- **Base de données** : MongoDB pour le stockage des données.
- **Déploiement** : Conteneurisation avec Docker et orchestration via `docker-compose`.

---

## 3. Frontend
### Technologies Utilisées
- **Framework** : Next.js (React).
- **Langage** : TypeScript.
- **Styling** : Tailwind CSS.
- **Gestion des états** : Utilisation des hooks React.

### Structure des Dossiers
- **`src/app`** : Pages principales et configuration de l'application.
- **`src/components`** : Composants réutilisables.
- **`src/services`** : Services pour interagir avec l'API backend.

### Configuration
- Fichier `.env.local` pour configurer l'URL de l'API backend (`NEXT_PUBLIC_API_URL`).

---

## 4. Backend
### Technologies Utilisées
- **Framework** : Express.js.
- **Langage** : JavaScript.
- **Base de données** : MongoDB avec Mongoose pour la gestion des schémas.

### Structure des Dossiers
- **`controllers/`** : Contient la logique métier pour les entités (projets, phases, tâches, utilisateurs).
- **`models/`** : Définit les schémas Mongoose pour les entités.
- **`routes/`** : Définit les routes API pour chaque entité.
- **`config/`** : Configuration de la base de données.

### Configuration
- Fichier `.env` pour configurer :
  - **MONGO_URI** : URI de connexion à MongoDB.
  - **PORT** : Port d'écoute du serveur (par défaut : 5000).

---

## 5. Base de Données
### Modèle de Données
- **Projets** :
  - Champs : `nom`, `description`, `dateDebut`, `dateFin`, `phases`.
- **Phases** :
  - Champs : `nom`, `description`, `dateDebut`, `dateFin`, `macroTaches`.
- **Macro-tâches** :
  - Champs : `nom`, `description`, `estimationTemps`, `etat`.
- **Collaborateurs** :
  - Champs : `nom`, `prenom`, `email`, `competences`, `indisponibilites`.

### Relations
- Un projet contient plusieurs phases.
- Une phase contient plusieurs macro-tâches.
- Une macro-tâche peut être assignée à plusieurs collaborateurs.

---

## 6. Déploiement
### Conteneurisation
- **Docker** :
  - Fichier `Dockerfile` pour le frontend et le backend.
  - Fichier `docker-compose.yml` pour orchestrer les conteneurs.

### Environnements
- **Développement** :
  - Serveur local avec hot-reloading.
- **Production** :
  - Déploiement sur une plateforme cloud (ex. AWS, Heroku, ou Vercel).

---

## 7. Sécurité
- **Authentification** : JWT (JSON Web Tokens) pour sécuriser les endpoints.
- **Validation des Données** : Middleware pour valider les entrées utilisateur.
- **Sécurisation de la Base de Données** : Utilisation de rôles et permissions dans MongoDB.

---

## 8. Performances
- **Optimisation Frontend** :
  - Chargement différé des composants (lazy loading).
  - Optimisation des images avec Next.js.
- **Optimisation Backend** :
  - Indexation des champs fréquemment utilisés dans MongoDB.
  - Mise en cache des requêtes fréquentes.

---

## 9. Monitoring et Logs
- **Logs** :
  - Utilisation de `winston` ou `morgan` pour le backend.
- **Monitoring** :
  - Intégration avec des outils comme Prometheus ou New Relic.

---

Pour toute question ou contribution, ouvrez une issue ou soumettez une pull request.
