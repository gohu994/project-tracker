# Project Management App (Frontend)

Ce dossier contient le frontend de l'application Project Management App, construit avec Next.js, TypeScript, et Tailwind CSS.

## Structure
- **`src/app`** : Contient les pages principales et la configuration de l'application.
- **`src/components`** : Contient les composants réutilisables.
- **`src/services`** : Contient les services pour interagir avec l'API backend.

## Pages principales
- **Accueil (HomePage)** : Page d'accueil de l'application.
- **Liste des projets (ProjectsPage)** : Affiche tous les projets disponibles.
- **Détail d'un projet (ProjectDetail)** : Affiche les détails d'un projet spécifique.

## Démarrage
1. Naviguez dans ce dossier.
2. Exécutez `npm install` pour installer les dépendances.
3. Lancez le serveur de développement avec `npm run dev`.

## Configuration
- **API URL** : Configurez l'URL de l'API backend dans le fichier `.env.local` avec la clé `NEXT_PUBLIC_API_URL`.

## Déploiement
Pour déployer l'application, utilisez une plateforme comme Vercel ou Netlify. Assurez-vous que les variables d'environnement sont correctement configurées.

---

Pour toute question ou problème, consultez la documentation principale ou ouvrez une issue.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
