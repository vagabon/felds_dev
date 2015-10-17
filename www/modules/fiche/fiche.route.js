'use strict';
define([
  'fiche/fiche.controller'
], function (ficheController) {
  var moduleName = 'felds.fiche.route';

  angular.module(moduleName, [ficheController]).config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider){
    $stateProvider.state('app.fiche', {
      url: '/fiche/:nom/:mois/:type',
      views: {
        'menuContent': {
          templateUrl: 'modules/fiche/templates/fiche.html',
          controller: 'FeldsFicheController as vm'
        }
      }
    });
  }

  return moduleName;
});
