## Déploiment du projet sur Firebase

1. Ouvrir un terminal à la racine du projet.

2. Taper la commande "Ionic build" afin de créer le dossier "dist".

3. Vérifier que les outils de firebase sont installés. Pour cela, taper la commande "firebase --version". Si il retourne la version, il est installé. Sinon, installez-le avec "npm install -g firebase-tools".

4. Taper la commande "firebase login" pour vous connecter à votre compte Google.

5. Si c'est la première fois que vous déployez le projet, tapez "firebase init" et tapez suivez les instructions suivantes :
* Choissiez l'option "Hosting" avec espace, puis entrer.
* Dans le choix du projet, choisir "Use an existing project", puis "recrutementIC".
* Choisir comme dossier public "dist".
* Ensuite, on va vous demandez si le site est une single-page. Choissiez oui.
* Refusez l'option d'initialiser un dépot GitHub.
* Refusez également la réecriture du fichier "index.html".

6. Tapez la commande "firebase deploy" pour le publier sur le cloud.