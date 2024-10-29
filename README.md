# Mealz Documentation

Ce projet utilise [Docusaurus](https://docusaurus.io/) pour gérer la documentation des projets iOS, Android, et Web. Ce README fournit des instructions pour installer, build, collaborer, et générer de nouvelles versions.

## Prérequis

Assurez-vous d'avoir [Node.js](https://nodejs.org/) (version 18 ou supérieure) installé sur votre machine.

## Installation

Clonez le dépôt et installez les dépendances nécessaires :

```bash
git clone git@github.com:miamtech/mealz-documentation.git
cd mealz-documentation
npm install
# ou
yarn install
```

## Démarrage en mode développement

Pour démarrer le serveur de développement :

```bash
npm start
# ou
yarn start
```

Ouvrez votre navigateur et allez à l'adresse http://localhost:3000. Vous devriez voir le site de documentation en développement.

## Collaborer

Ajoutez un fichier Markdown (`.md` ou `.mdx`) dans le dossier approprié sous `docs/`.

Par exemple, pour ajouter une nouvelle page à la documentation iOS :

`docs/ios/new-page.mdx`

## Créer une nouvelle version de la documentation

Pour versionner la documentation, utilisez la commande docusaurus `docs:version`.

> <span style="color:orange">**⚠️ Attention**</span>.  
> Pour éviter de maintenir une version en cours de développement à deux endroits différents, il vaut mieux attendre qu'une version soit figée avant de créer la version appropriée.

Par exemple, pour créer une nouvelle version 1.1 pour le projet Mobile :

```bash
npm run docusaurus docs:version:mobile 1.1
# ou
yarn docusaurus docs:version:mobile 1.1
```

Modifiez ensuite le fichier `docusaurus.config.js` afin de mettre à jour la barre de navigation, ainsi que versions `current` et `latest` du projet correspondant.

Pour Android et iOS, vous risquez d'avoir ce type d'erreur au lancement de l'app :

```
Can't resolve '../shared/overview/introduction.mdx' in 'path/to/file.mdx'
```

Pour les corriger, Il faudra recopier le fichier `docs/shared/overview/introduction.mdx` dans `path/to/file.mdx` en s'assurant d'utiliser les composants .mdx
**de la même version**, c'est à dire dans le même dossier `version-x.x`. 

Cela évitera les effets de bord en modifiant un fichier partagé entre plusieurs versions.
