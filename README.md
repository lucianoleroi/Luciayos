# My Shop Administration Interface
Ce projet vise à fournir une interface d'administration pour gérer les produits d'une boutique en ligne via une API.
 
## Outils utilisés
Javascript

Vue.js

Docker

PHP

Postman

## Prérequis
Docker et Docker Compose doivent être installés sur votre système.

## Installation
Dans le dossier "docker", exécutez la commande :

"docker-compose up -d --build"

pour installer l'environnement.
Assurez-vous que les 4 conteneurs sont en cours d'exécution. Vous pouvez vérifier en accédant à l'URL : "http://localhost/". Si vous voyez la page par défaut de Symfony, cela signifie que tout est correctement chargé.
Accédez au conteneur PHP et suivez les étapes suivantes.
À l'intérieur du conteneur PHP, exécutez "bin/console doctrine:database:create" (vous devriez voir un message de succès).

Ensuite, exécutez "bin/console doctrine:migrations:migrate" pour mettre à jour votre base de données.
Pour utiliser le système d'authentification, exécutez "bin/console app:add-user" et suivez le processus pour créer votre premier utilisateur sur le projet.

## Gestion du Serveur
Voici deux commandes pour démarrer et arrêter votre environnement Docker :

"docker-compose up -d" -> lance les conteneurs Docker.
"docker-compose down" -> arrête les conteneurs Docker.
Vous pouvez trouver la documentation de l'API à l'URL suivante : "http://localhost/api/docs"

Administration My Shop
Ce template vous aidera à démarrer le développement avec Vue 3 dans Vite pour l'interface d'administration.

## Configuration recommandée de l'IDE
VSCode + Volar (et désactiver Vetur) + TypeScript Vue Plugin (Volar).

## Personnaliser la Configuration
Consultez Vite Configuration Reference pour configurer Vite.

## Configuration du Projet

"cd "My Shop"

"npm install"

"npm run dev"

"npm run build"

Installez Docker et lancez le conteneur avec "docker build -t admin-interface" et "docker run -p -d admin-interface".
Utilisez l'endpoint "/Login" pour obtenir un jeton JWT en envoyant une requête POST avec les informations d'identification au serveur.
Accédez à l'interface d'administration via : "http://localhost:3000/admin".

#### P.S :

Une grande partie de notre code est mise en commentaire car des erreurs de syntaxe sont survenues, or il est fonctionnel.



#### Ce README.md résume les étapes clés pour installer, gérer le serveur Docker, et accéder à l'interface d'administration de My Shop. Assurez-vous de suivre ces étapes pour démarrer et utiliser correctement le projet.