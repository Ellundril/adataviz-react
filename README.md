# Adataviz en react

## Description

Ce projet reprend le projet Adataviz ([voir le repo github](https://github.com/Ellundril/Adataviz.git)) en utilisant React à la place de javascript pour gérer l'interactivité de la page.
Adataviz est un projet qui affiche des données provenant d'une API publique, ici openData Paris, sous forme de cartes.

## Source des données

L' API publique sur laquelle j'ai trouvé les données : [open data Paris](https://opendata.paris.fr/pages/home/)

Le nom du jeu de données utilisées dans ce projet : **Les titres les plus prêtés dans les bibliothèques de prêt**

## Lancement du projet

1. Cloner le repo github

   ```bash
   git clone git@github.com:Ellundril/adataviz-react.git
   ```

2. Installer les paquets node

   ```bash
   npm install
   ```

3. Lancer le projet

   ```bash
   npm run dev
   ```

## Adataviz versus Adataviz-react

| fonctionnalités       | **Adataviz**                                                                             | **Adataviz-react**                                                                                                      |
| --------------------- | ---------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Affichage des cartes  | script.js efface et fait réapparaitre à chaque nouvelle requête de filtre, recherche ... | react se charge de vérifier l'état et garde seulement les cartes nécessaires sans avoir à tous effacer à chaque demande |
| clics sur les boutons | des addEventListeners dans script.js                                                     | onClick dans les composants qui gère l'états des différents éléments                                                    |
| composants            | pas de composants on utilise createElement                                               | on utilise des composants dans lesquels on passe des props                                                              |

### Améliorations apportées dans le projet react

- **L'interdépendances des filtres** : dans adataviz ils étaient indépendants les uns des autres
- **la recherche en direct**: dès que l'on tape une lettre la liste de carte se met à jour
