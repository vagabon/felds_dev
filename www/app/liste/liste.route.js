'use strict';

define([
  'liste/liste.controller'
], function (listeController) {

  var moduleName = 'felds.liste.route';

  angular.module(moduleName, [listeController]).config(RouteConfig);

  RouteConfig.$inject = ['$stateProvider'];

  function RouteConfig($stateProvider) {
    $stateProvider.state('app.liste', {
      url: '/liste',
      views: {
        'menuContent': {
          templateUrl: 'app/liste/templates/liste.html',
          controller: 'FeldsListeController as vm'
        }
      }
    });
  };

  return moduleName;
});
