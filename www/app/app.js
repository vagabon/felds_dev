/*global require*/
'use strict';

require([
  'ionic'
], function () {
  require([
    'ionic-sidemenu-overlaying',
    'felds/felds.route',
    'liste/liste.route',
    'fiche/fiche.route'
  ], function (feldsRoute, listeRoute, ficheRoute) {
    angular.module('felds', [
      'ionic',
      'ionic-sidemenu-overlaying',
      feldsRoute,
      listeRoute,
      ficheRoute
    ]).run(function ($ionicPlatform) {
      $ionicPlatform.ready(function () {
        if (window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
          StatusBar.styleDefault();
        }
      });
    }).config(function ($urlRouterProvider) {
      $urlRouterProvider.otherwise('/liste');
    });

    angular.bootstrap(document, ['felds']);
  });
});
