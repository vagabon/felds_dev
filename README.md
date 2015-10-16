# felds_dev
Application en IONIC (AngularJS + Apache Cordova) : Fruits et légumes de saison

### Installation
* Installer NodeJS : https://nodejs.org/en/
* Installer Ionic & Cordova :

> npm install -g ionic cordova

* MAJ Ionic & Cordova :

> npm update -g ionic cordova

### Racine du projet

* Initialiser le projet (à partir de package.json - Libre à vous d'ajouter des plateformes ou des pluggins)

> ionic state reset

* Initialiser Sass

> npm install gulp

> ionic setup sass 

* MAJ des libs de ionic - optionnel -

> ionic lib update

### Lancement du projet

* Sur browser

> ionic serve

* Sur Android (Nécessite adb + SDK + JDK)

> ionic run android

Debuggage sur Android : https://chrome.google.com/webstore/detail/adb/dpngiggdglpdnjdoaefidgiigpemgage


### Création d'un projet ionic

> ionic start "nomProjet" "templates"

Templates disponibles : tabs (par défaut), sidemenu, maps, salesforce, tests, complex-list, blank

> cd "nomProjet"

> ionic platform android (Nécessite adb + SDK + JDK)

> ionic platform ios (Nécessite MacOS)

> ionic setup sass (npm install gulp si non installé)

*	Remplacer <link href="lib/ionic/css/ionic.css" rel="stylesheet"> par <link href="css/ionic.app.css" rel="stylesheet"> dans le head de l’index.html

*	Dans le fichier ionic.project, ajouter "gulpStartupTasks": ["sass", "watch"]

* Ajout pluggin Cordova

> cordova plugin add cordova-plugin-inappbrowser

* Dans "package.json" : ajouter le plugin à la main (pour le ionic state reset)

* Bug lors de l'ajout de plateform : modifier "package.json" "cordovaPlatforms": ["android", "browser", "..." ]
