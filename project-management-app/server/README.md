# Project Management App (Backend)

Ce dossier contient le backend de l'application Project Management App, construit avec Node.js, Express, et MongoDB.

## Structure
- **`server.js`** : Point d'entrée principal du serveur.
- **`config/db.js`** : Configuration de la connexion à la base de données MongoDB.
- **`controllers/`** : Contient les fichiers pour la logique métier des différentes entités (projets, phases, tâches, utilisateurs).
- **`models/`** : Définit les schémas Mongoose pour les entités de la base de données.
- **`routes/`** : Définit les routes API pour chaque entité.

## Endpoints principaux
### Projets
- `GET /api/projects` : Récupère tous les projets.
- `POST /api/projects` : Crée un nouveau projet.
- `GET /api/projects/:id` : Récupère les détails d'un projet spécifique.

### Phases
- `GET /api/phases` : Récupère toutes les phases.
- `POST /api/phases` : Crée une nouvelle phase.

### Tâches principales (MacroTasks)
- `GET /api/mactoTasks` : Récupère toutes les tâches principales.
- `POST /api/mactoTasks` : Crée une nouvelle tâche principale.

### Utilisateurs
- `GET /api/users` : Récupère tous les utilisateurs.
- `POST /api/users` : Crée un nouvel utilisateur.

## Démarrage
1. Naviguez dans ce dossier.
2. Exécutez `npm install` pour installer les dépendances.
3. Configurez la base de données MongoDB dans `config/db.js`.
4. Lancez le serveur avec `node server.js`.

## Configuration
- **Base de données** : Configurez l'URI MongoDB dans un fichier `.env` avec la clé `MONGO_URI`.
- **Port** : Configurez le port du serveur avec la clé `PORT` dans le fichier `.env` (par défaut : 5000).

## Déploiement
Pour déployer le backend, utilisez une plateforme comme Heroku, AWS, ou tout autre service cloud. Assurez-vous que les variables d'environnement sont correctement configurées.

---

Pour toute question ou problème, ouvrez une issue ou consultez la documentation principale.