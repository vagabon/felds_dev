'use strict';
define([
  'fiche/fiche.controller'
], function () {
  var moduleName = 'felds.fiche.route';
  angular.module(moduleName, [
    'felds.fiche.controller'
  ]).config(function ($stateProvider) {
    $stateProvider.state('app.fiche', {
      url: '/fiche/:nom/:mois/:type',
      views: {
        'menuContent': {
          templateUrl: 'modules/fiche/templates/fiche.html',
          controller: 'PlaylistCtrl'
        }
      }
    });
  });
  return moduleName;
});
