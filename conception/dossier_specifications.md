# Dossier de Spécifications Fonctionnelles

## 1. Introduction
L'application de gestion de projets vise à simplifier la gestion des collaborateurs, des projets, des phases, et des tâches. Elle fournit une interface utilisateur moderne et des outils pour visualiser et gérer les ressources, les compétences, et les calendriers.

---

## 2. Personas
- **Project Managers** : Responsables de la gestion des projets, des ressources, et des tâches.
- **Developers** : Collaborateurs affectés aux tâches spécifiques des projets.

---

## 3. Épics
1. **Gérer les collaborateurs**
   - Ajouter, modifier, supprimer des collaborateurs.
   - Visualiser les périodes de présence.
   - Renseigner les domaines de compétences.

2. **Gérer les macro-tâches et les phases de projets**
   - Ajouter, modifier, supprimer des macro-tâches.
   - Chiffrer les macro-tâches.

3. **Gérer des projets**
   - Ajouter, modifier, supprimer des projets.
   - Visualiser les phases et tâches d'un projet.
   - Découper un projet en lots.

4. **Gérer les ressources**
   - Affecter des collaborateurs à des tâches.
   - Modifier ou supprimer les affectations.
   - Visualiser le taux d'occupation des collaborateurs.

5. **Gérer les périodes d'indisponibilité**
   - Ajouter, modifier, supprimer des périodes d'indisponibilité.
   - Intégrer les périodes d'indisponibilité d'autres outils.

6. **Gérer une matrice de compétences**
   - Ajouter, modifier, supprimer une matrice.
   - Visualiser une matrice pour un ou plusieurs collaborateurs.
   - Évaluer les compétences des collaborateurs.

7. **Générer des rapports et graphiques**
   - Générer des rapports sur les projets et les ressources.
   - Générer des graphiques pour visualiser les données.

---

## 4. Fonctionnalités
- **Collaborateurs** :
  - Ajouter, modifier, supprimer des collaborateurs.
  - Visualiser les périodes de présence et les compétences.
- **Macro-tâches** :
  - Ajouter, modifier, supprimer, et chiffrer des macro-tâches.
- **Projets** :
  - Ajouter, modifier, supprimer des projets.
  - Découper les projets en lots.
- **Ressources** :
  - Affecter des collaborateurs à des tâches.
  - Visualiser le taux d'occupation.
- **Périodes d'indisponibilité** :
  - Gérer les périodes d'indisponibilité.
  - Intégrer des données externes.
- **Matrice de compétences** :
  - Gérer et visualiser les matrices de compétences.
- **Rapports et graphiques** :
  - Générer des rapports et graphiques pour les projets et les ressources.

---

## 5. Diagramme de Story Mapping
Le diagramme fourni illustre les relations entre les personas, les épics, et les fonctionnalités. Il sert de base pour prioriser les développements et structurer l'application.

---

## 6. Priorisation
1. **Phase 1** : Gestion des collaborateurs, des projets, et des macro-tâches.
2. **Phase 2** : Gestion des ressources et des périodes d'indisponibilité.
3. **Phase 3** : Gestion des matrices de compétences et génération de rapports.

---

## 7. Règles de Gestion

### Collaborateurs
1. Chaque collaborateur doit avoir un identifiant unique, un nom, un prénom, et une adresse e-mail valide.
2. Les périodes de présence et d'indisponibilité doivent être enregistrées avec des dates de début et de fin précises.
3. Les domaines de compétences doivent être définis à partir d'une liste prédéfinie ou personnalisée.
4. Un collaborateur ne peut pas être affecté à plusieurs tâches simultanément si elles se chevauchent dans le temps.

### Macro-tâches
1. Une macro-tâche doit être associée à un projet et à une phase spécifique.
2. Chaque macro-tâche doit avoir un titre, une description, une estimation de temps, et un état (à faire, en cours, terminé).
3. Les macro-tâches doivent pouvoir être chiffrées en termes de coût ou de temps.

### Projets
1. Chaque projet doit avoir un nom unique, une description, une date de début, et une date de fin.
2. Les projets doivent être divisés en phases, et chaque phase doit contenir des macro-tâches.
3. Les projets doivent permettre l'affectation de collaborateurs à des tâches spécifiques.
4. Les projets doivent inclure un suivi des statuts (en cours, terminé, annulé).

### Ressources
1. Les collaborateurs affectés à une tâche doivent être choisis en fonction de leurs compétences et de leur disponibilité.
2. Le taux d'occupation des collaborateurs doit être calculé automatiquement en fonction des tâches assignées.
3. Les ressources doivent inclure des outils pour visualiser les collaborateurs disponibles pour une tâche donnée.

### Périodes d'indisponibilité
1. Les périodes d'indisponibilité doivent être enregistrées avec des motifs (vacances, maladie, etc.).
2. Les périodes d'indisponibilité doivent être intégrées dans le calcul de la disponibilité des collaborateurs.
3. Les périodes d'indisponibilité importées d'autres outils doivent être validées avant d'être ajoutées.

### Matrice de Compétences
1. Chaque matrice doit inclure une liste de compétences et des niveaux d'évaluation (débutant, intermédiaire, expert).
2. Les matrices doivent permettre d'évaluer les compétences des collaborateurs sur une base périodique.
3. Les matrices doivent être exportables pour des rapports ou des intégrations externes.

### Rapports et Graphiques
1. Les rapports doivent inclure des données sur les projets, les tâches, les collaborateurs, et les ressources.
2. Les graphiques doivent permettre de visualiser les taux d'occupation, les progrès des projets, et les compétences des collaborateurs.
3. Les rapports doivent être exportables en formats PDF ou Excel.

---
