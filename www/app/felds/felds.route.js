'use strict';
define(['felds/felds.controller'], function (feldsController) {
  var moduleName = 'felds.route';

  angular.module(moduleName, [feldsController]).config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider){
    $stateProvider.state('app', {
      url: '',
      abstract: true,
      templateUrl: 'app/felds/templates/felds.html',
      controller: 'FeldsController as vm'
    })
  }

  return moduleName;
});
