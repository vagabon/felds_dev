/*global require*/
'use strict';

require([
  'ionic'
], function () {
  angular.module('felds', []);
  require([
    'felds/felds.route',
    'liste/liste.route',
    'fiche/fiche.route'
  ], function (feldsRoute, listeRoute, ficheRoute) {
    angular.module('felds', [
      'ionic',
      feldsRoute,
      listeRoute,
      ficheRoute
    ]).run(function ($ionicPlatform) {
      $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
          // org.apache.cordova.statusbar required
          StatusBar.styleDefault();
        }
      });
    }).config(function ($urlRouterProvider) {
      $urlRouterProvider.otherwise('/app/liste');
    });
    angular.bootstrap(document, ['felds']);
  });
});
