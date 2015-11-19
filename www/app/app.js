/*global require*/
'use strict';

require([
  'jquery',
  'ionic'
], function () {
  require([
    'ionic-sidemenu-overlaying',
    'tabSlideBox',
  ], function () {
    require([
      'felds/felds.route',
      'liste/liste.route',
      'fiche/fiche.route'
    ], function (feldsRoute, listeRoute, ficheRoute) {
      angular.module('felds', [
        'ionic',
        'ionic-sidemenu-overlaying',
        'tabSlideBox',
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
        var date = new Date();
        $urlRouterProvider.otherwise('/liste/' + date.getMonth());
      });

      angular.bootstrap(document, ['felds']);
    });
  });
});
