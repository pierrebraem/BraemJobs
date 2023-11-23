## Initialisation du projet sur un émulateur Android

Avant de commencer, vous devez être sur que Android Studio soit installer sur votre ordinateur

1. Ouvrir un terminal à la racine du projet.

2. Taper la commande "Ionic build" afin de créer le dossier "dist".

3. Si un dossier android existe, supprimez-le.

4. Taper la commande "npx cap add android" afin de créer le dossier android.

5. Taper la commande "npx cap open android" afin d'ouvrir Android Studio et build le projet.

6. Lancer le projet avec un émulateur de votre choix et l'application devrait se lancer dessus.

## Installation de l'application sur un téléphone physique via un fichier APK

1. Générer un fichier .apk en allant sur "Build", "Build Bundle/APK", "Build APK".

2. Le fichier .apk devrait se trouver dans "android/app/build/outputs/apk/debug".

3. Branchez un téléphone Android sur votre ordinateur et transfèrez le fichier .apk dans un dossier auquel vous aurez accès sur votre téléphone.

4. Exécutez le .apk sur votre téléphone. Il se peut que Android bloque l'installation. Allez dans les paramètres et autorisez l'exécution des applications non-officielles.

5. Une fois installé, vous pouvez lancer l'application.