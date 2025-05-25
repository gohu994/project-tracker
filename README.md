# HPM - Project Management System

HPM (Highly Productive Management) est une application de gestion de projets conçue pour simplifier la gestion des tâches, des phases et des projets dans une organisation. Ce projet est divisé en deux parties principales :

- **Frontend** : Une application Next.js utilisant TypeScript et Tailwind CSS.
- **Backend** : Une API REST construite avec Node.js, Express, et MongoDB.

## Structure du projet
- **`project-management-app/`** : Contient le frontend et le backend.
  - **`client/`** : Le frontend de l'application.
  - **`server/`** : Le backend de l'application.

## Fonctionnalités principales
- Gestion des projets, phases et tâches principales.
- Interface utilisateur moderne et réactive.
- API REST pour la gestion des données.

## Prérequis
- Node.js (version 16 ou supérieure)
- MongoDB
- Docker (optionnel pour exécuter via `docker-compose`)

## Démarrage rapide
1. Clonez ce dépôt.
2. Suivez les instructions dans les fichiers README des dossiers `client` et `server` pour démarrer les deux parties de l'application.

---

Pour toute question ou contribution, ouvrez une issue ou soumettez une pull request.

# Project Management App (Next.js)

Ce projet est une migration de l'application Project Tracker App vers Next.js (TypeScript, App Router, Tailwind).

## Structure
- **Frontend** : Contenu dans le dossier `client`.
- **Backend** : Contenu dans le sous-dossier `server` (Node.js/Express/MongoDB).

## Pages principales
- **Accueil (HomePage)** : Page d'accueil de l'application.
- **Liste des projets (ProjectsPage)** : Affiche tous les projets disponibles.
- **Détail d'un projet (ProjectDetail)** : Affiche les détails d'un projet spécifique.

## API
Le frontend communique avec le backend via l'URL : `http://localhost:5000/api` (configurable via la variable d'environnement `NEXT_PUBLIC_API_URL`).

### Endpoints principaux
- `GET /api/projects` : Récupère tous les projets.
- `POST /api/projects` : Crée un nouveau projet.
- `GET /api/projects/:id` : Récupère les détails d'un projet spécifique.

## Démarrage
### Frontend
1. Naviguez dans le dossier `client`.
2. Exécutez `npm install` pour installer les dépendances.
3. Lancez le serveur de développement avec `npm run dev`.

### Backend
1. Naviguez dans le dossier `server`.
2. Exécutez `npm install` pour installer les dépendances.
3. Configurez la base de données MongoDB dans `server/config/db.js`.
4. Lancez le serveur avec `node server.js`.

## Docker
Un fichier `docker-compose.yml` est disponible pour exécuter l'application dans des conteneurs Docker. Assurez-vous d'avoir Docker installé, puis exécutez :
```bash
docker-compose up
```

---

Pour toute migration de composants/services, adaptez les imports et le routage selon la structure Next.js.
